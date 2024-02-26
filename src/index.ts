import OpenAI from 'openai';

export async function poll(
  openai: OpenAI,
  thread: OpenAI.Beta.Threads.Thread,
  run: OpenAI.Beta.Threads.Runs.Run,
  options: Partial<PollOptions> = defaultPollOptions
): Promise<OpenAI.Beta.Threads.Runs.Run> {
  const mergedOptions: PollOptions = { ...defaultPollOptions, ...options };
  const maxAttempts = mergedOptions.maxAttempts;
  const interval = mergedOptions.intervalInMilliseconds;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const retrievedRun = await openai.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );
      mergedOptions.showLogs && console.log(retrievedRun.status);
      if (
        retrievedRun.status === 'completed' ||
        retrievedRun.status === 'failed'
      ) {
        mergedOptions.showLogs &&
          console.log(`Run completed with status: ${retrievedRun.status}`);
        return retrievedRun;
      } else {
        mergedOptions.showLogs &&
          console.log(
            `Attempt ${attempt}: Run status is ${
              retrievedRun.status
            }, polling again in ${interval / 1000} seconds...`
          );
      }
    } catch (error) {
      mergedOptions.showLogs &&
        console.error('Error polling run status:', error);
      throw error;
    }

    await new Promise(resolve => setTimeout(resolve, interval));
  }

  throw new Error('Max polling attempts reached');
}

export interface PollOptions {
  maxAttempts: number;
  intervalInMilliseconds: number;
  showLogs: boolean;
}

export const defaultPollOptions: PollOptions = {
  maxAttempts: 60,
  intervalInMilliseconds: 4000,
  showLogs: false,
};
