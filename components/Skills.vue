<template>
  <div class="chain-wrapper">
    <div class="chain-viewport">
      <div class="chain-track">
        <div
          v-for="item in loopItems"
          :key="item.id"
          class="chain-item"
          :style="{ '--accent-rgb': item.rgb }"
        >
          <div class="icon" :class="item.key"></div>
          <span class="label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const items = [
  { key: 'flutter', label: 'Flutter', rgb: '31,188,253' },
  { key: 'dart', label: 'Dart', rgb: '42,140,220' },
  { key: 'js', label: 'JavaScript', rgb: '255,204,51' },
  { key: 'vue', label: 'Vue.js', rgb: '66,211,146' },
  { key: 'css', label: 'CSS', rgb: '79,172,254' },
  { key: 'html', label: 'HTML', rgb: '255,61,61' },
  { key: 'nuxt', label: 'Nuxt.js', rgb: '255,255,255' },
]

const loopItems = computed(() =>
  [...items, ...items].map((item, i) => ({ ...item, id: `${item.key}-${i}` }))
)
</script>

<style lang="scss" scoped>
.chain-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0;
  background: transparent;
}

.chain-viewport {
  overflow: hidden;
  padding: 20px 0;
  mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
}

.chain-track {
  display: flex;
  width: max-content;
  gap: 40px;
  padding-right: 40px; 
  animation: chain-scroll 30s linear infinite;
  will-change: transform;
}

.chain-viewport:hover .chain-track {
  animation-play-state: paused;
}

@keyframes chain-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.chain-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    .label {
      letter-spacing: 3px;
      text-shadow: 0 0 16px rgba(var(--accent-rgb), 0.7);
    }

    .label::after {
      width: 100%;
    }
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
  transition: filter 0.3s ease;

  &.js { background-image: url('~/assets/images/Js.png'); }
  &.vue { background-image: url('~/assets/images/Vue.png'); }
  &.css { background-image: url('~/assets/images/css.webp'); }
  &.html { background-image: url('~/assets/images/html.webp'); }
  &.nuxt { background-image: url('~/assets/images/nuxt.jpg'); }
  &.dart { background-image: url('~/assets/images/dart.png'); }
  &.flutter { background-image: url('~/assets/images/flutter.png'); }
}

.label {
  position: relative;
  padding-bottom: 6px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  color: rgb(var(--accent-rgb));
  transition: letter-spacing 0.3s ease, text-shadow 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(to right, transparent, rgba(var(--accent-rgb), 0.9), transparent);
    transition: width 0.35s ease;
  }
}

@media (max-width: 600px) {
  .chain-track {
    gap: 24px;
    padding-right: 24px;
    animation-duration: 24s;
  }

  .icon {
    height: 70px;
    width: 120px;
    background-size: 110px;
  }

  .label {
    font-size: 11px;
    letter-spacing: 1.5px;
  }
}
</style>