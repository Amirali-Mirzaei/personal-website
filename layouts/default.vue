<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <header class="header">
      <h1>Amirali</h1>
       <svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 120" preserveAspectRatio="none">
         <path d="M10 0 
                 C5 20 15 40 10 60 
                 C5 80 15 100 10 120" 
                stroke="white" stroke-width="3" fill="none"/>
        </svg>
      <a href="https://github.com/Amirali-Mirzaei" target="_blank">
       <FontAwesomeIcon :icon="['fab', 'github']" />
      </a>
        <a  href="https://www.linkedin.com/in/amirali-mirzaei/" target="_blank">
          <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        </a> 
      <a  href="//www.instagram.com/_amirali.mirzaei_/" target="_blank">
       <FontAwesomeIcon :icon="['fab', 'instagram']" />    
      </a>
    </header>

    <main>
      <slot />
    </main>
    
</template>

<style lang="scss" scoped>
  
.header {
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 1rem 2rem;
background: $primary;
background-size: 300% 100%;
gap: 5px;
  h1 { 
    font-size: 2.5rem;
    color: white;
    transition: all .3s;
    font-weight: 500; 
      &:hover {
      color: $bg-dark; 
     }
  }
}

.divider {
width: 20px;    
height: 70px;   
} 

a {
display: block;
color: white;
font-size: 30px;
transition: all .3s;
  &:hover {
    color: $bg-dark;  
    transform: translateY(-2px);
 }
}
</style>
