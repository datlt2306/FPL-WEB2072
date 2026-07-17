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
            <div
                class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
                <!-- Image -->
                <div class="relative overflow-hidden aspect-video bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
                        alt="Tai Nghe Vanguard Studio"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                        class="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
                    >
                        Âm thanh
                    </span>
                </div>
                <!-- Content -->
                <div class="p-5 flex flex-col flex-grow">
                    <a href="product-detail.html" class="block mb-2">
                        <h3
                            class="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-indigo-600 transition-colors"
                        >
                            Tai Nghe Vanguard Studio Wireless
                        </h3>
                    </a>
                    <p class="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                        Công nghệ chống ồn chủ động ANC kết hợp driver 40mm mang lại âm thanh độ
                        phân giải cao đỉnh cao.
                    </p>
                    <div
                        class="flex items-center justify-between mt-auto pt-3 border-t border-slate-50"
                    >
                        <div>
                            <span class="text-xs text-slate-400 block">Giá bán</span>
                            <span class="text-base font-extrabold text-slate-900">3.500.000 đ</span>
                        </div>
                        <button
                            class="flex items-center justify-center p-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        >
                            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT CARD 2 -->
            <div
                class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
                <!-- Image -->
                <div class="relative overflow-hidden aspect-video bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
                        alt="Giày Sneaker Vanguard Speed"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                        class="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
                    >
                        Thời trang
                    </span>
                </div>
                <!-- Content -->
                <div class="p-5 flex flex-col flex-grow">
                    <a href="product-detail.html" class="block mb-2">
                        <h3
                            class="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-indigo-600 transition-colors"
                        >
                            Giày Thể Thao Vanguard Pro Run
                        </h3>
                    </a>
                    <p class="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                        Đế đệm khí êm ái, chất liệu vải dệt Primeknit thoáng khí hỗ trợ tập luyện
                        tối đa.
                    </p>
                    <div
                        class="flex items-center justify-between mt-auto pt-3 border-t border-slate-50"
                    >
                        <div>
                            <span class="text-xs text-slate-400 block">Giá bán</span>
                            <span class="text-base font-extrabold text-slate-900">1.890.000 đ</span>
                        </div>
                        <button
                            class="flex items-center justify-center p-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        >
                            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT CARD 3 -->
            <div
                class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
                <!-- Image -->
                <div class="relative overflow-hidden aspect-video bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
                        alt="Đồng hồ thông minh Vanguard Watch"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                        class="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
                    >
                        Công nghệ
                    </span>
                </div>
                <!-- Content -->
                <div class="p-5 flex flex-col flex-grow">
                    <a href="product-detail.html" class="block mb-2">
                        <h3
                            class="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-indigo-600 transition-colors"
                        >
                            Đồng Hồ Thông Minh Vanguard Watch X
                        </h3>
                    </a>
                    <p class="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                        Đo nhịp tim, nồng độ oxy trong máu SpO2, màn hình AMOLED hiển thị sắc nét
                        dưới nắng lớn.
                    </p>
                    <div
                        class="flex items-center justify-between mt-auto pt-3 border-t border-slate-50"
                    >
                        <div>
                            <span class="text-xs text-slate-400 block">Giá bán</span>
                            <span class="text-base font-extrabold text-slate-900">4.200.000 đ</span>
                        </div>
                        <button
                            class="flex items-center justify-center p-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        >
                            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- PRODUCT CARD 4 -->
            <div
                class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
                <!-- Image -->
                <div class="relative overflow-hidden aspect-video bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1627124765138-b6b77e815b3c?w=500&auto=format&fit=crop&q=60"
                        alt="Ví da tối giản Vanguard Minimalist"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                        class="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
                    >
                        Phụ kiện
                    </span>
                </div>
                <!-- Content -->
                <div class="p-5 flex flex-col flex-grow">
                    <a href="product-detail.html" class="block mb-2">
                        <h3
                            class="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-indigo-600 transition-colors"
                        >
                            Ví Da Nam Tối Giản Vanguard Leather
                        </h3>
                    </a>
                    <p class="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
                        Chất liệu da Saffiano thật 100%, tích hợp công nghệ chống quét trộm thẻ RFID
                        bảo mật cao.
                    </p>
                    <div
                        class="flex items-center justify-between mt-auto pt-3 border-t border-slate-50"
                    >
                        <div>
                            <span class="text-xs text-slate-400 block">Giá bán</span>
                            <span class="text-base font-extrabold text-slate-900">650.000 đ</span>
                        </div>
                        <button
                            class="flex items-center justify-center p-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        >
                            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
