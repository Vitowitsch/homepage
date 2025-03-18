<template>
  <v-container class="main-div" fluid>
    <v-card class="chat-container" elevation="2">
      <v-card-text ref="chatContainer" class="chat">
        <v-row v-for="(message, index) in chatMessages" :key="index" class="message-container">
          <v-col cols="12" style="display: flex; flex-wrap: wrap;">
            <v-card :class="message.role === 'user' ? 'user-message' : 'assistant-message'" class="chat-bubble"
              elevation="2" style="padding: 8px; word-wrap: break-word; white-space: pre-line; max-width: 100%;">
              <v-card-text>{{ message.content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-form @submit.prevent="handleSubmit" class="user-input">
      <v-text-field v-model="mytext" label="Type your message here" outlined dense class="message-input" color="white"
        bg-color="#1e1e1e" hide-details @keyup.enter="handleEnterKey"></v-text-field>

      <v-btn @click="handleSubmit" class="send-button" icon>
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { onMounted, ref, getCurrentInstance, } from 'vue';
import { useChat } from "@/composables/openai/open_ai_backend";

export default {
  setup() {
    // const userImage = ref(`${process.env.BASE_URL}Images/user-profile-3.png`);
    // const assistantImage = ref(`${process.env.BASE_URL}Images/chatbot.jpg`);

    const { chatMessages, mytext, sendMessage } = useChat();

    const vueInstance = getCurrentInstance(); // Get access to the Vue instance

    const handleSubmit = async () => {
      await sendMessage();
    };

    const handleEnterKey = async (event) => {
      if (event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
        await sendMessage();
      }
    };

    onMounted(() => {
      if (chatMessages.value.length === 0) {
        chatMessages.value.push({
          role: "assistant",
          content: "Hi! I'm here to provide additional information about the website owner. Ask me anything...?",
        });
      }
    });

    return {
      chatMessages,
      mytext,
      handleSubmit,
      handleEnterKey,
      sendMessage,
    };
  },
};
</script>

<style scoped>
/* Main Dark Theme */
.main-div {
  background-color: #121212;
  color: white;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
}

/* Chat Container */
.chat-container {
  flex: 1;
  overflow-y: auto;
  max-height: 75vh;
  padding: 16px;
  background: #1e1e1e;
  border-radius: 12px;
  color: white;
}

/* Chat Messages */
.chat-bubble {
  max-width: 70%;
  word-wrap: break-word;
  white-space: pre-line;
}

/* User Message */
.user-message {
  background-color: #040404 !important;
  color: white !important;
}

/* Assistant Message */
.assistant-message {
  background-color: #333 !important;
  color: white !important;
}

/* Input and Button */
.user-input {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #121212;
  border-radius: 10px;
}

.message-input {
  flex-grow: 1;
  margin-right: 8px;
}

.send-button {
  height: 48px;
  width: 48px;
}
</style>