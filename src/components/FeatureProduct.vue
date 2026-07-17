<script setup>
import Product from "./Product.vue";

const props = defineProps({
    data: {
        type: Array,
    },
});
</script>

<template>
    <section id="featured" class="max-w-7xl mx-auto px-4 space-y-6">
        <div class="flex items-end justify-between">
            <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Sản phẩm nổi bật</h2>
                <p class="text-sm text-slate-500 mt-1">
                    Những sản phẩm được khách hàng đánh giá cao nhất
                </p>
            </div>
            <a
                href="#"
                class="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center space-x-1 group"
            >
                <span>Xem tất cả</span>
                <i
                    data-lucide="arrow-right"
                    class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                ></i>
            </a>
        </div>

        <!-- Grid sản phẩm nổi bật -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- =========================================================================
             TEMPLATE NOTE: HỌC VIÊN TÁCH CARD SẢN PHẨM DƯỚI ĐÂY THÀNH COMPONENT ProductCard.vue
             VÀ SỬ DỤNG v-for ĐỂ HIỂN THỊ DANH SÁCH
             ========================================================================= -->
            <!-- PRODUCT CARD 1 -->
            <Product v-for="item in data" key="item.id" :item="item" />
        </div>
    </section>
</template>
