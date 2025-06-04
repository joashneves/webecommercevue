<script setup>
import InputText from 'primevue/inputtext';
import { Form } from '@primevue/forms';
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { Button } from 'primevue';

const toast = useToast();
const initialValues = ref({
    username: '',
    password: ''
});

const resolver = ref(zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required.' }),
        password: z.string().min(1, { message: 'Passowrd is required.' }).email({ message: 'Invalid Password address.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>
        

<template>
    <div class="card flex justify-center formulario">
      <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
          <h1 class="justify-center">Login</h1>
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="password" type="password" fluid />
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>
<style scoped>
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  /* fundo escuro elegante */
}

form {
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
