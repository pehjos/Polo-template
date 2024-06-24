<template>
    <div :class="{'bg-white shadow-lg  ': !atTop || isShadowVisible}" class="fixed top-0 left-0 w-full z-50 transition-shadow">
      <!-- Top bar, hidden on scroll -->
      <div v-if="atTop " class="mobile  border-b">
        <div class="max-w-7xl mx-auto px-4  flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <a href="#" class="text-sm font-medium hover:text-gray-800 flex">English <ExpandIcon/></a>
            <div class="border-r-2 h-[40px]"></div>
            <a href="#" class="text-sm font-medium hover:text-gray-800">Login</a>
            <div class="border-r-2 h-[40px]"></div>
            <span class="text-sm">Melbourne 15°</span>
          </div>
          <div  class="hidden md:flex items-center space-x-2">
       <SocialMedia />
          </div>
        </div>
      </div>
      <!-- Main Navigation Bar -->
      <div class="max-w-7xl mx-auto px-4 top-0 ">
        <div class="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only LOGO">POLO</span>
              <div class="flex items-center desktop ">
              <LanguageIcon class="mr-4"/>
              <SearchIcon class="mr-24"/>
              <h3 class="LOGO">POLO</h3>
            </div>
            </a>
          </div>
          <nav class="hidden md:flex space-x-10">
            <div
              v-for="item in menuItems"
              :key="item.name"
              @mouseover="showDropdown = item.name"
              @mouseleave="showDropdown = null"
              class="relative"
            >
              <a href="#" class=" flex items-center">
                <span class="H400 hover:text-blue-500">{{ item.name }}</span>
                <SearchIcon v-if="item.icon === 'search'" class="w-6 h-6 text-gray-500 ml-2" />
                <LanguageIcon v-if="item.icon === 'lan'" class="w-6 h-6 text-gray-500 ml-2" />
              </a>
              <transition name="fade">
  <div v-if="showDropdown === item.name && item.subItems.length"
       :class="{' mt-3 w-auto min-w-max transform sm:px-0': true, 
                '-translate-x-1/2 left-1/2 absolute': item.subItems.length <= 10, 
                'right-32 fixed': item.subItems?.length > 10}">
    <div v-if="item.subItems && item.subItems?.length" class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div :style="{ gridTemplateColumns: `repeat(${calculateColumns(item.subItems?.length)}, minmax(0, 1fr))` }" class="relative grid bg-white sm:gap-8 sm:p-8">
        <a v-for="(subItem,index) in item.subItems" :key="index" href="#" class="-m-3 flex items-center rounded-lg ">
          <p class="H300 h-[10px] hover:text-blue-500">{{ subItem?.name }}</p>
          <p v-if="subItem.isNew" class="text-white NEW mt-4 -ml-4 text-small">NEW</p>
        </a>
      </div>
    </div>
  </div>
</transition>


            </div>
          </nav>
          <div class="-mr-2 -my-2 md:hidden ">
           
            <div @click="toggleMenu"  class="bg-white   items-center justify-center text-gray-400 hover:text-gray-500  ">
             <MenuIcon v-if="!isOpen"/>
             <CloseIcon v-else/>
            </div>
          </div>
        </div>
      </div>
       <!-- Mobile Menu -->
  <transition name="slide-up">
    <div v-if="isOpen" class="absolute inset-x-0 top-[65px] z-40 h-[100vh] bg-white overflow-hidden md:hidden"> <!-- Adjust top based on navbar height -->
      <div class="pt-4 pb-6 px-5">
        <div class="flex items-center justify-between mb-4">
          <!-- <h3 class="text-lg font-semibold">POLO</h3>
          <button @click="closeMenu" class="text-gray-700 focus:outline-none">
            ✕
          </button> -->
        </div>
        <ul class="space-y-4">
          <li v-for="item in menuItems" :key="item.name">
            <button @click="toggleSubMenu(item.name)" class="flex justify-between items-center w-full text-left text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
              {{ item.name }}
              <span v-if="item.subItems.length" class="ml-2 transform transition-transform" :class="{'rotate-180': expandedMenus.includes(item.name)}"><ExpandIcon/></span>
            </button>
            <transition name="slide-up">
              <ul v-if="expandedMenus.includes(item.name)" class="mt-2 space-y-2 pl-4">
                <li v-for="(subItem,index) in item.subItems" :key="index">
                  <a href="#" class="block text-gray-600 text-left hover:text-gray-800">{{ subItem.name }}</a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import LanguageIcon from '../../icons/LanguageIcon.vue';
  import ExpandIcon from '../../icons/ExpandIcon.vue';
  import  MenuIcon from '../../icons/MenuIcon.vue';
  import CloseIcon from '../../icons/CloseIcon.vue';
    import SearchIcon from '../../icons/SearchIcon.vue';
import SocialMedia from './SocialMedia.vue';
  const isOpen = ref(false);
  const atTop = ref(true);
  const showDropdown = ref(null);
  const expandedMenus = ref([]);
  const isShadowVisible = ref(false);
  
  const menuItems = ref([
  {
      name: 'HOME',
      subItems: [
      ]
    },
    {
      name: 'FEATURES',
      subItems: [
      { name: 'Widgets' },
  { name: 'Page Loaders', isNew: true },
  { name: 'Modal Auto Open', isNew: true },
  { name: 'Cookie Notify', isNew: true },
  { name: 'Shape Dividers', isNew: true },
  { name: 'Menu Labels' }
      ]
    },
    {
      name: 'LAYOUTS',
      subItems: [
      { name: 'Topbar' },
  { name: 'Header' },
  { name: 'Main Menu', isNew: true },
  { name: 'Page Title' },
  { name: 'Page Menu', isNew: true },
  { name: 'Sidebars' },
  { name: 'Footers' },
  { name: 'Options' }
      ]
    },
    {
      name: 'ELEMENTS',
      subItems: [
      { name: 'Accordions' },
  { name: 'Alerts' },
  { name: 'Animations' },
  { name: 'Avatar' },
  { name: 'Audio & Video' },
  { name: 'Blockquotes' },
  { name: 'BS Switch', isNew: true },
  { name: 'BS Notify', isNew: true },
  { name: 'Breadcrumbs' },
  { name: 'Buttons' },
  { name: 'Background Image' },
  { name: 'Background Overlays' },
  { name: 'Charts', isNew: true },
  { name: 'Calendar', isNew: true },
  { name: 'Clients logos' },
  { name: 'Call to action' },
  { name: 'Carousel' },
  { name: 'Code' },
  { name: 'Countdown Timers' },
  { name: 'Countdown', isNew: true },
  { name: 'Counter Numbers' },
  { name: 'Clipboard', isNew: true },
  { name: 'Data Tables', isNew: true },
  { name: 'Date & Time Pickers' },
  { name: 'Dropcat & Highlight' },
  { name: 'Dropdowns' },
  { name: 'Team members' },
  { name: 'Form Controls' },
  { name: 'Form Validation' },
  { name: 'Form Layouts' },
  { name: 'File upload' },
  { name: 'Grid System' },
  { name: 'Heading Styles' },
  { name: 'Icon Boxes' },
  { name: 'Icons' },
  { name: 'Images' },
  { name: 'Lightbox' },
  { name: 'Lists' },
  { name: 'Labels & Badges' },
  { name: 'Maps' },
  { name: 'Modal' },
  { name: 'Modal Strip' },
  { name: 'Navbar & Navs' },
  { name: 'Pagination & Pager' },
  { name: 'Panels' },
  { name: 'Pie charts' },
  { name: 'Popover' },
  { name: 'Milestone & Stats' },
  { name: 'Pricing tables' },
  { name: 'Progress bars' },
  { name: 'Parallax' },
  { name: 'Particles', isNew: true },
  { name: 'Responsive utilities' },
  { name: 'Range Slider', isNew: true },
  { name: 'Sections' },
  { name: 'Smooth Scrolling' },
  { name: 'Social Icons' },
  { name: 'Spinners', isNew: true },
  { name: 'Switch Toggle', isNew: true },
  { name: 'Shape Dividers', isNew: true },
  { name: 'Ratings', isNew: true },
  { name: 'Tables' },
  { name: 'Text Boxes' },
  { name: 'Tabs' },
  { name: 'Testimonials' },
  { name: 'Toggles' },
  { name: 'Tooltips' },
  { name: 'Typography' },
  { name: 'Text Rotator' },
  { name: 'Timeline', isNew: true },
  { name: 'Video Background' },
  { name: 'Wizard', isNew: true }
      ]
    },
    {
      name: 'PAGES',
      subItems: [
      { name: 'About us' },
  { name: 'About me' },
  { name: 'Contact us' },
  { name: 'Gallery' },
  { name: 'User pages' },
  { name: 'Services' },
  { name: 'Our team' },
  { name: 'Our clients' },
  { name: 'Maintenance' },
  { name: '404 Page' },
  { name: '404 Page - Parallax' },
  { name: '500 Page' },
  { name: 'Fullwidth page' },
  { name: 'Fullwidth page - Wide' },
  { name: 'Page with Sidebar' }
      ]
    },
    {
      name: 'PORTFOLIO',
      subItems: [
      { name: 'Two Columns' },
      { name: 'Three Columns' },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Sidebar version' },
      { name: 'Wide version' },
      { name: 'Two Columns' },
      { name: 'Three Columns', isNew: true },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Sidebar version' },
      { name: 'Wide version' },
      { name: 'Filter Styles' },
      { name: 'Load more' },
      { name: 'Load more - Sidebar' },
      { name: 'Infinity Scroll' },
      { name: 'Portfolio Ajax' },
      { name: 'Gallery Modal' },
      { name: 'Video Modal' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Slider Default' },
      { name: 'No Page Title' },
      { name: 'No Page Title - Sidebar' },
      { name: 'Hover Styles' },
      { name: 'Grid Gallery' },
      { name: 'Particles Wide Project' },
      { name: 'Floating Sidebar' },
      { name: 'Slider version' },
      { name: 'Fullscreen image' },
      { name: 'Fullscreen Video' }
      ]
    },
    {
      name: 'BLOG',
      subItems: [
      { name: 'Two Columns' },
      { name: 'Three ColumnsHOT' },
      { name: 'Four Columns' },
      { name: 'Sidebar version' },
      { name: 'No page title' },
      { name: 'Wide version' },
      { name: 'Load More' },
      { name: 'Infinite Scroll' },
      { name: 'Filter Categories' },
      { name: 'One Column' },
      { name: 'Three Columns' },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Slider Default' },
      { name: 'No Page Title' },
      { name: 'Hover Styles' },
      { name: 'Grid Gallery' },
      { name: 'Particles Wide Project' },
      { name: 'Floating Sidebar' },
      { name: 'Slider version' },
      { name: 'Fullscreen image' },
      { name: 'Fullscreen Video' },
      { name: 'Three ColumnsHOT' },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Sidebar version' },
      { name: 'Wide version' },
      { name: 'Filter Styles' },
      { name: 'Load more' },
      { name: 'Load more - Sidebar' },
      { name: 'Infinity Scroll' },
      { name: 'Portfolio Ajax' },
      { name: 'Gallery Modal' },
      { name: 'Video Modal' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Slider Default' },
      { name: 'No Page Title' },
      { name: 'No Page Title - Sidebar' },
      { name: 'Hover Styles' },
      { name: 'Grid Gallery' },
      { name: 'Particles Wide Project' },
      { name: 'Floating Sidebar' },
      { name: 'Slider version' },
      { name: 'Fullscreen image' },
      { name: 'Fullscreen Video' },
      { name: 'Right Sidebar' },
      { name: 'Left Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'No Sidebar' },
      { name: 'No page title' },
      { name: 'Load More' },
      { name: 'Infinite Scroll' },
      { name: 'Author Info' },
      { name: 'Filter Categories' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Fullwidth' },
      { name: 'Shadow' },
      { name: 'Textual' },
      { name: 'Grey Background' },
      { name: 'Author Info' },
      { name: 'Default' },
      { name: 'Slider' },
      { name: 'Video' },
      { name: 'Audio' },
      { name: 'Creative' },
      { name: 'Default Comments' },
      { name: 'Disqus Comments' },
      { name: 'Facebook Comments', isNew: true }
      ]
    },
    {
      name: 'SHOP',
      subItems: [
      { name: 'Two Columns' ,isNew: true },
      { name: 'Three ColumnsHOT' },
      { name: 'Four Columns' },
      { name: 'Sidebar version' },
      { name: 'No page title' },
      { name: 'Wide version' },
      { name: 'Load More' },
      { name: 'Infinite Scroll' },
      { name: 'Filter Categories' },
      { name: 'One Column' },
      { name: 'Three Columns' },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Slider Default' },
      { name: 'No Page Title' },
      { name: 'Hover Styles' },
      { name: 'Grid Gallery' },
      { name: 'Particles Wide Project' },
      { name: 'Floating Sidebar' },
      { name: 'Slider version' },
      { name: 'Fullscreen image' },
      { name: 'Fullscreen Video' },
      { name: 'Three ColumnsHOT' },
      { name: 'Four Columns' },
      { name: 'Five Columns' },
      { name: 'Six Columns' },
      { name: 'Sidebar version' },
      { name: 'Wide version' },
      { name: 'Filter Styles' },
      { name: 'Load more' },
      { name: 'Load more - Sidebar' },
      { name: 'Infinity Scroll' },
      { name: 'Portfolio Ajax' },
      { name: 'Gallery Modal' },
      { name: 'Video Modal' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Slider Default' },
      { name: 'No Page Title' },
      { name: 'No Page Title - Sidebar' },
      { name: 'Hover Styles' },
      { name: 'Grid Gallery' },
      { name: 'Particles Wide Project' },
      { name: 'Floating Sidebar' },
      { name: 'Slider version' },
      { name: 'Fullscreen image' },
      { name: 'Fullscreen Video' },
      { name: 'Right Sidebar' },
      { name: 'Left Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'No Sidebar' },
      { name: 'No page title' },
      { name: 'Load More' },
      { name: 'Infinite Scroll' },
      { name: 'Author Info' },
      { name: 'Filter Categories' },
      { name: 'Left Sidebar' },
      { name: 'Right Sidebar' },
      { name: 'Both Sidebars' },
      { name: 'Fullwidth' },
      { name: 'Shadow' },
      { name: 'Textual' },
      { name: 'Grey Background' },
      { name: 'Author Info' },
      { name: 'Default' },
      { name: 'Slider' },
      { name: 'Video' },
      { name: 'Audio' },
      { name: 'Creative' },
      { name: 'Default Comments' },
      { name: 'Disqus Comments' },
      { name: 'Facebook Comments', isNew: true }
      ]
    },
    {
      name: '',
      icon: 'search',
      subItems: []
    },
    {
      name: '',
      icon: 'lan',
      subItems: [
      { name: 'English'},
      { name: 'French'},
      { name: 'Spanish'},
      ]
    }
  ]);
  
  function calculateColumns(itemCount) {
    return Math.ceil(itemCount / 12);
  }
  
  function handleScroll() {
    console
    atTop.value = window.scrollY < 50;
    console.log(atTop.value);
  }
  
  function toggleMenu() {
    if (isOpen.value) {
      closeMenu();
    } else {
      isOpen.value = true;
    }
  }
  
  function closeMenu() {
    isShadowVisible.value = true;
    isOpen.value = false;
    setTimeout(() => {
    
      isShadowVisible.value = false;
    }, 1000); // Match this duration with your CSS transition duration
  }
  
  function toggleSubMenu(name) {
    if (expandedMenus.value.includes(name)) {
      expandedMenus.value = expandedMenus.value.filter(item => item !== name);
    } else {
      expandedMenus.value.push(name);
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
/* .slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.9s ease;
} */
.slide-up-enter, .slide-up-leave-to /* .slide-up-leave-active in <2.1.8 */ {
  transform: translateY(-100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.9s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media (min-width: 767px) {
  .desktop {
    display: none;
  }
}
@media (max-width: 767px) {
  .mobile {
    display: none;
  }
}
</style>
  