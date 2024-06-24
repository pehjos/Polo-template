<template>
  <div class="banner-showcase flex items-center max-w-7xl mx-auto px-4  w-full mt-24">
    <!-- Grid container: main large image on the left and four smaller images on the right -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-0 ">
      <!-- Large banner item on the left -->
      <div class="md:col-span-6 md:row-span-2">
        <div class="banner-item relative">
          <img :src="bannerItems[0].image" alt="Banner image" class="w-full h-full object-cover">
          <div class="overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex flex-col justify-end">
            <h3 class="text-left font-bold uppercase NEW ">{{ bannerItems[0].title }}</h3>
            <h3 class="text-left">{{ bannerItems[0].description }}</h3>
          </div>
        </div>
      </div>
      <!-- Four smaller banner items on the right -->
      <div class="md:col-span-6 grid grid-cols-2 md:grid-cols-2 gap-0 w-full">
        <div v-for="item in bannerItems.slice(1)" :key="item.title" class="banner-item relative">
          <img :src="item.image" alt="Banner sub-image" class="w-full object-cover h-48 md:h-full">
          <div class="overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-2 text-white flex flex-col justify-end">
            <h4 class="font-bold uppercase text-left NEW">{{ item.title }}</h4>
            <h3 class="text-sm text-left">{{ item.description }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bannerItems = ref([
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/grid/1.jpg',
    title: 'News',
    description: 'Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
    tagColor: 'bg-red-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/grid/2.jpg',
    title: 'Lifestyle',
    description: 'Venatis eu, sodales vel dolor.',
    tagColor: 'bg-blue-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/grid/3.jpg',
    title: 'Lifestyle',
    description: 'A true story, that never been told!',
    tagColor: 'bg-green-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/grid/4.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/grid/5.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  }
]);
</script>

<style scoped>
.banner-showcase {
  width: 100%;
}

.banner-showcase .banner-item img {
  height: auto; /* Responsive height */
}

.banner-item {
  position: relative;
  overflow: hidden;
}

.banner-item .overlay {
  transition: background 0.9s ease;
}

.banner-item:hover .overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 70%);
}

@media (max-width: 768px) {
  .banner-showcase {
    display: block;
  }

  .banner-showcase .banner-item img {
    height: auto;
  }
}
</style>
