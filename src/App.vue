<script setup>

import Header from "./componennts/Header.vue";
import Content from "./componennts/Content.vue";
import Footer from "./componennts/Footer.vue";
</script>

<template>
  <div class="container-fluid">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<style>
* {
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 62.5%;
}

.dark {
  background-color: #111A20;
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
