
<template>
  <div v-if="isTestShow" class="comp-wrapper">
    <Test @clickEvt="clickevt" @click-evt="clickevt" @click-Evt="clickevt" class="test-comp" str="test comp" style="color: blue;" />
  </div>
  <div v-if="isCartShow" class="comp-wrapper">
    <ProductList  ref="ele"/>
    <ShoppingCart />
  </div>
  <div v-if="isShowFather" class="comp-wrapper">
    <Father.Child />
    <Father.Child2 />
  </div>

  <TestPinia v-if="isTestPiniaShow" class="comp-wrapper" />
  <MyAsyncComp v-if="isMyAsyncCompShow" class="comp-wrapper" />
  <TestI18n v-if="isTestI18nShow" class="comp-wrapper" />
  <Test3 v-if="isTest3Show" class="comp-wrapper" />
  <Test4 v-if="isTest4Show" class="comp-wrapper" />
  <Test5 v-if="isTest5Show" class="comp-wrapper" >
    <div>我是从父组件App.vue过来的，填充到Test5.vue的默认插槽</div>
  </Test5>
  <Filter v-if="isFilterShow" class="comp-wrapper" />
  <List v-if="isListShow" class="comp-wrapper" />
  <Diy v-if="isDiyShow" class="comp-wrapper" />
  <Todos v-if="isTodosShow" class="comp-wrapper" />
  <JiShiQi v-if="isJiShiQiShow" class="comp-wrapper" />
  <ImageLoad v-if="isImageLoadShow" class="comp-wrapper" />
  
  <Abc >123</Abc>

  <button @click="isShowFather = !isShowFather">切换Father展示</button>
  <button @click="isMyAsyncCompShow = !isMyAsyncCompShow">切换 isMyAsyncCompShow</button>
  <button @click="isTestI18nShow = !isTestI18nShow">切换 isTestI18nShow</button>
  <button @click="isTest3Show = !isTest3Show">切换 isTest3Show</button>
  <button @click="isTest4Show = !isTest4Show">切换 isTest4Show</button>
  <button @click="isTest5Show = !isTest5Show">切换 isTest5Show</button>
  <button @click="isTestPiniaShow = !isTestPiniaShow">切换 isTestPiniaShow</button>
  <button @click="isCartShow = !isCartShow">切换 isCartShow</button>
  <button @click="isTestShow = !isTestShow">切换 isTestShow</button>
  <button @click="isFilterShow = !isFilterShow">切换 isFilterShow</button>
  <button @click="isListShow = !isListShow">切换 isListShow</button>
  <button @click="isDiyShow = !isDiyShow">切换 isDiyShow</button>
  <button @click="isTodosShow = !isTodosShow">切换 isTodosShow</button>
  <button @click="isJiShiQiShow = !isJiShiQiShow">切换 isJiShiQiShow</button>
  <button @click="isImageLoadShow = !isImageLoadShow">切换 isImageLoad</button>
</template>

<script lang="ts">
console.log('我是app.vue中的script')
</script>

<script setup lang="ts">
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"
import TestI18n from "./components/TestI18n.vue"
import TestPinia from "./components/TestPinia.vue"
import Diy from "./views/diy/Diy.vue"
import Test3 from "./components/Test3.vue"
import Test4 from "./components/Test4.vue"
import Test5 from "./components/Test5.vue"
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Filter from "./components/Filter.vue"
import Todos from "./components/Todos.vue"
import Father from "./views/father/index.js"
import JiShiQi from "./components/JiShiQi.vue"
import ImageLoad from "./components/ImageLoad.vue"

import { onMounted, ref } from "vue"


const isShowFather = ref(false)
const isMyAsyncCompShow = ref(false)
const isTestI18nShow = ref(false)
const isTest3Show = ref(false)
const isTestPiniaShow = ref(false)
const isCartShow = ref(false)
const isTestShow = ref(false)
const isTest4Show = ref(false)
const isTest5Show = ref(false)
const isFilterShow = ref(false)
const isListShow = ref(false)
const isDiyShow = ref(false)
const isTodosShow = ref(false)
const isJiShiQiShow = ref(false)
const isImageLoadShow = ref(false)

function clickevt(a, b) {
  console.log('qwe clickevt', a, b)
}

document.documentElement.setAttribute('lang', navigator.language)
</script>

<style>
.comp-wrapper {
  outline: 1px solid blue;
  padding: 6px 0;
  margin-bottom: 6px;
}
</style>



