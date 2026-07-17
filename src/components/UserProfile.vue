<script setup>
const props = defineProps({
    username: {
        type: String,
    },
    age: {
        type: Number,
    },
});
</script>
<template>UserProfile {{ username }} - {{ age }}</template>
