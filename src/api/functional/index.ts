/**
 * @packageDocumentation
 * @module api.functional
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

export * as cli from "./cli";

/**
 * Check if the server is running.
 * 
 * @returns "OK"
 * 
 * @controller AppController.healthz()
 * @path GET /healthz
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function healthz
    (
        connection: IConnection
    ): Promise<healthz.Output>
{
    return Fetcher.fetch
    (
        connection,
        healthz.ENCRYPTED,
        healthz.METHOD,
        healthz.path()
    );
}
export namespace healthz
{
    export type Output = string;

    export const METHOD = "GET" as const;
    export const PATH: string = "/healthz";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/healthz`;
    }
}