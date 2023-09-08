
<script lang="ts" setup>
import { useCartStore, useProductsStore } from "../store";
const productsStore = useProductsStore()
const cartStore = useCartStore()
productsStore.loadAllProducts()

</script>
<template>
  <h2>Products</h2>
  <ul>
    <li v-for="product in productsStore.all" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br>
      <button :disabled="!product.inventory" @click="cartStore.addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>