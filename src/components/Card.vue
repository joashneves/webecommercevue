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
  router.push(`/inspecionar/${props.id}`)
}
</script>

<template>
  <Card class="card-custom">
    <template #header>
      <img
        class="card-image"
        alt="Imagem do produto"
        src="https://i.ytimg.com/vi/h6uRI_MJwdI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGUgRihDMA8=&rs=AOn4CLCWM2hmbF85D-PvnplmVVoWXO-hDw"
      />
    </template>

    <template #title>
      <h2 class="card-title">{{ titulo }}</h2>
    </template>

    <template #content>
      <p class="card-description">{{ descricao }}</p>
      <p class="card-price">R$ {{ valor.toFixed(2) }}</p>
    </template>

    <template #footer>
      <div class="card-footer">
        <Button
          label="Inspecionar"
          severity="secondary"
          outlined
          class="action-button"
          @click="inspecionarProduto"
        />
        <Button label="Comprar" class="action-button" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.card-custom {
  width: 100%;
  max-width: 25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.card-description {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.card-price {
  font-weight: bold;
  font-size: 1.1rem;

}

.card-footer {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-button {
  flex: 1;
}
</style>
