  import Vue from 'vue';
  import VueCompositionApi, { getCurrentInstance, ref } from '@vue/composition-api';

  Vue.use(VueCompositionApi);
  import axios from 'axios';

  const open_ai_backend_url =
    "https://2ald60wqvk.execute-api.eu-central-1.amazonaws.com/prod/";


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



  export function useChat() {
      const chatMessages = ref([]);
      const mytext = ref('');
      const vueInstance = getCurrentInstance();  

      const buildMessageHistory = () => {
        return chatMessages.value.map((message) => ({
          role: message.role,
          content: message.content,
        }));
      };

      const scrollToBottom = () => {
        if (vueInstance) {
          vueInstance.$nextTick(() => {
            const chatContainer = vueInstance.$refs.chatContainer as Element;
            if (chatContainer) {
              chatContainer.scrollTop = chatContainer.scrollHeight;
            }
          });
        }
      };
    
      const sendMessage = async () => {
        const userMessage = mytext.value;
        if (!userMessage) return;
        chatMessages.value.push({ role: "user", content: userMessage });
        mytext.value = "";
        chatMessages.value.push({ role: "assistant", content: "Typing..." });
        scrollToBottom();
          try {
            const conversationHistory = buildMessageHistory();

            const response = await axios.post<ApiResponse>(open_ai_backend_url, {
              conversationHistory,
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
    }
    return {
      chatMessages,
      mytext,
      sendMessage
  };
  }
