<template>
  <div class="chain-wrapper">
    <button class="nav-btn prev" @click="goPrev" aria-label="previous">‹</button>

    <Swiper
      class="chain-swiper"
      :loop="true"
      :centered-slides="true"
      :slides-per-view="3"
      :space-between="20"
      :breakpoints="breakpoints"
      @swiper="onSwiperReady"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.key"
        v-slot="{ isActive }"
      >
        <div
          class="chain-item"
          :class="{ 'is-active': isActive }"
          :style="{ '--accent-rgb': item.rgb }"
        >
          <div class="icon" :class="item.key"></div>

          <Transition name="panel-fade">
            <div v-if="isActive" class="sidebar-panel">
              <p>{{ item.text }}</p>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
    </Swiper>

    <button class="nav-btn next" @click="goNext" aria-label="next">›</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const items = [
  { key: 'flutter', rgb: '31,188,253',  text: 'Building responsive and cross-platform apps with Flutter for seamless experiences' },
  { key: 'dart',    rgb: '8,88,156',    text: 'Building robust, scalable, and expressive applications with Dart for powerful foundations' },
  { key: 'js',      rgb: '255,204,51',  text: 'I love turning complex problems into simple, elegant JavaScript solutions' },
  { key: 'vue',     rgb: '66,211,146',  text: 'Crafting reactive, component-driven interfaces with Vue.js that feel alive and intuitive' },
  { key: 'css',     rgb: '79,172,254',  text: 'Turning code into visually stunning and intuitive user experiences with CSS' },
  { key: 'html',    rgb: '255,61,61',   text: 'Structuring the web with semantic, clean, and accessible HTML for solid foundations' },
  { key: 'nuxt',    rgb: '255,255,255', text: 'Building high performance Vue apps with Nuxt.js for seamless user experiences' },
]

const swiperInstance = ref(null)
const onSwiperReady = (swiper) => {
  swiperInstance.value = swiper
}

const goPrev = () => swiperInstance.value?.slidePrev()
const goNext = () => swiperInstance.value?.slideNext()

const breakpoints = {
  0:   { slidesPerView: 1.6, spaceBetween: 14 },
  480: { slidesPerView: 2.2, spaceBetween: 18 },
  768: { slidesPerView: 3,   spaceBetween: 26 },
}
</script>

<style lang="scss" scoped>
.chain-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0;
  background: transparent;
}

.chain-swiper {
  flex: 1;
  padding: 30px 0;
  overflow: hidden;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
}

.nav-btn {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: $primary;
  color: $text-light;
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all .35s;

  &:hover {
    background: $primary-dark;
    transform: scale(1.08);
  }
}

.chain-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transform: scale(0.72);
  opacity: 0.35;
  filter: blur(1px);
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.45s ease,
    filter 0.45s ease;

  &.is-active {
    transform: scale(1);
    opacity: 1;
    filter: none;
  }
}

.icon {
  height: 90px;
  width: 160px;
  border-radius: 15px;
  background-size: 150px;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;

  &.js      { background-image: url('~/assets/images/Js.png'); }
  &.vue     { background-image: url('~/assets/images/Vue.png'); }
  &.css     { background-image: url('~/assets/images/css.webp'); }
  &.html    { background-image: url('~/assets/images/html.webp'); }
  &.nuxt    { background-image: url('~/assets/images/nuxt.jpg'); }
  &.dart    { background-image: url('~/assets/images/dart.png'); }
  &.flutter { background-image: url('~/assets/images/flutter.png'); }
}

.sidebar-panel {
  width: clamp(200px, 55vw, 280px);
  padding: 20px 18px;
  border-radius: 16px;
  text-align: center;
  color: #f2f2f5;
  background:
    radial-gradient(circle at 25% 15%, rgba(var(--accent-rgb), 0.14), transparent 55%),
    linear-gradient(160deg, rgba(14, 14, 18, 0.86), rgba(4, 4, 6, 0.94));
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(var(--accent-rgb), 0.4);
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.55),
    0 0 45px -10px rgba(var(--accent-rgb), 0.35);

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.35px;
    line-height: 1.5;
    text-shadow: 0 0 14px rgba(var(--accent-rgb), 0.4), 0 1px 2px rgba(0, 0, 0, 0.6);
  }
}

.panel-fade-enter-active {
  transition: all 0.4s ease 0.1s;
}
.panel-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 600px) {
  .chain-wrapper {
    gap: 6px;
  }
  .nav-btn {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
  .icon {
    height: 70px;
    width: 120px;
    background-size: 110px;
  }
  .sidebar-panel {
    width: 52vw;
    padding: 16px 14px;
    p { font-size: 11px; }
  }
}
</style>