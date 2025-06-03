<script setup>
import { obterProdutos } from '@/http'
import Galleria from 'primevue/galleria'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const produto = obterProdutos().find((p) => p.id === id)

// Exemplo de imagens (pode vir do `produto.imagens` futuramente)
const images = [
  {
    itemImageSrc: 'https://i.ytimg.com/vi/h6uRI_MJwdI/hq720.jpg',
    thumbnailImageSrc: 'https://i.ytimg.com/vi/h6uRI_MJwdI/hq720.jpg',
    alt: 'Imagem 1',
  },
  {
    itemImageSrc: 'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    thumbnailImageSrc: 'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    alt: 'Imagem 2',
  },
  {
    itemImageSrc: 'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    thumbnailImageSrc: 'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    alt: 'Imagem 3',
  },
]

const responsiveOptions = [
  {
    breakpoint: '991px',
    numVisible: 4,
  },
  {
    breakpoint: '767px',
    numVisible: 3,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
]
</script>

<template>
  <div class="product-wrapper">
    <div class="info">
      <h4>{{ produto.titulo }}</h4>
      <h6>Quantidade: {{ produto.descricao }}</h6>
      <h3>
        {{
          produto.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }}
      </h3>
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="{ item }">
          <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="{ item }">
          <img :src="item.thumbnailImageSrc" :alt="item.alt" />
        </template>
      </Galleria>
    </div>
  </div>
</template>

<style scoped>
.product-wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
  min-height: 200px;
  border-bottom: 1px solid var(--surface-300);
  padding-bottom: 20px;
  margin-top: 20px;
  overflow: hidden;
}

.img-wrapper {
  max-width: 20%;
  width: 20%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.info {
  width: 70%;

  display: flex;
  flex-direction: column;
}

h6 {
  opacity: 0.6;
}

h3 {
  margin-top: 30px;
}

@media (max-width: 1000px) {
  .img-wrapper {
    max-width: 70%;
    width: 70%;
  }
}
</style>
