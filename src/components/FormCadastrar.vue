
<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <span>Drag and drop files to here to upload.</span>
            </template>
          </FileUpload>
          <Button label="Submit" />
    </div>
</template>

<script setup>
import FileUpload from 'primevue/fileupload';
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
const toast = useToast();
import Button from 'primevue/button';

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>
