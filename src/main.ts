import { createApp, readonly, ref, defineAsyncComponent, watch } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import Loading from './components/Loading.vue'
import Error from './components/Error.vue'
import MyAsyncComp from './components/MyAsyncComp.vue'
import i18nPlugin from './plugins/i18n'

// 扩充类型
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $lANG: string,
    $THEME: string,
    $translate: (key: any) => void
  }
}

// import '../1.js'

// 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。
const app = createApp(App, {
  aaa: 123456,
  bbb: { ccc: '456' }
})
const app2 = createApp(App)

// 插件注册
app.use(i18nPlugin, {
  cn: {
    greetings: {
      hello: '你好世界'
    }

  },
  en: {
    greetings: {
      hello: 'hello world'
    }
  }
})

// 提供全局混入
app.mixin({
  computed: {
    $THEME() {
      return 'theme1';
    }
  },
  mounted() {
    console.log('from global mixin mounted')
  },
  methods: {
    handleInit() {
      console.log('from global mixin methods handleInit')
    }
  }
});


const pinia = createPinia()
const shardeRef = ref('world')
// 所有Store添加一个静态属性, devtools会跟踪，不会联动跟新
// pinia.use(() => ({ _global: 'world' }))
// 所有Store添加一个静态属性, devtools会跟踪，会联动跟新
// pinia.use(() => ({ _global: shardeRef }))
pinia.use((store) => {
  console.log('qwe store', store)
  // store.abc = 123
})

pinia.use((context) => {
  console.log('qwe context', context)
  // context.pinia // 使用 `createPinia()` 创建的 pinia
  // context.app // 使用 `createApp()` 创建的当前应用程序（仅限 Vue 3）
  // context.store // 插件正在扩充的 store
  // context.options // 定义存储的选项对象传递给`defineStore()`

  let { store } = context
  // 所有Store添加一个静态属性, devtools不会跟踪，不会联动跟新
  // store._global = 'world'

  // 所有Store添加一个静态属性, devtools不会跟踪，会联动跟新
  // store._global = shardeRef

  // 所有Store添加一个静态属性, devtools会跟踪，会联动跟新
  store._global = shardeRef
  store.$state._global = shardeRef
})

// 监听整个piaia仓库，每当它发生变化时，将整个状态持久化到本地存储
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)

// 注册异步组件
app.component('MyAsyncComp', defineAsyncComponent({
  loader: () => import('./components/MyAsyncComp.vue'),
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 5000,
}
))
// 注册同步组件
// app.component('MyAsyncComp', MyAsyncComp)

app.config.performance = true

// 设置全局属性
app.config.globalProperties.$lANG = 'en'
// 用于为应用内抛出的未捕获错误指定一个全局处理函数。
// app.config.errorHandler = (err, instance, info) => {
//     console.log('qwe app.config.errorHandler', err)
//   }

// 自定义指令
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})


// 全局依赖提供
const gcount = ref(10)
// let gcount = 0
setTimeout(() => {
  gcount.value = 888
  // gcount = 888
}, 3000);
app.provide('gcount', gcount)
// app.provide('gcount',  readonly(gcount))

app.use(pinia)
const aaa = app.mount('#app')
// const aaaa2 = app2.mount('#app2')
  console.log('qwe app.config', app.config)
  // console.log('qwe aaa', aaa)