<template>

    <div class="card">

        <div id="chess"
             :class="{ active: activeCard === 'c' }"
             @click="toggleCard('c')">
        </div>

         <Transition name="slide-left">
            <div 
             v-if="activeCard === 'c' || isMobile"
             class="sidebarc">
             <p>I started playing chess when I was around seven. I couldn't win many medals, 
              but I still try to be a contender in it</p>
           </div>
         </Transition>
         
        <div id="tk"
             :class="{ active: activeCard === 't' }"
             @click="toggleCard('t')">
        </div>

            <Transition name="slide-right">
                 <div 
                  v-if="activeCard === 't' || isMobile"
                  class="sidebart">
                  <p>I started Taekwondo when I was just five years old. Now, many years later, 
                  I am proud to hold the rank of 3rd Dan Black Belt</p>
           </div>  
          </Transition>  
        </div><br>

      <div class="card">

        <div id="swim"
             :class="{ active: activeCard === 's' }"
             @click="toggleCard('s')">
        </div>  

            <Transition name="slide-top">
           <div 
              v-if="activeCard === 's' || isMobile"
              class="sidebars">
              <p>I started swimming when I was eight. Over the years, 
              I’ve learned  different swimming styles as much as I could</p>
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

.sidebarc {
position: fixed;
margin: 0 75% 0 0;
width: 200px;
height: 18vh;
border-radius: 10px;
color: black;
background-color: white;
padding: 20px;
z-index: 1;
}

.sidebart {
position: fixed;
margin: 0 0 0 75%;
width: 200px;
height: 18vh;
border-radius: 10px;
background-color: #fbffff;
color: red;
padding: 20px;
z-index: 1;
}

.sidebars {
position: fixed;
margin: 0 0 30% 0;
width: 200px;
height: 16vh;
border-radius: 10px;
color: rgba(13, 149, 167, 0.89);
background-color: whitesmoke;
padding: 20px;
z-index: 1;
}

div#chess {
background: url('~/assets/images/chess.jpg');
background-size: 180px;
background-position: 0px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;
margin: 0 0 0 25%;
cursor: pointer;
  &:hover,
  &.active {
  opacity: 1;
  border-color: transparent;  
 }
}

div#tk {
background: url('~/assets/images/Taekwondo.jpg');
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

div#swim {
background: url('~/assets/images/Swimming.jpg');
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
font-size: 13px;
font-weight: 600;
margin: 0;
}

 .sidebarc,
  .sidebart,
   .sidebars {
    width: clamp(150px, 20vw, 205px); 
    height: auto; 
    padding: 1em;
    border-radius: 10px;
  }
    .sidebarc p,
   .sidebart p,
  .sidebars p {
    font-size: clamp(12px, 1.5vw, 15px); 
    margin: 0;
    line-height: 1.4;
}

@media (max-width: 600px) {
  .card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  #chess, #tk, #swim {
    margin: 0 !important;
    opacity: 1 !important;
    border-color: transparent !important;
 }
}

 @media (max-width: 600px) {
  .sidebarc,
  .sidebart,
  .sidebars {
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