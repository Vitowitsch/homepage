import { get_answer } from "../src/components/openai/open_ai_backend";

export async function localRun() {
  //   const content = await retrieveHomePageContent();
  //   console.log(content);
  const answer = await get_answer("What is the capital of France?");
  console.log(answer);
}
