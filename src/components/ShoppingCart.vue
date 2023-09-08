<!-- <template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p>
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li>

      </li>
    </ul>
    <p>Total: {{ }}</p>
    <p><button>Checkout</button></p>
    <p>Checkout {{ }}.</p>
  </div>
</template> -->

<script lang="ts" setup>
import { useCartStore } from "../store/index";
const cartStore = useCartStore()

</script>
<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!cartStore.cartProducts.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in cartStore.cartProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ cartStore.totalPrice }}</p>
    <p><button @click="cartStore.checkout">Checkout</button></p>
    <p v-show="cartStore.checkoutStatus">Checkout {{ cartStore.checkoutStatus }}.</p>
  </div>
</template>