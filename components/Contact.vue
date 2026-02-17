<template>
     <div class="card">

      <br>
       <a href="tel:+989394999053">
        <h1><FontAwesomeIcon :icon="['fas', 'phone']" /> Phone: +989394999053</h1>
       </a>
     </div>
     <br><br>
     <div class="card">

       <h1></h1>
       <a href="mailto:mirzaeiamirali111@gmail.com">
        <h1><FontAwesomeIcon :icon="['fas', 'envelope']" /> Email: mirzaeiamirali111@gmail.com</h1>
       </a>
     </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style lang="scss" scoped>
.card {
  color: $bg-dark;
  padding: 10px;    
  background-color: $primary;
  height: auto;
  width: 100%;
  border-radius: 5px;
  transition: all .5s;
  font-size: 10px;
  border: 2px solid $light;
   &:hover {
    border-color: $primary;
    background-color: $primary-dark;
   }
}    

a {
text-decoration: none;  
display: inline-flex;
color: $bg-dark;
}

@media (max-width: 600px) {
  .card {
    font-size: 5px;
  }
}
</style>
