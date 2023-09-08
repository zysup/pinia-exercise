import { defineStore } from "pinia";
import { getProducts, IProduct } from "../api/shop";

export const useProductsStore = defineStore('products', {
  state: () => ({
    all: [] as IProduct[],
  }),
  getters: {},
  actions: {
    async loadAllProducts() {
      const ret = await getProducts()
      this.all = ret
    },
    decrementProduct(product: IProduct) {
      const ret = this.all.find(item => item.id === product.id)
      if (ret) {
        ret.inventory--
      }
    }
  },
})