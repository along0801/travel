<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <div class="header">000</div>

    <!-- 中间的 路由 router-view 区域 -->
    <div class="content">
      <router-link to="/home/hotel">hotel</router-link>
      <router-view></router-view>
    </div>

    <!-- 底部的 Tabbar 区域 -->
    <div class="footer">
      <div>222</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .app-container {
//   padding-top: 40px;
//   padding-bottom: 50px;
//   overflow-x: hidden;
//   background-color: green;
//   /* Tim 解决移动端 底部导航出不来问题 start */
//   width: 100%;
//   height: 100%;
//   position: relative;
//   /* Tim 解决移动端 底部导航出不来问题 end */
// } /* Tim 解决移动端 底部导航出不来问题 start */
.header {
  position: absolute;
  height: 40px;
  width: 100%;
  top: 0;
  background-color: pink;
}

.content {
  position: absolute;
  height: 200px;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 40px;
  /*height: calc(100% - 50px);*/
  overflow-x: hidden;
  overflow-y: auto;
  background: orange;
}

.footer {
  position: absolute;
  // top: 100px;
  height: 50px;
  width: 100%;
  bottom: 0;
  background: blue;
}

/* Tim 解决移动端 底部导航出不来问题 end */
</style>
