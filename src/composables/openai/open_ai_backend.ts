import { ref, nextTick, type Ref } from 'vue';
import axios from 'axios';

const open_ai_backend_url = "https://2ald60wqvk.execute-api.eu-central-1.amazonaws.com/prod/";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiResponse {
  thread_id: string;
  response: string;
}

export function useChat() {
  const chatMessages = ref<ChatMessage[]>([]);
  const mytext = ref('');
  const chatContainer: Ref<HTMLElement | null> = ref(null);
  const threadId = ref<string | null>(null); 

  const scrollToBottom = async () => {
    await nextTick();
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  };

  const sendMessage = async () => {
    const userMessage = mytext.value.trim();
    if (!userMessage) return;

    chatMessages.value.push({ role: "user", content: userMessage });
    mytext.value = "";
    chatMessages.value.push({ role: "assistant", content: "Typing..." });

    scrollToBottom();

    try {
      const response = await axios.post<ApiResponse>(open_ai_backend_url, {
        user_input: userMessage, 
        thread_id: threadId.value, 
      });

      if (response.status === 200) {
        threadId.value = response.data.thread_id;
        const assistantMessage = response.data.response;
        chatMessages.value.pop(); 
        chatMessages.value.push({ role: "assistant", content: assistantMessage });
      } else {
        chatMessages.value.push({ role: "assistant", content: "Error: Unable to process your request." });
        chatMessages.value.pop();
      }
    } catch (error) {
      console.error("API error:", error);
      chatMessages.value.pop();
      chatMessages.value.push({ role: "assistant", content: "Error: Unable to process your request." });
    }
  };

  return {
    chatMessages,
    mytext,
    sendMessage,
    chatContainer,
  };
}