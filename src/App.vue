<script setup>
import { ref, reactive } from 'vue';

const profile = reactive({
  name: "Dat", age: 20
});
const handleSubmit = () => console.log(profile.name)
</script>
<template>
  <div>
    {{ profile.name }} - {{ profile.age }}
  </div>
  <input type="text" v-model="profile.name">
  <input type="text" v-model="profile.age">
  <form @submit.prevent="handleSubmit">
    <button type="submit">submit</button>
  </form>
</template>
<!-- 
document.querySelector('#form').addEventListener('submit', (e) => {
e.preventDefault() // reload
}) -->
<style scoped>
.hidden {
  display: none;
}
</style>
