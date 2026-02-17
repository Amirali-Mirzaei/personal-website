<template>
 <Transition name="fade"  @after-leave="onIntroFinished">
  <div class="intro" v-if="show">
    <div class="scrim"></div>
    <h1>{{ displayedText }}<span class="caret">|</span></h1>
  </div>
 </Transition>

  <Transition name="fade">
    <div v-if="showalert" class="customalert">
      {{ alertMessage }}
      <button @click="showalert = false">OK</button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted} from 'vue'

const fullText = 'Amirali Mirzaei'
const displayedText = ref('')
const show = ref(true)

const showalert = ref(false)
const alertMessage = ref('')

onMounted(() => {
  let index = 0
  const typingSpeed = 250

  const timer = setInterval(() => {
    displayedText.value += fullText[index]
    index++
    if (index === fullText.length) {
      clearInterval(timer)
      setTimeout(() => {
        show.value = false
      }, 1000)
    }
  }, typingSpeed)
})

const onIntroFinished = () => {
  alertMessage.value = 'Got a mouse? Hover over Skills and Earned!'
  showalert.value = true
}
</script>

<style scoped lang="scss">
.intro {
position: fixed;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
opacity: 1;
transition: opacity 1s ease;
 h1 {
  font-size: 8rem;
  color: $primary;
  font-family: $font-base;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
  }
}

.scrim {
position: absolute;
inset: 0;
background-color: black;
z-index: 1;
}

.caret {
display: inline-block;
animation: blink 1s steps(1) infinite;
}

@keyframes blink {
0%, 50% { opacity: 1; }
51%, 100% { opacity: 0; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
   pointer-events: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.customalert {
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
background-color: $primary;
color: $bg-dark;
padding: 10px;
border-radius: 15px;
font-size: 1.5rem;
text-align: center;
z-index: 1;
width: 100%;
max-width: 800px;
font-size: clamp(1rem, 2.5vw, 1.4rem);
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: $hint;
    color: $bg-dark;
    border-radius: 6px;
    border: none;
    font-size: 15px; 
    font-weight: 600;
    font-family: 'Audiowide'; 
    transition: all .4s;
    cursor: pointer;
    &:hover { 
    background: $bg-dark; 
    color: white;
    }
  }
}

@media (max-width: 600px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
