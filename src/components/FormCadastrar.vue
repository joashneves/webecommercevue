<template>
  <Form
    v-slot="$form"
    :initialValues
    :resolver
    @submit="onFormSubmit"
    class="grid lg:grid-cols-2 gap-4 w-full"
  >
    <div class="card">
      <Toast />
      <FileUpload
        name="demo[]"
        url="/api/upload"
        @upload="onAdvancedUpload($event)"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
      >
        <template #empty>
          <span>Drag and drop files to here to upload.</span>
        </template>
      </FileUpload>

      <div class="flex flex-col gap-1">
        <InputText
          name="Titulo"
          type="text"
          placeholder="Titulo do produto"
          class="inputCampo"
          fluid
        />
        <div class="flex-auto">
          <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
          <InputNumber v-model="value1" inputId="integeronly" fluid />
        </div>

        <Textarea placeholder="Details" class="textArea" />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
          $form.username.error?.message
        }}</Message>
      </div>
    </div>
    <div class="card flex justify-center">
      <InputGroup class="md:w-80">
        <InputGroupAddon>
          <i class="pi pi-shopping-cart"></i>
        </InputGroupAddon>
        <IftaLabel>
          <InputNumber
          v-model="value"
          inputId="price"
          mode="currency"
          currency="USD"
          locale="en-US"
          />
          <label for="price">Price</label>
        </IftaLabel>
      </InputGroup>
    </div>
        <   <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" filter placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
  </Form>
</template>

<style>
.textArea {
  width: 480px;
  height: 68px;
}
.inputCampo {
  width: 480px;
}
</style>

<script setup>
import FileUpload from 'primevue/fileupload'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { Form } from '@primevue/forms'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import InputNumber from 'primevue/inputnumber'
import { reactive } from 'vue'
import { IftaLabel, Textarea } from 'primevue'
import { ref } from 'vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import MultiSelect from 'primevue/multiselect';

const toast = useToast()

const value1 = ref(42723)
const value = ref(10)
const onAdvancedUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}

const resolver = ({ values }) => {
  const errors = {}

  if (!values.username) {
    errors.username = [{ message: 'Username is required.' }]
  }

  return {
    values, // (Optional) Used to pass current form values to submit event.
    errors,
  }
}

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    })
  }
}

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


</script>
