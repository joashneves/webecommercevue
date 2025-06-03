<script setup>
import Card from '@/components/Card.vue';
import { obterProdutos } from '@/http';
import { ref } from 'vue'


// Ref reativo
const produtos = ref(obterProdutos())

const conteudo = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 colunas de largura igual
  gap: '1rem', // espaço entre os cards
  justifyItems: 'center', // centraliza os itens dentro das células
}

</script>

<template>
  <div :style="conteudo">
    <Card
      v-for="cards in produtos"
      :key="cards.titulo"
      :titulo="cards.titulo"
      :descricao="cards.descricao"
      :valor="cards.valor"
    />
  </div>
</template>
