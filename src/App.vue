<script setup>

import { ref } from 'vue';

const isActive = ref(true);
const hasError = ref(true);

</script>
<template>
  <div class="box" :class="{ active: isActive, 'text-danger': hasError }">Text</div>
  <button>Ẩn/hiện</button>
  <button>Thay đổi màu sang đỏ</button>
</template>
<style>
.box {
  width: 200px;
  height: 200px;
}

.active {
  background-color: green;
}

.text-danger {
  color: red;
}
</style>
