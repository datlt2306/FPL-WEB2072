<script setup>
import { ref } from 'vue'

const email = ref('datlt2306@gmail.com')
const isAgreed = ref(true)
const themeColor = ref('blue')
const activeClass = ref('bold-text')
function handleSubmit() {
  console.log('123')
  // alert(`Đăng ký thành công email: ${email.value}`);
}
</script>

<template>
  <div class="form-container">
    {{ email }}
    <h2>Đăng Ký Nhận Bản Tin</h2>
    <!-- Bind class và style động -->
    <p :style="{ color: themeColor }" :class="activeClass">
      Điền thông tin của bạn bên dưới:
    </p>
    <!-- <p style="color: blue" class="bold-text">
      Điền thông tin của bạn bên dưới:
    </p> -->

    <!-- Two-way Binding với v-model -->
    <div class="field">
      <label>Email: </label>
      <input type="email" v-model="email" placeholder="example@gmail.com" />
    </div>

    <div class="field">
      <label>
        <input type="checkbox" v-model="isAgreed" /> Tôi đồng ý với điều khoản
      </label>
    </div>

    <!-- Event Handling với v-on và modifier prevent -->
    <form @submit.prevent="handleSubmit">
      <button type="submit">Gửi Đăng Ký</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.field {
  margin-bottom: 15px;
}

.bold-text {
  font-weight: bold;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
