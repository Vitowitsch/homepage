import { ref, nextTick, type Ref, watch } from 'vue';
import axios from 'axios';

const open_ai_backend_url = "https://2ald60wqvk.execute-api.eu-central-1.amazonaws.com/prod/";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiResponse {
  thread_id: string;
  response: unknown;
}

// Reactive state variables
const chatMessages = ref<ChatMessage[]>([]);
const mytext = ref('');
const chatContainer: Ref<HTMLElement | null> = ref(null);
const threadId = ref<string | null>(null); 

watch(chatMessages, async () => {
  await nextTick(); // Ensure DOM updates before scrolling
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
}, { deep: true });

/**
 * Sends a message to the API and handles the response.
 */
const sendMessage = async () => {
  const userMessage = mytext.value.trim();
  if (!userMessage) return;

  addMessage("user", userMessage);
  mytext.value = "";
  addMessage("assistant", "Typing...");


  try {
    const response = await axios.post<ApiResponse>(open_ai_backend_url, {
      user_input: userMessage, 
      thread_id: threadId.value, 
    });

    if (response.status === 200) {
      threadId.value = response.data.thread_id;
      const extractedMessage = extractResponse(response.data.response)
      updateAssistantMessage(extractedMessage);
    } else {
      updateAssistantMessage("Error: Unable to process your request.");
    }
  } catch (error) {
    console.error("API error:", error);
    updateAssistantMessage("Error: Unable to process your request.");
  }
};


const extractResponse = (data: unknown): string => {
  if (typeof data === "string") {
    return data; // If it's already a string, return as-is
  } else if (typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    console.log("Extracting from object:", JSON.stringify(obj, null, 2));

    if ("response" in obj && typeof obj.response === "string") {
      return obj.response; // Directly return if it's a string
    }
    if ("message" in obj && typeof obj.message === "string") {
      return obj.message;
    }
    if ("text" in obj && typeof obj.text === "string") {
      return obj.text;
    }
    
    return JSON.stringify(obj, null, 2); // Convert to readable JSON
  }
  return "Unexpected response format";
};

/**
 * Adds a new message to the chat.
 */
const addMessage = (role: 'user' | 'assistant', content: string) => {
  chatMessages.value.push({ role, content });
};

/**
 * Updates the last assistant message.
 */
const updateAssistantMessage = (content: string) => {
  chatMessages.value.pop(); // Remove the "Typing..." message
  chatMessages.value.push({ role: "assistant", content });
};

/**
 * The composable function that provides chat functionality.
 */
export function useChat() {
  return {
    chatMessages,
    mytext,
    sendMessage,
    chatContainer,
  };
}