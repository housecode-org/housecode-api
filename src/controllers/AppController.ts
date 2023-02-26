import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller()
export class AppController {
    /**
     * Check if the server is running.
     * @returns {string} "OK"
     */
    @TypedRoute.Get("healthz")
    healthz(): string {
        return "OK";
    }
}
