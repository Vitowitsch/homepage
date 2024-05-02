import Vue from 'vue';
import VueCompositionApi, { getCurrentInstance, ref } from '@vue/composition-api';

Vue.use(VueCompositionApi);
import axios from 'axios';

const proxy_url = "https://api.allorigins.win/raw?url=";
const open_ai_backend_url =
  "https://2ald60wqvk.execute-api.eu-central-1.amazonaws.com/prod";


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
    let fullUrl = `${proxy_url}?url=${encodeURIComponent(open_ai_backend_url)}`;
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



export function useChat() {
    const chatMessages = ref([]);
    const mytext = ref('');
    const vueInstance = getCurrentInstance();  

    const sendMessage = async () => {
        try {
            chatMessages.value.push({ role: "user", content: mytext.value });
            mytext.value = "";
            chatMessages.value.push({ role: "assistant", content: "Typing..." });

            if (vueInstance) {
              vueInstance.$nextTick(() => {
                  const chatContainer = vueInstance.$refs.chatContainer as Element;
                  if (chatContainer) {
                      chatContainer.scrollTop = chatContainer.scrollHeight;
                  }
              });
          }

          // let fullUrl = `${proxy_url}?url=${encodeURIComponent(open_ai_backend_url)}`;
          const response = await axios.post<ApiResponse>(open_ai_backend_url, {
            text: mytext.value,
          });

          if (response.status === 200) {
            const assistantMessage = response.data.choices[0].message.content;
            chatMessages.value.push({ role: "assistant", content: assistantMessage });
        } else {
            chatMessages.value.push({ role: "assistant", content: "Error: Unable to process your request." });
            chatMessages.value.pop();
        } 
    } catch (error) {
        console.error(error);
        chatMessages.value.push({ role: "assistant", content: "Error: Unable to process your request." });
    }

    return {
        chatMessages,
        mytext,
        sendMessage
    };
  }
}



// export async function sendMessage2() {
//   try {
//     const proxyUrl = "https://api.allorigins.win/raw?url=";
//     const targetUrl = "https://www.botsandbytes.de/#";

//     const fullUrl = await axios.get(
//       proxyUrl + encodeURIComponent(targetUrl),
//     );

//     console.log(fullUrl);

//     // const userMessage = this.mytext;

//     chatMessages.push({ role: "user", content: this.mytext });

//     // Clear input after submitting
//     this.mytext = "";
//     this.chatMessages.push({ role: "assistant", content: "Typing..." });

//     // Use nextTick to wait for DOM update before scrolling
//     this.$nextTick(() => {
//       // Scroll to the bottom of the chat
//       this.$refs.chatContainer.scrollTop =
//         this.$refs.chatContainer.scrollHeight;
//     });
//     const openaiResponse = axios.post < ApiResponse > (fullUrl, {
//       text: this.mytext,
//     });

//     // Remove the "Typing..." message
//     this.chatMessages.pop();

//     // Add assistant message to chat (if successful response)
//     if (openaiResponse.status === 200) {
//       const assistantMessage =
//         openaiResponse.data.choices[0].message.content;
//       this.chatMessages.push({
//         role: "assistant",
//         content: assistantMessage,
//       });
//     } else {
//       this.chatMessages.push({
//         role: "assistant",
//         content: "Error: Unable to process your request.",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     this.chatMessages.push({
//       role: "assistant",
//       content: "Error: Unable to process your request.",
//     });
//   }
// }
