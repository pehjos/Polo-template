<template>
    <div class=" items-start ">
      <div class="flex space-x-4">
      <img :src="item.image" alt="Highlight Image" class="w-16 h-16 item-image object-cover">
      <div class="ml-4">
        <h3 class="hover:text-blue-500 text-left H500">{{ item.title }}</h3>
        <div class="flex items-left text-gray-600 text-sm">
          <span class="mr-2  TIME flex items-center"><ClockIcon class="mr-2 h-[12px] w-[12px] text-sm"/>{{ item.time }}</span>
          <span class="mr-2">|</span>
          <span class="flex items-center TIME"><TagIcon class="mr-2 h-[14px] w-[14px]"/>{{ item.category }}</span>
        </div>
        
      </div>
     
    </div>
    <div class="border-b border-gray-100 my-3"></div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import TagIcon from '../../icons/TagIcon.vue'
  import ClockIcon from '../../icons/ClockIcon.vue'
  
  const props = defineProps({
    item: Object
  });
  </script>
  
  <style scoped>
  .item-image{
    border-radius: 2px;
  }
  </style>
  