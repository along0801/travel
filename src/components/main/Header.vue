<template>
  <div class="header">
    <div class="header-left">
      城市
      <span class="iconfont iconjiantouxia"></span>
    </div>
    <div class="header-input">
      <input type="text" />
    </div>
    <div class="header-right">
      <span class="iconfont icongengduo"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  line-height: 2.8125rem;
  background-color: #11eec2;
  color: #fff;
  .header-left {
    width: 4.0625rem;
    text-align: center;
    // background-color: pink;
  }
  .header-input {
    flex: 1;
    // background-color: gold;
    input {
      border: none;
      border-radius: 1.09375rem;
      line-height: 1.875rem;
      width: 100%;
    }
  }
  .header-right {
    width: 3.125rem;
    text-align: center;
    // background-color: red;
  }
}
</style>