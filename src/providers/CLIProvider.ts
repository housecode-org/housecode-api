import { IQuestion, IQuestionResponse } from "../api/structures/cli/IQuestion";

export namespace CLIProvider {
    export async function question(
        input: IQuestion,
    ): Promise<IQuestionResponse> {
        console.log(input.discordToken);
        console.log(input.text);
        return {
            success: false,
        };
    }
}
