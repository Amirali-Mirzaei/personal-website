<template>
 <Transition name="fade"  @after-leave="onIntroFinished">
  <div class="intro" v-if="show">
    <div class="scrim"></div>
    <h1>{{ displayedText }}<span class="caret">|</span></h1>
  </div>
 </Transition>
</template>
  
<script setup>
import { ref, onMounted} from 'vue'

const fullText = 'Amirali Mirzaei'
const displayedText = ref('')
const show = ref(true)

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

@media (max-width: 600px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
