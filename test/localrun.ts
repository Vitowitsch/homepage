const { get_answer } = require('../src/composables/openai/open_ai_backend');

async function localRun() {
  const answer = await get_answer("What is the capital of France?");
  console.log(answer);
}

localRun();