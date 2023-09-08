<!-- 生命周期 -->
<template>
  <div class="test4">
    <button id="count" @click="count++">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'

const count = ref(0)

onBeforeMount(() => {
  console.log('qwe onBeforeMount 调用')
})
onMounted(() => {
  console.log('qwe onMounted 调用')
})
onBeforeUnmount(() => {
  console.log('qwe onBeforeUnmount 调用', )
})
onUnmounted(() => {
  console.log('qwe onUnmounted 调用 ', )
})

onBeforeUpdate(() => {
  console.log('qwe onBeforeUpdate 调用', )
})
onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log(document.getElementById('count').textContent)
  console.log('qwe onUpdated 调用', )
})

</script>