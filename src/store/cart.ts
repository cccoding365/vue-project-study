import { defineStore } from "pinia"
import { buyProducts, IProduct } from "../api/shop"
import { useProductStore } from './products'

type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'>

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartProducts: [] as CartProduct[],
    checkoutStatus: null as null | string
  }),
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((total, item) => {
        return total += item.price * item.quantity
      }, 0)
    }
  },
  actions: {
    addProductToCart(product: IProduct) {
      if (product.inventory < 1) return
      const cartItem = this.cartProducts.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        const { id, title, price } = product
        this.cartProducts.push({
          id, title, price,
          quantity: 1
        })
      }
      const productStore = useProductStore()
      const { decrementProduct } = productStore
      decrementProduct(product)
    },

    async checkout() {
      const result = await buyProducts()
      this.checkoutStatus = result ? 'Success' : 'Failure'
      if (result) {
        this.cartProducts = []
      }
    }
  }
})