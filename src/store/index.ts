
import { defineStore } from "pinia";
export * from './products'
export * from './cart'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: JSON.parse(localStorage?.piniaState ?? '{}')?.main?.count ?? 100,
    str: 'hello',
    arr: [1, 2, 3],
    obj: {

    }
  }),

  getters: {
    count10(): number {
      return this.count + 10
      // return state.count + 10
    },
    arr2(state) {
      console.log('qwe main getters arr2调用')
      return [...state.arr, 4]
    },
  },
  actions: {
    changeState(num: number) {
      console.log('qwe changeState this', this)
      this.arr.push(4)
    }
  }
})

export const useMain2Store = defineStore('main2', {
  state: () => {
    console.log('qwe main2 state 初始化')
    return {
      count: 100,
      foo: 'bar999',
      arr: [1, 2, 3]
    }
  },
  getters: {
    count10() {
      console.log('qwe main2 getters count10调用')
      return this.count + 10
    },
  },
  actions: {
    changeState(num: number) {
    }
  }
})

export const useX = defineStore('x', () => {
  console.log('qwe x state 初始化')
  return {
    // name: ref('abc'),
    name: 'abc',
  }
})

