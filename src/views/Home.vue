<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <div class="header">
      <Header></Header>
      <router-view></router-view>
    </div>

    <!-- 中间的 路由 router-view 区域 -->
    <div class="content">
      <Content></Content>
      <router-view></router-view>
    </div>

    <!-- 底部的 Tabbar 区域 -->
    <div class="footer">
      <Footer></Footer>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/main/Header";
import Content from "../components/main/Content";
import Footer from "../components/main/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Content,
    Footer
  }
};
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
  height: 50px;
  width: 100%;
  top: 0;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 25px;
  bottom: 30px;
  /*height: calc(100% - 50px);*/
  overflow-x: hidden;
  overflow-y: auto;
  // background: orange;
}

.footer {
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0;
  background: #858585;
}

/* Tim 解决移动端 底部导航出不来问题 end */
</style>
