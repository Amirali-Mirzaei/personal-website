<template>

  <div class="card"> 

        <div id="js"
          @mouseenter="openj= true"
          @mouseleave="openj= false">
        </div> 
          <div class="sidebarj" :class="{ openj }">
           <p>I love turning complex problems into simple, elegant JavaScript solutions</p>
          </div>

        <div id="vue"
         @mouseenter="openv= true"
         @mouseleave="openv= false">
        </div>
           <div class="sidebarv" :class="{ openv }">
            <p>Crafting reactive, component-driven interfaces with Vue.js that feel alive and intuitive</p>
        </div> 
        </div><br>

    <div class="card">
     <div id="css"
      @mouseenter="openc= true"
      @mouseleave="openc= false"> 
     </div>
       <div class="sidebarc" :class="{ openc }">
        <p>Turning code into visually stunning and intuitive user experiences with CSS</p>
       </div>

     <div id="nuxt"
       @mouseenter="opent= true" 
       @mouseleave="opent= false">
      </div>
        <div class="sidebart" :class="{ opent }">
         <p>Building high performance Vue apps with Nuxt.js for seamless user experiences</p>
         </div>

     <div id="html"
       @mouseenter="openh= true"
       @mouseleave="openh= false">
      </div>
      <div class="sidebarh" :class="{ openh }">
        <p>Structuring the web with semantic, clean, and accessible HTML for solid foundations</p>
      </div>
  </div> 

</template>


<script setup>
import { ref } from 'vue';

   const openj = ref(false)
    const openv = ref(false)
   const openc = ref(false)
 const openh = ref(false)
   const opent = ref(false) 
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
transform: translateX(-250%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebarj.openj {
transform: translateX(0);
opacity: 1;
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
transform: translateX(250%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebarv.openv {
transform: translateX(0);
opacity: 1;  
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
transform: translateX(-250%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebarc.openc {
transform: translateX(0);
opacity: 1;
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
transform: translateX(250%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebarh.openh {
transform: translateX(0);
opacity: 1;  
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
transform: translateY(-250%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebart.opent {
transform: translateY(0);
opacity: 1;
}

div#js {
background: url('~/assets/images/js.png');
background-size: 140px;
background-position: 10px 90px;
height: 90px;
width: 160px;
border-radius: 15px;
border: solid 2px $transport;
opacity: 0.7;
transition: all .3s;
margin: 0 0 0 25%;
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
</style>
