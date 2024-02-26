import OpenAI from 'openai';
export declare function poll(openai: OpenAI, thread: OpenAI.Beta.Threads.Thread, run: OpenAI.Beta.Threads.Runs.Run, options?: Partial<PollOptions>): Promise<OpenAI.Beta.Threads.Runs.Run>;
export interface PollOptions {
    maxAttempts: number;
    intervalInMilliseconds: number;
    showLogs: boolean;
}
export declare const defaultPollOptions: PollOptions;
