<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="首页">
      <img slot="icon" src="@/assets/images/images/footer001.png" />
      首页
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="@/assets/images/images/footer002.png" />
      订单
    </mt-tab-item>
    <mt-tab-item id="客服">
      <img slot="icon" src="@/assets/images/images/footer003.png" />
      客服
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="@/assets/images/images/footer004.png" />
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "home",
  data() {
    return { selected: "首页" };
  },
  watch: {
    selected: function(val, oldVal) {
      console.log(val);
      // click后打印出当前mt-tab-item的id
    }
  }
};
</script>

<style lang="scss" scoped>
</style>