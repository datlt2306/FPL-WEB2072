<template>
    <div class="flex items-center space-x-4">
        <!-- Guest area (Chưa đăng nhập) -->
        <a
            href="#"
            class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >Đăng Nhập</a
        >
        <a
            href="#"
            class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
            >Đăng Ký</a
        >

        <!-- Cart Icon (Đã đăng nhập - hiển thị cho User thường) -->
        <a
            href="cart.html"
            class="relative p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-all"
        >
            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
            <span
                class="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
            >
                2
            </span>
        </a>
    </div>
</template>
