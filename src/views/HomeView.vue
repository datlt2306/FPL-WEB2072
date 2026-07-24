<script setup>
import { reactive } from "vue";
import Banner from "../components/Banner.vue";
import FeatureProduct from "../components/FeatureProduct.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const products = reactive([
    {
        name: "Tai Nghe Vanguard Studio",
        description: "Tai nghe chất lượng cao cho trải nghiệm âm thanh sống động.",
        price: 1500000,
        status: "Còn hàng",
    },
    {
        name: "Balo Vanguard Urban",
        description: "Balo thiết kế tối giản, phù hợp cho đi học và đi làm.",
        price: 900000,
        status: "Còn hàng",
    },
    {
        name: "Đồng Hồ Vanguard Chrono",
        description: "Đồng hồ thời trang sang trọng, chống nước, mặt kính sapphire.",
        price: 2200000,
        status: "Hết hàng",
    },
    {
        name: "Sạc Dự Phòng Vanguard PowerGo",
        description: "Sạc dự phòng siêu mỏng, dung lượng 10,000mAh.",
        price: 450000,
        status: "Còn hàng",
    },
]);
</script>
<template>
    <div class="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <Header />
        <!-- =========================================================================
       MAIN CONTENT - HỌC VIÊN SẼ THAY THẾ BẰNG <router-view>
       ========================================================================= -->
        <main class="flex-grow space-y-16 pb-16">
            <!-- Hero Banner Section -->
            <Banner />
            <!-- Featured Products Section -->
            <FeatureProduct :data="products" />
        </main>
        <Footer />
    </div>
</template>
<style scoped></style>

<!-- 
Bước 1: Định nghĩa routes => router/index.js
Bước 2: khai báo routers trong main.js
Bước 3: Sử dụng <router-view /> ở trong component App
-->
