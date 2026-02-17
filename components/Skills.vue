<template>

  <div class="card"> 

        <div id="js"
             @mouseenter="openj= true"
             @mouseleave="closeWithDelay('j')">
        </div> 

        <Transition name="slide-left">
          <div
             v-if="openj || isMobile"
             class="sidebarj">
            <p>I love turning complex problems into simple, 
            elegant JavaScript solutions</p>
          </div>
        </Transition>

        <div id="vue"
             @mouseenter="openv= true"
             @mouseleave="closeWithDelay('v')">
        </div>

        <Transition name="slide-right">
           <div 
              v-if="openv || isMobile"
              class="sidebarv">
             <p>Crafting reactive, component-driven interfaces with Vue.
              js that feel alive and intuitive</p>
         </div> 
        </Transition>
        </div><br>

    <div class="card">

     <div id="css"
          @mouseenter="openc= true"
          @mouseleave="closeWithDelay('c')"> 
     </div>

     <Transition name="slide-left">
       <div
           v-if="openc || isMobile"
           class="sidebarc">
         <p>Turning code into visually stunning and intuitive user experiences with CSS</p>
       </div>
     </Transition>

     <div id="nuxt"
          @mouseenter="opent= true" 
          @mouseleave="closeWithDelay('t')">
      </div>

      <Transition name="slide-top">
        <div  
           v-if="opent || isMobile"
           class="sidebart">
         <p>Building high performance Vue apps with Nuxt.
          js for seamless user experiences</p>
         </div>
      </Transition>

     <div id="html"
          @mouseenter="openh= true"
          @mouseleave="closeWithDelay('h')">
      </div>

      <Transition name="slide-right">
       <div 
           v-if="openh || isMobile"
           class="sidebarh">
         <p>Structuring the web with semantic, clean, 
         and accessible HTML for solid foundations</p>
       </div>
      </Transition>
  </div> 

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

   const openj = ref(false)
    const openv = ref(false)
   const openc = ref(false)
 const openh = ref(false)
   const opent = ref(false) 

   const isMobile = ref(false)
let timer = null

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

const closeWithDelay = (type) => {
  if (isMobile.value) return

  clearTimeout(timer)
  timer = setTimeout(() => {
    if (type === 'j') openj.value = false
     if (type === 'v') openv.value = false
      if (type === 'c') openc.value = false
       if (type === 'h') openh.value = false
        if (type === 't') opent.value = false
  }, 30)
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
background-color: #ffc200;
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
background-position: 10px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;
margin: 0 0 0 25%;
position: relative;
display: inline-block;
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
     font-size: clamp(12px, 1.5vw, 15px); 
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
    border-color: $primary !important;
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
