<template>
  <div class="highlights-container bg-blue-600 text-white py-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-left">HIGHLIGHTS</h1>
      <Carousel @mouseenter="showArrow=true" @mouseleave="showArrow=false" :value="bannerItems" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" :showNavigators="showArrow" showIndicators>
        <template #item="slotProps">
          <div class="relative mx-auto px-2">
            <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full h-48 object-cover">
            <div class="overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col justify-end transition-opacity duration-300 opacity-50 hover:opacity-100 p-4">
              <h2 class="text-xl font-semibold mt-2">{{ slotProps.data.title }}</h2>
              <p class="text-sm mt-1">{{ slotProps.data.description }}</p>
            </div>
          </div>
        </template>
        <template v-if="showArrow" #previcon>
          <button class="carousel-button prev z-40 left-0 transition-opacity duration-300  hover:opacity-100 hover:bg-blue-600">
            <BackIcon />
          </button>
        </template>
        <template v-if="showArrow" #nexticon>
          <button class="carousel-button next z-40 right-0 transition-opacity duration-300  hover:opacity-100 hover:bg-blue-600">
            <FowardIcon />
          </button>
        </template>
      </Carousel>
      <div class="text-right mt-4">
        <a href="#" class="text-white">All stories in Highlights &rarr;</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from 'primevue/carousel';
import BackIcon from '../../icons/BackIcon.vue';
import FowardIcon from '../../icons/FowardIcon.vue';

let showArrow = ref(false);

const bannerItems = ref([
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/1.jpg',
    title: 'News',
    description: 'Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
    tagColor: 'bg-red-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/2.jpg',
    title: 'Lifestyle',
    description: 'Venatis eu, sodales vel dolor.',
    tagColor: 'bg-blue-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/3.jpg',
    title: 'Lifestyle',
    description: 'A true story, that never been told!',
    tagColor: 'bg-green-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/4.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/2.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  },

  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/3.jpg',
    title: 'Lifestyle',
    description: 'Venatis eu, sodales vel dolor.',
    tagColor: 'bg-blue-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/5.jpg',
    title: 'Lifestyle',
    description: 'A true story, that never been told!',
    tagColor: 'bg-green-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/4.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  },
  {
    image: 'https://inspirothemes.com/polo/homepages/magazine/images/news/carousel/7.jpg',
    title: 'World',
    description: 'Fusce id mi diam, non ornare orci.',
    tagColor: 'bg-purple-500'
  }
]);

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<style scoped>
.card {
  max-width: 100%;
  margin: auto;
  padding: 1rem;
}

.relative {
  position: relative;
}

.overlay {
  transition: opacity 0.3s ease-in-out;
}

.relative:hover .overlay {
  opacity: 1;
}

.carousel-button {
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.carousel-button:hover {
  background-color: blue;
  color: white;
}

.carousel .p-carousel-indicators .p-carousel-indicator {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
}

.carousel .p-carousel-indicators .p-carousel-indicator.p-highlight {
  background-color: white;
}
</style>
