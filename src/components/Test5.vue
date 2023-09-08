<!-- 杂项 -->
<template>
  <div class="test5">
    <component :is="Math.random() > 0.5 ? 'a' : 'span'">我是用&lt;component :is随机渲染的元素</component><br />
    <slot><div>我是插槽的默认值</div></slot>
    <div>我是正常div</div>
    <div>根组件实例上的属性 $lANG => {{ $lANG }}</div>
    <div>所有组件都混入的计算属性 $THEME => {{ $THEME }}</div>
    <div>provide提供的数据 gcount => {{ mygcount }}</div>
    <div v-color="mycolor">我是使用自定义指令 v-color="mycolor"设置的颜色</div>
    <p>我是p标签，我是使用v-bind('calcColor')设置的颜色</p>
    <h3 class="skyblue" ref="el">我是h3 我的颜色是通过:global(.skyblue)设置的</h3>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject, ref, computed, ComponentInternalInstance, getCurrentInstance, onMounted} from 'vue';

const { proxy } = getCurrentInstance() as ComponentInternalInstance
setTimeout(() => {
  console.log('qwe proxy', proxy)
  console.log('qwe 根组件实例上的属性 $lANG', proxy.$lANG)
  console.log('qwe 所有组件都混入的计算属性 $THEME', proxy.$THEME)
}, 1000)

const mygcount = inject('gcount')

const theme = reactive({
  huNum: 0,
})
setInterval(() => {
  theme.huNum += 100
}, 1000)
const calcColor = computed(() => {
  return `hsl(${theme.huNum}, 50%, 50%)`
})

const mycolor = ref('blue')

const el = ref(null)
onMounted(() => {
  console.log('qwe 模板引用', el.value)
})
</script>

<style scoped>
:slotted(div) {
  color: darkorchid;
}
p {
  color: v-bind('calcColor');
  border: 1px solid currentColor;
}
</style>
<style scoped>
:global(.skyblue) {
  color: skyblue;
}
</style>

