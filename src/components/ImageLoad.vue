<template>
  <div>
    <figure>
      <img src="/vip-2.png" alt="" />
      <img src="/vite-2.svg" alt="" />
      <img src="/abc/vue-2.svg" alt="" />
      <img src="/src/assets/vite-3.svg" alt="" />
      <figcaption>用绝对路径引用图片时，如果根目录有与public文件夹下相同的文件，则开发环境下取public文件夹下的图片，而生产环境下会编译根目录下的图片。打包构建时会排除public文件夹下的文件</figcaption>
    </figure>
    <figure>
      <img src="../../public/vue-2.svg" alt="" />
      <img src="../../abc/vue-2.svg" alt="" />
      <img src="../../vite-0.svg" alt="" />
      <img src="../assets/vip-3.png" alt="" />
      <figcaption>用相对路径取引用public/abc文件夹下的图片，在生产环境会被编译处理</figcaption>
    </figure>
  </div>
</template>