<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './shared-components/NavBar.vue'
import ImageBanner from './shared-components/ImageBanner.vue'
import HightlightComponent from './shared-components/HightlightComponent.vue';
import ImageHightlight from './shared-components/ImageHighlight.vue';
import CateGort from './shared-components/CateGory.vue';
import CategoryNews from './shared-components/CategoryNews.vue';
import ReadBuy from './shared-components/ReadyBuy.vue';
import Footer from './shared-components/FooterComponent.vue';
import AdvertistmentComponent from './shared-components/AdvertistmentComponent.vue';
import EnterTainmentNews from './shared-components/EnterTainmentNews.vue';
// defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <NavBar />
    <ImageBanner />
 
  <HightlightComponent />
  <ImageHightlight />
  <CateGort />
  <CategoryNews />
  <AdvertistmentComponent/>
  <EnterTainmentNews/>
  <AdvertistmentComponent/>
  <ReadBuy />
  <Footer />
</template>

<style scoped>

</style>
