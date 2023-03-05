<template>
  <h2>Product List</h2>
  <ul>
    <li v-for="product in all" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart'

const productsStore = useProductStore()
const { all } = storeToRefs(productsStore)
productsStore.loadAllProducts()


const cartStore = useCartStore()
const { addProductToCart } = cartStore


</script>

<style scoped>

</style>