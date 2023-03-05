export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number
}

const _products: IProduct[] = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export const getProducts = async () => {
  await wait(100)
  return _products
}

export const buyProducts = async () => {
  await wait(100)
  return Math.random() > 0.5
}

async function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}