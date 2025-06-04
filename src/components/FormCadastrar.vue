<template>
<div class="form-container ">
 <Form
  v-slot="$form"
  :initialValues
  :resolver
  @submit="onFormSubmit"
  class="flex flex-col gap-6 items-center w-full"
>

  <Toast />

  <FileUpload
    name="demo[]"
    url="/api/upload"
    @upload="onAdvancedUpload"
    :multiple="true"
    accept="image/*"
    :maxFileSize="1000000"
    class="w-full max-w-xl"
  >
    <template #empty>
      <span>Arraste e solte os arquivos aqui</span>
    </template>
  </FileUpload>

  <InputText
    name="titulo"
    type="text"
    placeholder="Título do produto"
    class="w-full max-w-xl"
  />

  <InputNumber
    v-model="quantidade"
    inputId="quantidade"
    placeholder="Quantidade"
    class="w-full max-w-xl"
  />

  <Textarea
    v-model="detalhes"
    placeholder="Detalhes"
    class="w-full max-w-xl"
    rows="4"
    autoResize
  />

  <MultiSelect
    v-model="selectedCities"
    display="chip"
    :options="cities"
    optionLabel="name"
    filter
    placeholder="Selecione as cidades"
    :maxSelectedLabels="3"
    class="w-full max-w-xl"
  />

  <MultiSelect
    v-model="selectedCategorias"
    display="chip"
    :options="categorias"
    optionLabel="name"
    filter
    placeholder="Selecione as categorias de tênis"
    
  />

  <InputGroup class="w-full max-w-xl">
    <InputGroupAddon>
      <i class="pi pi-shopping-cart"></i>
    </InputGroupAddon>
    <IftaLabel class="w-full">
      <InputNumber
        v-model="valor"
        inputId="price"
        mode="currency"
        currency="BRL"
        locale="pt-BR"
        class="w-full"
      />
      <label for="price">Preço</label>
    </IftaLabel>
  </InputGroup>

  <Button
    type="submit"
    severity="secondary"
    label="Enviar formulário"
    
  />
</Form>

  </div>
</template>

<script setup>
import FileUpload from 'primevue/fileupload'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { Form } from '@primevue/forms'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'
import { IftaLabel, Textarea } from 'primevue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import MultiSelect from 'primevue/multiselect'

const toast = useToast()

const quantidade = ref(1)
const valor = ref(0)
const detalhes = ref('')
const selectedCities = ref([])
const selectedCategorias = ref([])

const cities = [
  { name: 'São Paulo', code: 'SP' },
  { name: 'Rio de Janeiro', code: 'RJ' },
  { name: 'Belo Horizonte', code: 'BH' },
  { name: 'Curitiba', code: 'CTBA' },
]

const categorias = [
  { name: 'Corrida', code: 'RUN' },
  { name: 'Casual', code: 'CASUAL' },
  { name: 'Skate', code: 'SKT' },
  { name: 'Basquete', code: 'BB' },
]

const onAdvancedUpload = () => {
  toast.add({ severity: 'info', summary: 'Sucesso', detail: 'Arquivo enviado!', life: 3000 })
}

const resolver = ({ values }) => {
  const errors = {}
  if (!values.titulo) {
    errors.titulo = [{ message: 'Título é obrigatório.' }]
  }
  return { values, errors }
}

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Formulário enviado!',
      life: 3000,
    })
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #f0f4ff, #dbeafe);
  max-width: 900px;
  margin: 2rem auto;
}
</style>
