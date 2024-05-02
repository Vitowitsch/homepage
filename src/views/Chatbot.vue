<template>
  <div>
    <div class="main-div">
      <div class="chat-container">
        <div class="chat" ref="chatContainer">
          <div v-for="(message, index) in chatMessages" :key="index" class="message-container">
            <!-- <img v-if="message.role === 'assistant'" :src="assistantImage" alt="Assistant Profile"
              class="profile-image" /> -->
            <div :class="{
            'user-message': message.role === 'user',
            'assistant-message': message.role === 'assistant',
          }">
              {{ message.content }}
            </div>
            <!-- <img v-if="message.role === 'user'" :src="userImage" alt="User Profile" class="profile-image" /> -->
          </div>
        </div>
      </div>
      <form class="user-input">
        <input v-model="mytext" type="text" id="mytext" required placeholder="Type your message here"
          @keyup.enter="handleEnterKey" />
        <button type="button" @click="handleSubmit">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from '@vue/composition-api';
import { useChat } from '@/composables/openai/open_ai_backend';

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
      chatMessages.value.push({
        role: "assistant",
        content: "Hi! How can I help you today?"
      });
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
.main-div {
  text-align: center;
  height: calc(100vh - 64px);
  top: 0;
}

.header {
  top: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
  z-index: 1;
  /* Ensure the header is above the chat container */
  height: 15%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add shadow to the header */
  display: flex;
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 83%;
}

.chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* Add scrollbar for the chat container */
  padding: 2%;
}

.chat::-webkit-scrollbar {
  width: 10px;
  /* Set the width of the scrollbar */
  background-color: white;
}

.user-message {
  align-self: flex-end;
  background-color: #cce5ff;
  /* Light blue background for user messages */
  padding: 8px;
  border-radius: 8px;
  margin-top: 3%;
  margin-left: auto;
  /* Align to the right corner */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add shadow to the messages */
  text-align: left;
  max-width: 70%;
  /* Limit the width of the message */
  word-wrap: break-word;
  /* Allow long words to be broken and wrap to the next line */
  white-space: pre-line;
  /* Preserve line breaks */
}

.assistant-message {
  align-self: flex-start;
  background-color: #f0f0f0;
  /* Light gray background for assistant messages */
  padding: 8px;
  border-radius: 8px;
  margin-top: 3%;
  margin-right: auto;
  /* Align to the left corner */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add shadow to the messages */
  text-align: left;
  max-width: 70%;
  /* Limit the width of the message */
  word-wrap: break-word;
  /* Allow long words to be broken and wrap to the next line */
  white-space: pre-line;
  /* Preserve line breaks */
}

.user-input {
  display: flex;
  width: 96%;
  background-color: #fff;
  padding: 8px;
  border-radius: 50px;
  height: 11%;
  bottom: 0;
  margin: 1% 2%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.message-container {
  display: flex;
  margin-bottom: 10px;
  /* Add spacing between messages */
}

.profile-image {
  width: 40px;
  /* Adjust the width of the profile image as needed */
  height: 40px;
  /* Adjust the height of the profile image as needed */
  border-radius: 50%;
  /* Make the image circular */
  margin-top: 3%;
  margin-left: 1%;
  margin-right: 1%;
}

.user-input input {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  height: 96%;
  width: 80%;
  margin-right: 4%;
  outline: none;
}

.user-input button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add shadow to the button */
}

@media (max-width: 768px) {
  .user-input button {
    height: 97%;
    width: 21%;
    font-size: 27px;
  }
}
</style>
