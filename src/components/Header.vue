<script setup lang="ts">
import ActionHeader from "./ActionHeader.vue";
import NavLink from "./NavLink.vue";
</script>

<template>
    <nav class="sticky top-0 z-50 glass-effect border-b border-slate-200/80 px-4 py-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Logo -->
            <a
                href="index.html"
                class="flex items-center space-x-2 text-xl font-bold tracking-tight text-indigo-600 hover:opacity-90 transition-opacity"
            >
                <i data-lucide="shopping-bag" class="w-6 h-6"></i>
                <span>Vanguard<span class="text-slate-800 font-medium text-base">Store</span></span>
            </a>

            <!-- Nav Links -->
            <NavLink />

            <!-- Actions -->
            <ActionHeader />
        </div>
    </nav>
</template>
