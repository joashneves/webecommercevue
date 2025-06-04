<script setup>
import { obterProdutos } from '@/http'
import Panel from 'primevue/panel'
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
    itemImageSrc:
      'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    thumbnailImageSrc:
      'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    alt: 'Imagem 2',
  },
  {
    itemImageSrc:
      'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
    thumbnailImageSrc:
      'https://64.media.tumblr.com/1bddeb627932f08d8aebac86d1ac498c/99396b7f87b9d926-c2/s500x750/a751abb4193fbe0debe74426ed2da68a782a5bdd.jpg',
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
  <Panel :header=produto.titulo>
    <div class="m-0">
    <div class="conteiner">
      <div class="foto">
        <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 100%"
        >
        <template #item="{ item }">
          <img :src="item.itemImageSrc" :alt="item.alt" style="width: 640px; height: 360px" />
        </template>
        <template #thumbnail="{ item }">
          <img
          :src="item.thumbnailImageSrc"
          :alt="item.alt"
          style="width: 240px; height: 120px"
          />
        </template>
      </Galleria>
    </div>
    <div class="conteudo">
      <h6>Quantidade: {{ produto.descricao }}</h6>
      <h3>
        {{
          produto.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }}
          </h3>
        </div>
      </div>
    </div>
  </Panel>
</template>

<style scoped>
.conteiner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'foto  conteudo'
    'foto  conteudo'
    '. .';
}

.foto {
  grid-area: foto;
  align-self: center;
  align-content: center;
}

.conteudo {
  padding: 12px;
  grid-area: conteudo;
}
</style>
