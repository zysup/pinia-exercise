import { defineStore } from "pinia";
import { buyProducts, IProduct, CartProduct } from "../api/shop";
import { useProductsStore } from "./products";
import { ref } from "vue";

// type CartProduct = {
//   quantity: number
// } &  IProduct
// type CartProduct = {
//   quantity: number
// } & Omit<IProduct, 'inventory'>

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartProducts: [] as CartProduct[],
    checkoutStatus: null as null | string
  }),
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((total, cur) => {
        return total + cur.price * cur.quantity
      }, 0)
    }
  },
  actions: {
    addProductToCart(product: IProduct) {
      console.log('qwe addProductToCart', product)

      if (product.inventory < 1) {
        return
      }

      const cartItem = this.cartProducts.find(item => item.id === product.id)
      console.log(cartItem === this.cartProducts[0])
      if (cartItem) {
        cartItem.quantity++
      } else {
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        })
      }

      // const productsStore = useProductsStore()
      // productsStore.decrementProduct(product)

      product.inventory--


    },

    async checkout() {
      const ret = await buyProducts()
      this.checkoutStatus = ret ? '成功' : '失败'
      if (ret) {
        this.cartProducts = []
      }
    }
  }
})