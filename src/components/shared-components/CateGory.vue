<template>
    <div class=" max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(category, index) in categories" :key="index" class="p-4 bg-white ">
          <h2 class=" text-left HEADER">{{ category.title }}</h2>
          <div  class="border-b border-2 border-gray-200 w-[30px] mb-2 my-2 -mt-2  "></div>
          <img :src="category.image" alt="Category Image" class="w-full h-auto  mb-4">
          <div class="text-left TIME">
            <span class="mr-2">6m ago</span>
            <span class="mr-2">|</span>
            <span>Technology</span>
          </div>
          <h3 class="H350 text-left mb-2 hover:text-blue-500 ">{{ category.subtitle }}</h3>
          <p class="text-left mb-4">{{ category.description }}</p>
          <ul>
            <li v-for="(item, itemIndex) in category.items" :key="itemIndex" class="text-gray-600 hover:text-blue-500 mb-1 text-left">
              {{ item }}
              <div class="border-b border-gray-100 my-3"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref([
    {
      title: 'FOOD',
      image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/7.jpg',
      subtitle: 'Morbi ac neque at mi',
      description: 'The most happiest time of the day!. Morbi ac neque at mi elementum gravida.',
      items: [
        'A true story, that never been told!',
        'Beautiful nature, and rare feathers!',
        'Lorem ipsum dolor sit amet, consectetur adipiscing'
      ]
    },
    {
      title: 'TECHNOLOGY',
      image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/8.jpg',
      subtitle: 'Fringilla consectetur amet',
      description: 'The most happiest time of the day!. Morbi ac neque at mi elementum gravida.',
      items: [
        'A true story, that never been told!',
        'Beautiful nature, and rare feathers!',
        'Lorem ipsum dolor sit amet, consectetur adipiscing'
      ]
    },
    {
      title: 'AUTO',
      image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/9.jpg',
      subtitle: 'Dolor sit amet ipsum',
      description: 'The most happiest time of the day!. Morbi ac neque at mi elementum gravida.',
      items: [
        'A true story, that never been told!',
        'Beautiful nature, and rare feathers!',
        'Lorem ipsum dolor sit amet, consectetur adipiscing'
      ]
    }
  ]);
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  