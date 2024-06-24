<template>
    <div class=" max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(category, index) in categories" :key="index" class="p-4 bg-white">
          <h2 class=" HEADER text-left">{{ category.title }}</h2>
          <div  class="border-b border-2 border-gray-200 w-[30px] mb-2 my-2 -mt-2  "></div>
          <div class="flex flex-col space-y-4">
            <GridItem v-for="(item, itemIndex) in category.items" :key="itemIndex" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GridItem from './NewsItem.vue';
  
  const categories = ref([
    {
      title: 'TECH',
      items: [
        { title: 'A true story, that never been told!', time: '6m ago', category: 'Technology', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/1.jpg' },
        { title: 'Beautiful nature, and rare feathers!', time: '24h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/2.jpg' },
        { title: 'The most happiest time of the day!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/3.jpg' },
        { title: 'Consectetur ipsum dolor sit amet', time: '8h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/4.jpg' }
      ]
    },
    {
      title: 'SPORT',
      items: [
        { title: 'A true story, that never been told!', time: '6m ago', category: 'Technology', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/5.jpg' },
        { title: 'Beautiful nature, and rare feathers!', time: '24h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/6.jpg' },
        { title: 'The most happiest time of the day!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/7.jpg' },
        { title: 'New costs and rise of the economy!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/1.jpg' }
      ]
    },
    {
      title: 'FASHION',
      items: [
        { title: 'A true story, that never been told!', time: '6m ago', category: 'Technology', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/3.jpg' },
        { title: 'Beautiful nature, and rare feathers!', time: '24h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/2.jpg' },
        { title: 'The most happiest time of the day!', time: '11h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/3.jpg' },
        { title: 'Consectetur ipsum dolor sit amet', time: '8h ago', category: 'Lifestyle', image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/thumbnail/4.jpg' }
      ]
    }
  ]);
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  