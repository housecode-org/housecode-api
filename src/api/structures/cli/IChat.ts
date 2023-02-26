export interface IChat {
    discordToken: string;
    message: string;
}

export interface IChatResponse {
    discordMessageId?: string;
    success: boolean;
}
