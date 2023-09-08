<!--
 * @file: pinia
 * @author: Router
-->
<template>
  <p> {{mainStore.count }}</p>
  <p> {{mainStore.str }}</p>
  <p> {{mainStore.arr }}</p>
  <p> {{mainStore.count10 }}</p>
  <p> {{main2Store.count10 }}</p>
  <hr />
  <p>
    <button @click="handleChangState">修改数据</button>
    <button @click="reset">重置</button>
  </p>

</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useMainStore, useX, useMain2Store } from "../store/index";
import { watch, onRenderTracked, onRenderTriggered, ref, computed, markRaw } from "vue";
const mainStore: any = useMainStore()
const main2Store: any = useMain2Store()

// console.log('qwe main2Store', main2Store)
// @ts-ignore
main2Store._global = 'world222'
console.log('qwe main2Store._global', main2Store._global)
console.log('qwe mainStore._global', mainStore._global)
setTimeout(() => {
  main2Store._global = 'world333'
}, 5000);



onRenderTracked((event) => {
  // debugger
})

onRenderTriggered((event) => {
  // debugger
})

const handleChangState = () => {
  console.log('qwe mainStore', mainStore.arr)
  // console.log('qwe mainStore', mainStore.str)
  
  // 在 mainStore 上直接修改
  // useX().name = 'ppp'
  // mainStore.str += 'world'
  // mainStore.count++
  // mainStore.arr.push(4)
  // mainStore.arr = []
  // Object.assign(mainStore.arr, [9])

  // 合并数据到store里面去1
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   str: 'world',
  //   arr: [...mainStore.arr, 4]
  // })

  // 合并数据到store里面去2
  // mainStore.$state = {
  //   count: 110,
  //   str2: 'hello2',
  //   arr: [4]
  // }

  // 合并数据到store里面去3
  // mainStore.$patch(state => {
  //   state.count++
  //   state.str = 'world'
  //   state.arr.push(4)
  // })

  // 调用 actions 方法
  mainStore.changeState(2)
}
const reset = () => {
  mainStore.$reset()
}

// 订阅状态
mainStore.$subscribe((mutation, state) => {
  // console.log('qwe mainStore.$subscribe',mutation, state )
  // import { MutationType } from 'pinia'
  // mutation.type // 'direct' | 'patch object' | 'patch function'
  // 与 cartStore.$id 相同
  // mutation.storeId // 'cart'
  // 仅适用于 mutation.type === 'patch object'
  // mutation.payload // 补丁对象传递给 to cartStore.$patch()

  // 每当它发生变化时，将整个状态持久化到本地存储
  // localStorage.setItem('cart', JSON.stringify(state))
})

// 订阅 Actions
const unsubscribe = mainStore.$onAction(
  ({
    name, // action 的名字
    store, // store 实例
    args, // 调用这个 action 的参数
    after, // 在这个 action 执行完毕之后，执行这个函数
    onError, // 在这个 action 抛出异常的时候，执行这个函数
  }) => {
    return
    // 记录开始的时间变量
    const startTime = Date.now()
    // 这将在 `store` 上的操作执行之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 如果 action 成功并且完全运行后，after 将触发。
    // 它将等待任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回 Promise.reject ，onError 将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)
// unsubscribe()




// 监听相关--------------------------------
const { str, arr, obj } = storeToRefs(mainStore)
// console.log('qwe0', str, arr,obj)
// watch(() => mainStore.count, (newValue) => {
//   console.log('qwe newValue', newValue)
// })
// watch(() => mainStore.arr, (newValue) => {
//   console.log('qwe newValue', newValue)
// })
// watch(str, (newValue) => {
//   console.log('qwe newValue', newValue)
// })
watch(arr, (newValue) => {
  console.log('qwe newValue', markRaw(mainStore.arr))
}, { deep: true })

// 监听计算属性
// let foo2 = computed(() => mainStore.str)
// let count2 = computed(() => mainStore.count)
// let arr2 = computed(() => mainStore.arr)
// watch(foo2, (newValue) => {
//   console.log('qwe newValue', newValue)
// })
// watch(count2, (newValue) => {
//   console.log('qwe newValue', newValue)
// })
// watch(arr2, (newValue) => {
//   console.log('qwe newValue', newValue)
// }, { deep: true })

</script>