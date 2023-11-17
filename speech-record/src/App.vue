<script setup>
  import { ref, onMounted } from 'vue';
  const transcript = ref('');
  const isRecording = ref(false);

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const speechRecord = new Recognition();

  onMounted(() => {
    speechRecord.continuous = true;
    speechRecord.interimResults = true;

    speechRecord.onstart = () => {
      console.log('speechRecord Started');
      isRecording.value = true;
    }

    speechRecord.onend = () => {
      console.log('speechRecord Stopped');
      isRecording.value = false;
    }

    speechRecord.onresult = (event) => {
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];

        if (result.isFinal) CheckForCommand(result);
      }

      const textTyping = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      
      transcript.value = textTyping;
    }
  })

  const CheckForCommand = (result) => {
    const textTyping = result[0].transcript;
    if (textTyping.includes('stop recording')) {
      speechRecord.stop()
    } else if (
      textTyping.includes('what is the time') ||
      textTyping.includes('what\'s the time')
    ) {
      speechRecord.stop();
      alert(new Date().toLocaleTimeString());
      setTimeout(() => speechRecord.start(), 100);
    }
  }

  const ToggleMic = () => {
    if (isRecording.value) {
      speechRecord.stop();
    } else {
      speechRecord.start();
    }
  }
</script>

<template>
	<div class="app">
		<button :class="`mic`" @click="ToggleMic">Record</button>
		<div class="transcript" v-text="transcript"></div>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: #000002;
	color: #f0e8c6;
}

.mic {
  background: rgb(4, 116, 30);
}

.transcript {
  padding-top: 30px;
}
</style>