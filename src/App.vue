<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import {onMounted} from "vue";
AOS.init({
  delay: 100,
  duration: 600,
  once: false,
  mirror: false
});

onMounted(() => {
  localStorage.setItem('language', 'Рус')
})
</script>

<template>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style>
* {
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 62.5%;
}

.dark {
  background-color: #17232B;
  --my-deep-gray: #293241;
  --my-dark: #182228;
  --my-text-color: white;
  --bg-color: #232C41;
  --my-orange: #FFA97A;
  --header-color: #17232B;
}

.light {
  background-color: #111A20;
  --my-deep-gray: #293241;
  --my-dark: #182228;
  --my-text-color: white;
  --bg-color: #232C41;
  --my-orange: #FFA97A;
  --header-color: #17232B;
}
</style>
