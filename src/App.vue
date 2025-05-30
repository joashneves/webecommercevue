<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Banner from './components/Banner.vue'

</script>

<template>
  <Banner />
  <RouterLink>
    <RouterView />
  </RouterLink>
</template>
