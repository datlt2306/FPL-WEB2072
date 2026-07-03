<script setup>
import { ref } from 'vue';

const profile = ref({
  name: "Dat", age: 20
});
const isActive = ref(true);
</script>
<template>
  <div :class="{ hidden: isActive }">
    {{ profile.name }}
  </div>
  <button @click="isActive = !isActive">Toggle</button>
</template>
<style scoped>
.hidden {
  display: none;
}
</style>
