<template>

    <div class="card">

        <div id="chess"
            @mouseenter="openc= true"
            @mouseleave="openc= false">
        </div>
           <div class="sidebarc" :class="{ openc }">
             <p>I started playing chess when I was around seven. I couldn't win many medals, but I still try to be a contender in it</p>
           </div>

        <div id="tk"
            @mouseenter="opent= true"
            @mouseleave="opent= false">
        </div>
           <div class="sidebart" :class="{ opent }">
              <p>I started Taekwondo when I was just five years old. Now, many years later, I am proud to hold the rank of 3rd Dan Black Belt</p>
           </div>    
        </div><br>

      <div class="card">

        <div id="swim"
             @mouseenter="opens= true"
             @mouseleave="opens= false">
        </div>   
           <div class="sidebars" :class="{ opens }">
              <p>I started swimming when I was eight. Over the years, I’ve learned  different swimming styles as much as I could</p>
           </div> 
        </div>

</template>


<script setup>
import { ref } from 'vue';

 const openc = ref(false)
  const opent = ref(false) 
 const opens = ref(false)
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
transform: translateX(-130%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebarc.openc {
transform: translateX(0);
opacity: 1;
}

.sidebart {
position: fixed;
margin: 0 0 0 75%;
width: 200px;
height: 18vh;
border-radius: 10px;
background-color: black;
color: red;
padding: 20px;
transform: translateX(130%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebart.opent {
transform: translateX(0);
opacity: 1;  
}

.sidebars {
position: fixed;
margin: 0 0 30% 0;
width: 200px;
height: 16vh;
border-radius: 10px;
color: rgba(10, 190, 214, 0.89);
background-color: whitesmoke;
padding: 20px;
transform: translateY(-300%);
transition: .4s ease;
opacity: 0;
z-index: 1;
}

.sidebars.opens {
transform: translateY(0);
opacity: 1;
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover {
  opacity: 1;
  border-color: $primary-hover;  
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
  &:hover { 
  opacity: 1;
  border-color: $primary-hover;  
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
  width: clamp(150px, 20vw, 210px); 
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
  .sidebarc,
  .sidebart,
  .sidebars {
    width: 90%; 
    left: 50%;
    transform: translateX(-50%); 
    font-size: 14px;
  }
}
</style>