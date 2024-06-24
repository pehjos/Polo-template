<template>
  <div class="my-6 max-w-7xl mx-auto px-4 ">
  <h2 class=" text-left HEADER">HIGHTLIGHTS</h2>
  <div  class="border-b border-2 border-gray-200 w-[30px] mb-2 my-2 -mt-2  "></div>
  <div class="container flex flex-col md:flex-row mx-auto px-4">
    
<div class="single-item md:w-1/2">
 
  <img src="https://inspirothemes.com/polo/homepages/magazine/images/news/highlights/1-large.jpg" alt="Avatar" class="image">
  <h3 class="H350 text-left">A true story, that never been told!</h3>
  <p class="text-left">Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.</p>
<p class="text-left TIME mt-3">6m ago |  Technology</p>

</div>

<div class=" ml-4">
<div class="grid md:grid-cols-2 sm:grid-cols-1">
<GridItem v-for="item in highlightItems" :key="item.title" :item="item" />

</div>
<div class="flex">
<Advertisement />
<Advertisement class="ml-5" />
</div>
</div>

  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import GridItem from './NewsItem.vue';
import Advertisement from './AdvertistmentComponent.vue'; // Import the Advertisement component

const highlightItems = ref([
  { title: 'A true story, that never been told!', time: '6m ago', category: 'Technology', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/1.jpg' },
  { title: 'Beautiful nature, and rare feathers!', time: '24h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/2.jpg' },
  { title: 'The most happiest time of the day!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/3.jpg' },
  { title: 'Consectetur ipsum dolor sit amet', time: '8h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/4.jpg' },
  { title: 'New costs and rise of the economy!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/5.jpg' },
  { title: 'The most happiest time of the day!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/6.jpg' },
  { title: 'Consectetur ipsum dolor sit amet', time: '8h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/7.jpg' },
  { title: 'New costs and rise of the economy!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/8.jpg' }
]);
</script>

<style scoped>
/* .container {
  max-width: 1200px;
} */

h1:hover, h2:hover {
  color: #3b82f6; /* Blue color on hover */
}
</style>
