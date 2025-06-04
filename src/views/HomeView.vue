<script setup>
import Card from '@/components/Card.vue';
import { obterProdutos } from '@/http';
import { ref } from 'vue';

// Ref reativo
const produtos = ref(obterProdutos());
</script>

<template>
  <div class="grid-container">
    <Card
      v-for="cards in produtos"
      :key="cards.id"
      :id="cards.id"
      :titulo="cards.titulo"
      :descricao="cards.descricao"
      :valor="cards.valor"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  justify-items: center;
}
</style>
