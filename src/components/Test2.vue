<template>
  <div class="test2">
    <div>test2</div>
    <div>gcount => {{ gcount }}</div>
    <button v-on="{mousedown: dothis, mouseup: dothat}">点击测试</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, reactive, watchEffect, inject, isRef } from "vue"
let gcount = inject("gcount", ref(123))

function dothat(evt: MouseEvent) {
  console.log('qwe dothat', evt.clientX)
}
function dothis(evt,e2) {
  console.log('qwe dothis', evt,e2)
  
}
</script>
<style scoped>
  .test2{
    color: red;
    outline: 1px solid red;
  }
</style>