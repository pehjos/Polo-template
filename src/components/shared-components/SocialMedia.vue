<template>
  <div class="hidden md:flex items-center space-x-2">
    <div class="icon-container facebook">
      <FacebookIcon />
    </div>
    <div class="icon-container twitter">
      <TwitterIcon />
    </div>
    <div class="icon-container googleplus">
      <GooglePlusIcon />
    </div>
    <div class="icon-container pinterest">
      <PinterestIcon />
    </div>
    <div class="icon-container vimeo">
      <VimeoIcon />
    </div>
    <div class="icon-container linkedin">
      <LinkedinIcon />
    </div>
    <div class="icon-container dribble">
      <DribbleIcon />
    </div>
    <div class="icon-container youtube">
      <YoutubeIcon />
    </div>
    <div class="icon-container rss">
      <RssIcon />
    </div>
  </div>
</template>

<script setup>
import FacebookIcon from '../../icons/FacebookIcon.vue';
import TwitterIcon from '../../icons/TwitterIcon.vue';
import GooglePlusIcon from '../../icons/GooglePlusIcon.vue';
import PinterestIcon from '../../icons/PinterestIcon.vue';
import VimeoIcon from '../../icons/VimeoIcon.vue';
import LinkedinIcon from '../../icons/LinkedinIcon.vue';
import DribbleIcon from '../../icons/DribbleIcon.vue';
import YoutubeIcon from '../../icons/YoutubeIcon.vue';
import RssIcon from '../../icons/RssIcon.vue';
</script>

<style scoped>
.icon-container {
 
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.3s, transform 0.3s ease;
  position: relative;
}


.icon-container:hover {
  background-color: inherit;
}

.icon-container:hover svg {
  fill: white;
  transform: translateY(-20%);
}

.facebook:hover {
  background-color: #3b5998;
}

.twitter:hover {
  background-color: #1da1f2;
}

.googleplus:hover {
  background-color: #db4437;
}

.pinterest:hover {
  background-color: #bd081c;
}

.vimeo:hover {
  background-color: #1ab7ea;
}

.linkedin:hover {
  background-color: #0077b5;
}

.dribble:hover {
  background-color: #ea4c89;
}

.youtube:hover {
  background-color: #ff0000;
}

.rss:hover {
  background-color: #ff6600;
}

.icon-container svg {
  transition: transform 0.3s ease;
}
</style>
