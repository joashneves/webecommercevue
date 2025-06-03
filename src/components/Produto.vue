<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

// Aqui você pode buscar os dados do produto via API ou localmente
</script>

<template>
  <h2>Inspecionando produto {{ id }}</h2>
  <!-- Mostrar detalhes aqui -->
</template>
