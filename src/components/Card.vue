<script setup>
import { Button } from 'primevue'
import Card from 'primevue/card'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
  titulo: String,
  descricao: String,
  valor: Number,
})

const router = useRouter()

function inspecionarProduto() {
    console.log(props)
  router.push(`/inspecionar/${props.id}`)
}
</script>

<template>
  <Card role="region" style="width: 25rem; overflow: hidden">
    <template #header>
      <img
        alt="user header"
        src="https://i.ytimg.com/vi/h6uRI_MJwdI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGUgRihDMA8=&rs=AOn4CLCWM2hmbF85D-PvnplmVVoWXO-hDw"
      />
    </template>
    <template #title>{{ titulo }}</template>
    <template #content>
      <p class="m-0">
        {{ descricao }}
      </p>
      <p>{{ valor }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          label="Inspecionar"
          severity="secondary"
          outlined
          class="w-full"
          @click="inspecionarProduto"
        />
        <Button label="Comprar" class="w-full" />
      </div>
    </template>
  </Card>
</template>
