<template>
    <section
        class="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl overflow-hidden py-20 px-6 md:px-12 mx-4 mt-6 shadow-2xl max-w-7xl lg:mx-auto"
    >
        <!-- Decorative background blur -->
        <div
            class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
            class="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse"
        ></div>

        <div class="relative max-w-3xl space-y-6 md:space-y-8">
            <span
                class="inline-flex items-center space-x-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30"
            >
                <span>Khuyến mãi chào hè 2026</span>
            </span>
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Nâng Tầm Trải Nghiệm <br class="hidden sm:inline" />
                <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400"
                    >Công Nghệ & Thời Trang</span
                >
            </h1>
            <p class="text-slate-300 text-base md:text-lg max-w-xl font-light">
                Khám phá bộ sưu tập tai nghe, phụ kiện da cao cấp và các dòng sản phẩm thời trang
                thiết kế độc quyền. Đơn giản, tinh tế, và bền bỉ.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
                <a
                    href="#"
                    class="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all flex items-center space-x-2"
                >
                    <span>Mua ngay</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
                <a
                    href="#featured"
                    class="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                    Xem sản phẩm nổi bật
                </a>
            </div>
        </div>
    </section>
</template>
