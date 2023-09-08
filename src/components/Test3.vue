<!--
 * @file: 响应式变更
 * @author: Router
-->
<template>
  <div class="test3">
    <article>
      <pre>obj3 => {{ obj3 }}</pre>
      <pre>obj4 => {{ obj4 }}</pre>
      <pre>obj5 => {{ obj5 }}</pre>
      <pre>obj6 => {{ obj6 }}</pre>
    </article>
    <button @click="changData">修改数据</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, shallowReactive, isReactive, toRef, ref,toRefs,readonly,isProxy ,isReadonly} from "vue";

let obj1 = reactive({
  nested: {
    count: 0, person: {
      name: 'zhansan',
      age: 20
    }
  },
  ccc: 123,
  arr: ['foo', 'bar', []]
})
let obj2 = {
  nested: { count: 0 },
  arr: ["foo", "bar", []],
  num: 123,
}
const obj3 = shallowReactive({
  str: 'obj3_shallowReactive',
  nested: {
    num: 2
  },
  arr: []
})
const obj4 = reactive({
  str: 'obj4_reactive',
  nested: {
    num: 2,
    fzz: {
      num2: 3,
    }
  },
  arr: []
})
const obj5 = {
  str: 'obj5_const',
  nested: {
    num: 2,
    fzz: {
      num2: 3,
    }
  },
  arr: []
}
const obj6 = reactive(obj5)
const temp = {
  str: 'qwe',
  nested: {
    num: 2,
    fzz: {
      num2: 333,
    }
  },
  arr: [1]
}
function changData() {
  // obj6.arr=[1,2,34]
  // obj6.str += '.'
  // obj.nested.num++
  // obj6.nested.fzz.num2++
  // obj6.arr.push(1)
  // obj6.arr[0] = '你好'
  Object.assign(obj3, temp)
  // console.log('qwe ', obj5)
}

let obj = obj3
let flag1 = isReactive(obj)
let flag2 = isReactive(obj.str)
let flag3 = isReactive(obj.nested)
let flag4 = isReactive(obj.nested.num)
let flag5 = isReactive(obj.arr)
console.log('qwe flag', flag1, flag2, flag3, flag4, flag5)

// const state = ref({
//   foo: 1,
//   bar: 2
// })
const state2 = readonly({a:123})
console.log('qwe', isProxy(state2))
console.log('qwe', isReactive(state2))
console.log('qwe', isReadonly(state2))

// const fooRef = toRefs(state)

// // 更改该 ref 会更新源属性
// fooRef.foo.value++
// console.log(state.value.foo) // 2

// // 更改源属性也会更新该 ref
// state.value.foo++
// console.log(fooRef.foo.value) // 3
</script>

<style>
pre {
  text-align: left;
}
article {
  display: flex;
  justify-content: space-evenly;
}
</style>