import axios from "axios";
import { open_ai_backend, proxy_url } from "./endpoints";

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

export async function get_answer(text: string): Promise<string> {
  try {
    let fullUrl = `${proxy_url}?url=${encodeURIComponent(open_ai_backend)}`;
    fullUrl = open_ai_backend;
    const response = await axios.post<ApiResponse>(fullUrl, {
      text: text,
    });
    return response.data["choices"][0].message.content;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
    }
    return "OPENAI_API_ERROR";
  }
}

export async function sendMessage() {
  try {
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const targetUrl = "https://www.botsandbytes.de/#";

    const fullUrl = await axios.get(
      proxyUrl + encodeURIComponent(targetUrl),
    );

    console.log(fullUrl);

    // const userMessage = this.mytext;

    .chatMessages.thispush({ role: "user", content: this.mytext });

    // Clear input after submitting
    this.mytext = "";
    this.chatMessages.push({ role: "assistant", content: "Typing..." });

    // Use nextTick to wait for DOM update before scrolling
    this.$nextTick(() => {
      // Scroll to the bottom of the chat
      this.$refs.chatContainer.scrollTop =
        this.$refs.chatContainer.scrollHeight;
    });
    const openaiResponse = axios.post < ApiResponse > (fullUrl, {
      text: this.mytext,
    });

    // Remove the "Typing..." message
    this.chatMessages.pop();

    // Add assistant message to chat (if successful response)
    if (openaiResponse.status === 200) {
      const assistantMessage =
        openaiResponse.data.choices[0].message.content;
      this.chatMessages.push({
        role: "assistant",
        content: assistantMessage,
      });
    } else {
      this.chatMessages.push({
        role: "assistant",
        content: "Error: Unable to process your request.",
      });
    }
  } catch (error) {
    console.error(error);
    this.chatMessages.push({
      role: "assistant",
      content: "Error: Unable to process your request.",
    });
  }
}
