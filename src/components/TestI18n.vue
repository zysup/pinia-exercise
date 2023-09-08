<template>
  <div>en.greetings.hello => {{$translate('en.greetings.hello')}}</div>
</template>



<script lang="ts">
export default {
  inject: ['$i18n'],
  mounted() {
    // this.$translate('en.greetings.hello')
    // console.log('qwe en.greetings.hello', this.$translate('en.greetings.hello')) // 'hello'
    // console.log('qwe this.$i18n', this.$i18n) // 'hello'
  }
}
</script>
  