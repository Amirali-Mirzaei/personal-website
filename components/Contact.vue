<template>
  <div class="card">

    <br>
    <a href="tel:+989394999053">
      <h1>
        <FontAwesomeIcon :icon="['fas', 'phone']" /> Phone: +989394999053
      </h1>
    </a>
  </div>
  <br><br>
  <div class="card">

    <h1></h1>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mirzaeiamirali111@gmail.com" target="_blank"
      rel="noopener noreferrer">
      <h1>
        <FontAwesomeIcon :icon="['fas', 'envelope']" />
        Email: mirzaeiamirali111@gmail.com
      </h1>
    </a>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  color: $bg-dark;
  padding: 10px;
  background: $primary-hover;
  height: auto;
  width: 100%;
  border-radius: 5px;
  transition: all .5s;
  font-size: 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: $text-light;
  }
}

a {
  text-decoration: none;
  display: inline-flex;
  color: $bg-dark;
  transition: color .35s;

  &:hover {
    color: $text-light;
  }
}

@media (max-width: 600px) {
  .card {
    font-size: 6px;
  }
}
</style>
