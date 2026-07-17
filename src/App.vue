<script setup>
import Banner from "./components/Banner.vue";
import FeatureProduct from "./components/FeatureProduct.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
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
            <FeatureProduct />
        </main>
        <Footer />
    </div>
</template>
<style scoped></style>
