export interface IQuestion {
    text: string;
    discordToken: string;
}

export interface IQuestionResponse {
    discordMessageId?: string;
    answer?: string;
    success: boolean;
}
