<template>
  <Swiper
    :modules="[Navigation, Pagination]"
    :slides-per-view="1"
    :loop="true"
    navigation
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="(slide, index) in slides"
      :key="index"
    >
      <img :src="slide.img" />

      <div class="text">
        {{ slide.caption }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import First from '~/assets/images/First.jpg'
import Second from '~/assets/images/Second.JPG'
import Third from '~/assets/images/Third.jpg'

const slides = [
  {
    img: First,
    caption: 'My version of SpiderMan'
  },
  {
    img: Second,
    caption: 'Fight time'
  },
  {
    img: Third,
    caption: 'Current me'
  }
]
</script>

<style lang="scss" scoped>
.mySwiper {
max-width: 340px;
margin: auto;
padding-bottom: 35px;
}

.swiper-slide {
position: relative;
}

.mySwiper img {
width: 100%;
display: block;
border-radius: 5px;
}

.text {
position: absolute;
bottom: 0;
left: 0;
width: 100%;
box-sizing: border-box;
padding: 35px 15px 18px;
color: #fff;
text-align: center;
font-size: 16px;
font-weight: 600;
letter-spacing: 0.3px;
background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75),
     rgba(0, 0, 0, 0.35),
      transparent
  );
  text-shadow:
     0 1px 3px rgba(0, 0, 0, 0.9),
      0 2px 6px rgba(0, 0, 0, 0.6);
  border-radius: 0 0 5px 5px;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
 color: white;
 width: 40px;
 height: 40px;
 border-radius: 12px;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 0.25s ease;
  &:hover {
    background-color: rgba($primary-hover, 0.85);
    transform: scale(1.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 10px;
  font-weight: bold;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: $light;
  opacity: 1;
  transition: 0.3s;
}

:deep(.swiper-pagination-bullet:hover) {
  background: $primary-dark;
}

:deep(.swiper-pagination-bullet-active) {
  background: $primary-hover;
}
</style>