<template>
  <div class="chain-wrapper">
    <button class="nav-btn prev" type="button" aria-label="Previous" @click="goPrev">
      ‹
    </button>

    <Swiper class="chain-swiper" :modules="modules" :loop="true" :centered-slides="true" :slides-per-view="3"
      :space-between="20" :breakpoints="breakpoints" @swiper="onSwiperReady">
      <SwiperSlide v-for="item in slideItems" :key="item.slideId" v-slot="{ isActive }">
        <div class="chain-item" :class="{ 'is-active': isActive }" :style="{ '--accent-rgb': item.rgb }">
          <div class="icon" :class="item.key"></div>

          <Transition name="panel-fade">
            <div v-if="isActive" class="sidebar-panel">
              <p>{{ item.text }}</p>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
    </Swiper>

    <button class="nav-btn next" type="button" aria-label="Next" @click="goNext">
      ›
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// بدون Autoplay؛ ماژول‌ها خالی هستن
const modules = []

const items = [
  {
    key: 'chess',
    rgb: '226, 190, 90',
    text: "I started playing chess when I was around seven. I couldn't win many medals, but I still try to be a contender in it."
  },
  {
    key: 'tk',
    rgb: '128, 128, 128',
    text: 'I started Taekwondo when I was just five years old. Now, many years later, I am proud to hold the rank of 4th Dan Black Belt.'
  },
  {
    key: 'swim',
    rgb: '13, 149, 167',
    text: "I started swimming when I was eight. Over the years, I've learned different swimming styles as much as I could."
  }
]

const slideItems = [...items, ...items].map((item, index) => ({
  ...item,
  slideId: `${item.key}-${index}`
}))

const swiperInstance = ref(null)

const onSwiperReady = (swiper) => {
  swiperInstance.value = swiper
}

const goPrev = () => {
  swiperInstance.value?.slidePrev()
}

const goNext = () => {
  swiperInstance.value?.slideNext()
}

const breakpoints = {
  0: {
    slidesPerView: 1.6,
    spaceBetween: 14
  },
  480: {
    slidesPerView: 2.2,
    spaceBetween: 18
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 26
  }
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
  min-width: 0;
  padding: 30px 0;
  overflow: hidden;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  height: auto;
}

.nav-btn {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: $primary-hover;
  color: $text-light;
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all 0.35s;

  &:hover {
    transform: scale(1.08);
  }
}

.chain-item {
  width: 100%;
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
  background-size: 180px;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  transition:
    box-shadow 0.4s ease,
    border-color 0.4s ease;

  &.chess {
    background-image: url('~/assets/images/chess.jpg');
  }

  &.tk {
    background-image: url('~/assets/images/Taekwondo.jpg');
  }

  &.swim {
    background-image: url('~/assets/images/Swimming.jpg');
  }
}

.sidebar-panel {
  width: clamp(180px, 55vw, 280px);
  padding: 20px 18px;
  border-radius: 16px;
  text-align: center;
  color: #f2f2f5;
  background:
    radial-gradient(circle at 25% 15%,
      rgba(var(--accent-rgb), 0.14),
      transparent 55%),
    linear-gradient(160deg,
      rgba(14, 14, 18, 0.86),
      rgba(4, 4, 6, 0.94));

  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(var(--accent-rgb), 0.4);

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.35px;
    line-height: 1.5;
    text-shadow:
      0 0 14px rgba(var(--accent-rgb), 0.4),
      0 1px 2px rgba(0, 0, 0, 0.6);
  }
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.panel-fade-enter-from,
.panel-fade-leave-to {
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
    background-size: 150px;
  }

  .sidebar-panel {
    width: 52vw;
    padding: 16px 14px;

    p {
      font-size: 11px;
    }
  }
}
</style>