<script setup>
import { reactive } from 'vue'

const products = reactive([
    {
        id: 1,
        name: 'Tai Nghe Vanguard Studio Wireless',
        price: 3500000, category: 'Âm thanh',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60'
    },
    {
        id: 2,
        name: 'Giày Thể Thao Vanguard Pro Run',
        price: 1890000, category: 'Thời trang',
        inStock: false,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60'
    },
    {
        id: 3,
        name: 'Đồng Hồ Thông Minh Vanguard Watch X',
        price: 4200000,
        category:
            'Công nghệ',
        inStock: false,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60'
    },
    {
        id: 4,
        name: 'Ví Da Nam Tối Giản Vanguard Leather',
        price: 6500000,
        category: 'Phụ kiện',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1627124765138-b6b77e815b3c?w=500&auto=format&fit=crop&q=60'
    }
])
</script>

<template>
    <div>
        <h2>Quản lý sản phẩm</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Danh mục</th>
                    <th>Hình ảnh</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in products" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.category }}</td>
                    <td><img :src="item.image" /></td>
                    <td>
                        <button>Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
