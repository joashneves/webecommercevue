<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Banner from './components/Banner.vue'
import Card from './components/Card.vue';
const dadomokado = [ {
  titulo: "dadomokado",
  descricao: "descricao top",
  valor: 19
} ,
{
  titulo: "titulo menos top",
  descricao: "descricao menos top",
  valor: 129
} ,
{
  titulo: "titulo 4",
  descricao: "descricao mais top",
  valor: 129
} ]
</script>

<template>
  <Banner />
  <Card titulo="titulo 1" descricao="Descrição" valor="99"/>
  
  <Card 
  v-for="cards in dadomokado"
  :titulo="cards.titulo" :descricao="cards.descricao" :valor="cards.valor"/>
</template>

<style scoped>

</style>
