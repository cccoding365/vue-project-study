<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!cartProducts.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ totalPrice }}</p>
    <p><button :disabled="!cartProducts.length" @click="cartStore.checkout">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/cart'


const cartStore = useCartStore()
const { cartProducts, totalPrice, checkoutStatus } = storeToRefs(cartStore)

</script>