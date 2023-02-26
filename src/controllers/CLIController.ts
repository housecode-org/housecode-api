import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { IQuestion, IQuestionResponse } from "../api/structures/cli/IQuestion";
import { CLIProvider } from "../providers/CLIProvider";

@Controller("cli")
export class CLIController {
    @TypedRoute.Post("question")
    question(@TypedBody() input: IQuestion): Promise<IQuestionResponse> {
        return CLIProvider.question(input);
    }
}
