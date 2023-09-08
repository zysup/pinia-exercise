<!--
 * @file: 监听和计算属性
 * @author: Router
-->
<script lang="ts">
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import test2 from "./Test2.vue"
import { ref, watch, computed, reactive, watchEffect, inject, isRef, toRef, shallowRef, triggerRef } from "vue"
const emit = defineEmits({
  'clickEvt': (a, b) => {
    console.log('qwe', a && b)
    if (a && b) {
      return false
    } else {
      return false
    }
    // return true
  }
})
// defineEmits(["clickEvt"])
const props = defineProps(['str'])
// console.log('qwe props', toRef(props, 'str') === toRef(props, 'str'))
// console.log('qwe props', props.str)

const aa = ref(0)
const bb = ref(0)
const cc = ref({
  a: 1,
  b: {
    c: 2
  }
})
const dd = reactive({
  a: 1,
  b: {
    c: 2
  }
})
const ee = shallowRef({ count: 1 })
const url = ref("https://yesno.wtf/api")
const answer = ref("")

let gcount = inject("gcount", ref(123))
console.log('qwe gcount=>%s \nisRef=>%s', gcount.value, isRef(gcount))
setTimeout(() => {
  gcount.value = 999
}, 3000)
watch(gcount, (newValue, oldValu) => {
  console.log(`qwe watch gcount is ${newValue}`)
})


// 单个ref
watch(aa, (newValue, oldValu) => {
  // console.log(`aa is ${newValue}`)
})
watch(cc, (newValue, oldValue) => {
  // console.log('qwe cc', JSON.stringify(newValue))
  // console.log('qwe cc', JSON.stringify(oldValue))
}, { deep: true })

// getter 函数
watch(
  () => aa.value + bb.value,
  (sum) => {
    // console.log(`sum of aa + bb is: ${sum}`)
  }
)
// 一个响应式对象
watch(dd, (newValue, oldValue) => {
  // console.log('qwe ', JSON.stringify(newValue),newValue)
  // console.log('qwe ', JSON.stringify(oldValue),oldValue)
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
  // })
}, { deep: true })
// 一个浅层响应式对象
watch(ee, (newValue, oldValue) => {
  // console.log('qwe ', JSON.stringify(newValue),newValue)
  // console.log('qwe ', JSON.stringify(oldValue),oldValue)
})
// }, { deep: true })
// 一个响应式对象的一个属性
watch(
  () => dd.b.c,
  (newValue, oldValue) => {
    // console.log("qwe ", JSON.stringify(newValue), newValue)
    // console.log("qwe ", JSON.stringify(oldValue), oldValue)
  }
)
// 多个来源组成的数组
watch([aa, () => bb.value], ([newX, newY]) => {
  // console.log(`aa is ${newX} and bb is ${newY}`)
})
watch([aa, bb], ([newX, newY], [oldValuex, oldValuey]) => {
  // console.log(`aa is ${newX} and bb is ${newY} sum is ${sum.value}`)
  // console.log(`aa is ${oldValuex} and bb is ${oldValuey} sum is ${oldValuex + oldValuey}`)
})
watchEffect(async () => {
  let xx = aa.value
  const res = await fetch(url.value)
  answer.value = (await res.json()).answer
})


// 计算属性拦截
const sum = computed(() => aa.value + bb.value, {
  onTrack(e) {
    // 当 sum.value 被追踪为依赖时触发
    // debugger
  },
  onTrigger(e) {
    // 当 sum.value 被更改时触发
    // debugger
  }
})
function triggerRefHandle() {
  triggerRef(ee)
}

function click2() {
  emit('clickEvt', 1, 0)
}


</script>
<template>
  <div>
    <button @click="aa++">aa++</button>
    <button @click="bb++">bb++</button>
    <button @click="cc.a++">cc.a++</button>
    <button @click="cc = {}">cc={}</button>
    <button @click="dd = {}">dd={}</button>
    <button @click="dd.a++">dd.a++</button>
    <button @click="cc.b.c++">cc.b.c++</button>
    <button @click="dd.b.c++">dd.b.c++</button>
    <button @click="ee.count++">ee.count++</button>
    <button @click="triggerRefHandle">triggerRef</button>
    <br />
    <button @click="$emit('clickEvt', 1, 0)">事件1</button>
    <button @click="click2">事件2</button>
    <!-- <code> -->
    <pre style="text-align: left;">attrs => <br />{{ $attrs }}</pre>
    <!-- </code> -->
    <div> aa+bb =>{{ sum }}</div>
    <div> gcount =>{{ gcount }}</div>
    <test2 v-bind:style="$attrs.style"></test2>
    <test2 v-bind="$attrs"></test2>
  </div>
</template>
<style scoped>
button {
  margin: 6px;
}
.test {
  color: blue;
}
</style>