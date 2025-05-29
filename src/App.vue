<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Banner from './components/Banner.vue'
import Card from './components/Card.vue'
const dadomokado = [ { titulo: 'dadomokado', descricao: 'descricao top', valor: 19, },
  { titulo: 'titulo menos top', descricao: 'descricao menos top', valor: 129, },
  { titulo: 'titulo 4', descricao: 'descricao mais top', valor: 129, }, 
{ titulo: 'titulo 12  ', descricao: 'descricao menos ou mais top', valor: 912, },
{ titulo: 'titulo 5', descricao: 'descricao mais amsod top', valor: 1229, }]
const conteudo = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 colunas de largura igual
  gap: '1rem', // espaço entre os cards
  justifyItems: 'center', // centraliza os itens dentro das células
}
</script>

<template>
  <Banner />
  <div :style="conteudo">
    <Card
      v-for="cards in dadomokado"
      :titulo="cards.titulo"
      :descricao="cards.descricao"
      :valor="cards.valor"
    />
  </div>
</template>
