<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGtag } from 'vue-gtag-next';
import {onMounted} from "vue";
const { event } = useGtag();
const add = () => {
  event('visited your website', {
    'event_label' : 'some one is being in here!',
    'value': new Date()
  })
};
const visit = () => setTimeout(add, 5000);

AOS.init({
  delay: 100,
  duration: 600,
  once: false,
  mirror: false
});

onMounted(() => {
  visit();
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
  --bg-contentent: #111A20;
  --header-text: white;
  --linear-bg: linear-gradient(179.92deg, #FFA97A 0.07%, rgba(248, 242, 244, 0.5) 134.98%);
  --linear-text: -webkit-linear-gradient(135deg, #FF9F65, #DED37E, #26BDA6);
  --my-deep-gray: #293241;
  --gray: #767676;
  --light-gray: #959595;
  --card-bg: #182228;
  --blue-orange: #FFA97A;
  --gold-to-orange: #FFA97A;
  --white-gold: white;
  --my-text-color: white;
  --my-orange: #FFA97A;
  --header-color: #17232B;
}

.light {
  background-color: #7e45db;
  --bg-contentent: #f8f9fa;
  --header-text: white;
  --linear-bg: #7e45db;
  --linear-text: black;
  --my-deep-gray: white;
  --gray: #2f3334;
  --light-gray: white;
  --card-bg: #7e45db;
  --blue-orange: blue;
  --gold-to-orange: #FBFF55;
  --white-gold: #FBFF55;
  --my-text-color: #212529;
  --my-orange: #7e45db;
  --header-color: #7e45db;
}
</style>
