<template> 

  <div class="slideshow-container">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="mySlides fade"
      v-show="slideIndex === index + 1"
    >

      <img :src="slide.img" style="width:100%" />
      <div class="text">{{ slide.caption }}</div>
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>
  </div>
  <br>
  <div style="text-align:center">
    <span
      v-for="(slide, index) in slides"
      :key="'dot-' + index"
      class="dot"
      :class="{ active: slideIndex === index + 1 }"
      @click="currentSlide(index + 1)"
    ></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import First from '~/assets/images/First.jpg'
import Second from '~/assets/images/Second.JPG'
import Third from '~/assets/images/Third.jpg'

const slides = ref([
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
])

const slideIndex = ref(1)

function plusSlides(n) {
  slideIndex.value += n

  if (slideIndex.value > slides.value.length) {
    slideIndex.value = 1
  }

  if (slideIndex.value < 1) {
    slideIndex.value = slides.value.length
  }
}

function currentSlide(n) {
  slideIndex.value = n
}
</script>

<style lang="scss" scoped>
.mySlides {
  display: inline-flex;
}

img {
  vertical-align: middle;
  border-radius: 5px;
}

.slideshow-container {
  max-width: 340px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  border-radius: 5px;
  &:hover {
    background-color: $primary-hover;
  }
}
.next {
  right: 0;
}
.prev {
 left: 0;
}

.text {
  color: $text-light;
  font-size: 17px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: $light;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: $primary-hover;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
