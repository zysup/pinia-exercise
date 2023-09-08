export interface IProduct {
  id: number,
  title: string,
  price: number,
  inventory: number,
}
export type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'>

const _products: IProduct[] = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 66 }
]

export const getProducts = async () => {
  await wait(2000)
  return _products
}

function wait(delay: number = 200) {
  return new Promise(r => setTimeout(r, delay))
}


export const buyProducts = async () => {
  await wait(1000)
  return Math.random() > 0.5
}


