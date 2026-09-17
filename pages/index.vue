<template>
  <div>
    <Intro v-if="showIntro" />
  </div>

  <div class="tabs" ref="tabsWrapper">
    <button v-for="(tab, index) in tabList" :key="tab.key" :ref="el => setTabRef(el, index)"
      :class="['tab-btn', `${tab.key}-btn`, { active: activeTab === tab.key }]" @click="selectTab(tab.key)">
      <span class="tab-label">{{ tab.label }}</span>
    </button>

    <div class="tab-indicator" :style="indicatorStyle"></div>
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
import { ref, computed, nextTick, onMounted } from 'vue'
import About from '~/components/About.vue'
import Intro from '~/components/Intro.vue'
import Skills from '~/components/Skills.vue'
import Badges from '~/components/Badges.vue'
import Contact from '~/components/Contact.vue'

const showIntro = ref(true)
const activeTab = ref('skills')

const tabList = [
  { key: 'skills', label: 'Skills' },
  { key: 'badges', label: 'Earned' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
]

const tabRefs = ref([])
const setTabRef = (el, index) => {
  if (el) tabRefs.value[index] = el
}

const indicatorStyle = ref({ width: '0px', transform: 'translateX(0px)' })

const updateIndicator = () => {
  const index = tabList.findIndex(t => t.key === activeTab.value)
  const el = tabRefs.value[index]
  if (!el) return
  indicatorStyle.value = {
    width: `${el.offsetWidth}px`,
    transform: `translateX(${el.offsetLeft}px)`,
  }
}

const selectTab = (key) => {
  if (activeTab.value === key) return
  activeTab.value = key
  nextTick(updateIndicator)
}

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('resize', updateIndicator)
})

const activeTabComponent = computed(() => {
  return {
    skills: Skills,
    badges: Badges,
    about: About,
    contact: Contact,
  }[activeTab.value]
})
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0;
  margin: 40px auto 0;
  max-width: 900px;
  flex-wrap: wrap;
}

.tab-indicator {
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 3px;
  background: linear-gradient(to left, $primary, $primary-dark);
  border-radius: 3px;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 2;
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

.tab-btn {
  position: relative;
  background-color: $secondary;
  font-size: 150%;
  margin-top: 83px;
  color: $primary;
  border: 2px solid $primary;
  font-family: $font-base;
  border-radius: 0;
  padding: 10px 24px;
  transform: translateY(0) scale(1);
  transition: color 0.4s ease,
    border-color 0.4s ease,
    background-color 0.4s ease,
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  .tab-label {
    display: inline-block;
    transition: transform 0.35s ease;
  }

  &:hover {
    border-color: $primary-dark;
    color: $bg-dark;
    background-color: $primary-dark;
    transform: translateY(-4px) scale(1.04);
    cursor: pointer;

    .tab-label {
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.97);
  }
}

button.active,
.tab-btn.active {
  background: linear-gradient(to left, $primary, $primary-dark);
  color: $bg-dark;
  border-color: $primary-hover;
  cursor: auto;
  transform: translateY(-2px) scale(1.05);

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
}

.skills-btn {
  border-top-left-radius: 8%;
  border-bottom-left-radius: 8%;
}

.contact-btn {
  border-top-right-radius: 8%;
  border-bottom-right-radius: 8%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.98);
}

@media (max-width: 600px) {
  .tab-indicator {
    display: none;
  }

  .tab-btn {
    width: 70%;
    margin-top: 10px;
    border-radius: 10px !important;
  }
}
</style>