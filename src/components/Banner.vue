<script setup>
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button"
import InputText from 'primevue/inputtext';

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-moon" class="mr-2" severity="secondary" @click="toggleDarkMode()" />
        <Button icon="pi pi-home" label="Incio" class="mr-2" severity="secondary"  text/>
        <Button icon="pi pi-tags" label="Ofertas"  class="mr-2" severity="secondary" text />
        <Button icon="pi pi-question" label="Sobre"  class="mr-2" severity="secondary" text />
        <Button icon="pi  pi-users" label="Contato" severity="secondary" text />
    </template>

    <template #center>
        <IconField>
            <InputIcon>
                <i class="pi pi-search" />
            </InputIcon>
            <InputText placeholder="Search" />
        </IconField>
    </template>

    <template #end> 
      <Button icon="pi pi-shopping-bag" class="mr-2" severity="secondary" text />
        <Button icon="pi  pi-user"  severity="secondary" text />
    </template>
</Toolbar>
</template>
