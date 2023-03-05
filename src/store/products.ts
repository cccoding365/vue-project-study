import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'

export const useProductStore = defineStore('product', {
  state: () => ({
    all: [] as IProduct[]
  }),
  getters: {},
  actions: {
    async loadAllProducts() {
      const result = await getProducts()
      this.all = result
    },

    decrementProduct(product: IProduct) {
      const result = this.all.find(item => item.id === product.id)
      if (result) result.inventory--
    }
  }
})