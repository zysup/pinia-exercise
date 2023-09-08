<template>
  <div class="my-async-comp">我是异步组件</div>
</template>



<script lang="ts">
export default {
  mounted() {
    console.log('qwe mounted 异步组件加载')
  }
}
</script>

<style>
body {
  outline: 4px solid blue;
  outline-offset: -4px;
}
</style>