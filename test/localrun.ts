import { get_answer } from "../src/composables/openai/open_ai_backend";
interface ApiResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
      index: number;
      message: {
        role: string;
        content: string;
      };
      logprobs: any;
      finish_reason: string;
    }>;
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
    system_fingerprint: any;
  }
async function localRun() {
  const answer = await get_answer("What is the capital of France?");
  console.log(answer);
}

localRun();
