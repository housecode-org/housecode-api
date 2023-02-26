import core from "@nestia/core";
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import express from "express";

import { Configuration } from "./Configuration";

export class Backend {
    private application_?: INestApplication;
    private is_closing_: boolean = false;

    public async open(): Promise<void> {
        this.application_ = await NestFactory.create(
            await core.DynamicModule.mount(__dirname + "/controllers"),
            { logger: false },
        );

        this.is_closing_ = false;
        this.application_.enableCors();
        this.application_.use(this.middleware.bind(this));

        await this.application_.listen(await Configuration.API_PORT());

        if (process.send) process.send("ready");
        process.on("SIGINT", async () => {
            this.is_closing_ = true;
            await this.close();
            process.exit(0);
        });
    }

    public async close(): Promise<void> {
        if (this.application_ === undefined) return;
        await this.application_.close();
        delete this.application_;
    }

    private middleware(
        _request: express.Request,
        response: express.Response,
        next: FunctionLike,
    ): void {
        if (this.is_closing_ === true) response.set("Connection", "close");
        next();
    }
}

type FunctionLike = (...args: any[]) => any;
