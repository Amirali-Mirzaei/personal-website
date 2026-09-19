<template>

  <div class="card">

        <div id="js"
             :class="{ active: activeCard === 'j' }"
             @click="toggleCard('j')">
        </div>

        <Transition name="slide-left">
          <div
             v-if="activeCard === 'j' || isMobile"
             class="sidebarj">
            <p>I love turning complex problems into simple, 
            elegant JavaScript solutions</p>
          </div>
        </Transition>

        <div id="vue"
             :class="{ active: activeCard === 'v' }"
             @click="toggleCard('v')">
        </div>

        <Transition name="slide-right">
           <div 
              v-if="activeCard === 'v' || isMobile"
              class="sidebarv">
             <p>Crafting reactive, component-driven interfaces with Vue.
              js that feel alive and intuitive</p>
         </div> 
        </Transition>
        </div><br>

    <div class="card">

     <div id="css"
          :class="{ active: activeCard === 'c' }"
          @click="toggleCard('c')">
     </div>

     <Transition name="slide-left">
       <div
           v-if="activeCard === 'c' || isMobile"
           class="sidebarc">
         <p>Turning code into visually stunning and intuitive user experiences with CSS</p>
       </div>
     </Transition>

     <div id="nuxt"
          :class="{ active: activeCard === 't' }"
          @click="toggleCard('t')">
      </div>

      <Transition name="slide-top">
        <div  
           v-if="activeCard === 't' || isMobile"
           class="sidebart">
         <p>Building high performance Vue apps with Nuxt.
          js for seamless user experiences</p>
         </div>
      </Transition>

     <div id="html"
          :class="{ active: activeCard === 'h' }"
          @click="toggleCard('h')">
      </div>

      <Transition name="slide-right">
       <div 
           v-if="activeCard === 'h' || isMobile"
           class="sidebarh">
         <p>Structuring the web with semantic, clean, 
         and accessible HTML for solid foundations</p>
       </div>
      </Transition>
  </div> 
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeCard = ref(null)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const toggleCard = (type) => {
  if (isMobile.value) return

  activeCard.value = activeCard.value === type ? null : type
}
</script>

<style lang="scss" scoped>

.card {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(14px, 1fr));
gap: 2px;
justify-items: center;
align-items: center;
text-align: center;
padding: 5px;
}

.sidebarj {
position: fixed;
margin: 0 75% 0 0;
width: 200px;
height: 15vh;
border-radius: 10px;
color: black;
background: linear-gradient(to left, #ffd84d, #ffb300);
padding: 20px;
z-index: 1;
}

.sidebarv {
position: fixed;
margin: 0 0 0 75%;
width: 200px;
height: 15vh;
border-radius: 10px;
background-color: $primary-dark;
color: $bg-dark;
padding: 20px;
z-index: 1;
}

.sidebarc {
position: fixed;
margin: 0 75% 30% 0;
width: 200px;
height: 15vh;
border-radius: 10px;
color: white;
background-color: #2371d8;
padding: 20px;
z-index: 1;
}

.sidebarh {
position: fixed;
margin: 0 0 30% 75%;
width: 200px;
height: 15vh;
border-radius: 10px;
background-color: rgb(212, 13, 13);
color: white;
padding: 20px;
z-index: 1;
}

.sidebart {
position: fixed;
margin: 0 0 30% 0;
width: 200px;
height: 15vh;
border-radius: 10px;
color: $primary-dark;
background-color: white;
padding: 20px;
z-index: 1;
}

div#js {
background: url('~/assets/images/Js.png');
background-size: 140px;
background-position: 5px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;
margin: 0 0 0 25%;
position: relative;
display: inline-block;
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
 }
}

div#vue {
background: url('~/assets/images/Vue.png');
background-size: 180px;
background-position: -10px 97px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;  
margin: 0 25% 0 0;
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
  }
}

div#css {
background: url('~/assets/images/css.webp');
background-size: 180px;
background-position: -10px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;  
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
  }
}

div#nuxt {
background: url('~/assets/images/nuxt.jpg');
background-size: 180px;
background-position: -10px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;  
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
  }
}

div#html {
background: url('~/assets/images/html.webp');
background-size: 180px;
background-position: -10px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;  
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
  }
}

p {
font-size: 14px;
font-weight: 600;
margin: 0;
}

.sidebarj,
 .sidebarv,
  .sidebarc,
   .sidebarh,
    .sidebart {
      width: clamp(150px, 20vw, 200px); 
      height: auto; 
    }
       .sidebarj p,
      .sidebarv p,
     .sidebarc p,
    .sidebarh p,
   .sidebart p {
     font-size: clamp(12px, 1.5vw, 14px); 
     margin: 0;
     line-height: 1.4;
   }
 

@media (max-width: 600px) {
  .card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  #js, #vue, #nuxt, #css, #html {
    margin: 0 !important;
    opacity: 1 !important;
    border-color: transparent !important;
  }
}
  @media (max-width: 600px) {
  .sidebarj,
  .sidebarv,
  .sidebarc,
  .sidebarh,
  .sidebart {
    display: block;      
    width: 80%;           
    max-width: 300px;     
    position: relative;   
    transform: none;   
    opacity: 1;           
    margin: 8px auto 0;  
    font-size: 14px;
  }
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-130%);
  opacity: 0;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(130%);
  opacity: 0;
}

.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-250%);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-top-enter-active,
.slide-top-leave-active {
  transition: 0.4s ease;
}
</style>