<script setup>
import Card from 'primevue/card';
defineProps({
  titulo : String,
  descricao: String,
  valor: Number
})
</script>

<template>
  
<Card>
    <template #title>{{ titulo }}</template>
    <template #content>
        <p class="m-0">
            {{ descricao}}
        </p>
        <p> {{ valor }}</p>
    </template>
</Card>
  
</template>