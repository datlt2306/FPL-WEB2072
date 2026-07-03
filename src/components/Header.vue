<script setup>
import { ref, reactive } from 'vue';
const title = ref('"Welcome to Vue"');
const person = reactive({
    name: "abc"
})

</script>
<template>
    <h2>Header {{ person.name }}</h2>
</template>