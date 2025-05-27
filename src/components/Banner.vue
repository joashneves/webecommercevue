<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
</template>
