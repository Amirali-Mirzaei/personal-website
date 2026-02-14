<template>
   <div>
    <Intro v-if="showIntro" />
  </div>
 
   <div class="tabs">
    <button
      :class="['about-btn', { active: activeTab === 'about' }]"
      @click="activeTab = 'about'"
    >
      About
    </button>

    <button
      :class="{ active: activeTab === 'skills' }"
      @click="activeTab = 'skills'"
    >
      Skills
    </button>

    <button
      :class="{ active: activeTab === 'badges' }"
      @click="activeTab = 'badges'"
    >
      Earned
    </button>

    <button
      :class="['contact-btn', { active: activeTab === 'contact' }]"
      @click="activeTab = 'contact'"
    >
      Contact
    </button>
  </div>


  <div class="tab-content">
    <Transition name="fade-slide" mode="out-in">
     <div :key="activeTab">
      <component :is="activeTabComponent" />
     </div>
  </Transition>
  </div>

</template>

<script setup>
import { ref, watch, computed } from 'vue'
import About from '~/components/About.vue'
import Intro from '~/components/Intro.vue'
import Skills from '~/components/Skills.vue'
import Badges from '~/components/Badges.vue'
import Contact from '~/components/Contact.vue'

const showIntro = ref(true)
const activeTab = ref('about')

watch(showIntro, (val) => {
  if (!val) showIntro.value = false
})

const activeTabComponent = computed(() => {
  return {
    about: About,
     skills: Skills,
      badges: Badges,
       contact: Contact
  }[activeTab.value]
})
</script>

<style lang="scss" scoped>
.tabs {
display: flex;
justify-content: center;
gap: 0;
margin-top: 40px;
flex-wrap: wrap;
}

.tab-content {
max-width: 900px;
margin: 30px auto;
padding: 45px;
border: 3px solid $primary-hover;
border-radius: 16px;
background-color: $secondary;
backdrop-filter: blur(6px);
}

button {
background-color: $secondary;
font-size: 150%;
margin-top: 83px;
color: $primary;
border: 2px solid $primary;
transition: all .5s;  
font-family: $font-base;
border-radius: 0;
padding: 10px;
 &:hover {
  border-color: $primary-hover;
  background-color: $primary;
  color: $bg-dark;
  transform: translateY(-2px);
  cursor: pointer;
 }
} 

button.active {
  background-color: $primary;
  color: $bg-dark;
  border-color: $primary-hover;
}

.about-btn {
border-top-left-radius: 8%;
border-bottom-left-radius: 8%;
}

.contact-btn {
border-top-right-radius: 8%;
border-bottom-right-radius: 8%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 600px) {
  button {
    width: 70%;
    margin-top: 10px;
    border-radius: 10px;
  }
}
</style>

