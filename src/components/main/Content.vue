<template>
  <div class="content">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="@/assets/images/images/swipe001.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/assets/images/images/swipe002.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/assets/images/images/swipe003.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="hotel">
      <div class="sub-hotel">
        <li class="main-hotel">
          <router-link to="/home/hotel">酒店</router-link>
        </li>
      </div>
      <div class="sub-hotel">
        <li class="ch-hotel">
          <router-link to="/home/spHotel">特价酒店</router-link>
        </li>
        <li class="ch-hotel">
          <router-link to="/home/hotel">民宿·客栈</router-link>
        </li>
      </div>
      <div class="sub-hotel">
        <li class="ch-hotel">
          <router-link to="/home/hotel">海外酒店</router-link>
        </li>
        <li class="ch-hotel">
          <router-link to="/home/hotel">钟点房</router-link>
        </li>
      </div>
    </div>
    <div class="ticket">
      <div class="sub-ticket">
        <li class="main-ticket">
          <router-link to="/home/ticket">机票</router-link>
        </li>
      </div>
      <div class="sub-ticket">
        <li class="ch-ticket">
          <router-link to="/home/ticket">低价机票</router-link>
        </li>
        <li class="ch-ticket">
          <router-link to="/home/ticket">火车票</router-link>
        </li>
      </div>
      <div class="sub-ticket">
        <li class="ch-ticket">
          <router-link to="/home/ticket">汽车票·船票</router-link>
        </li>
        <li class="ch-ticket">
          <router-link to="/home/ticket">打车·租车</router-link>
        </li>
      </div>
    </div>
    <div class="travel">
      <div class="sub-travel">
        <li class="main-travel">
          <router-link to="/home/travel">旅游</router-link>
        </li>
      </div>
      <div class="sub-travel">
        <li class="ch-travel">
          <router-link to="/home/travel">景点·门票</router-link>
        </li>
        <li class="ch-travel">
          <router-link to="/home/travel">攻略·游记</router-link>
        </li>
      </div>
      <div class="sub-travel">
        <li class="ch-travel">
          <router-link to="/home/travel">旅游团购</router-link>
        </li>
        <li class="ch-travel">
          <router-link to="/home/travel">周末游·自驾</router-link>
        </li>
      </div>
    </div>
    <div class="guide">
      <div class="guide-row">
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide001.png" alt />
          <span>跟团游</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide002.png" alt />
          <span>一日游</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide003.png" alt />
          <span>信用付</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide004.png" alt />
          <span>信用付</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide005.png" alt />
          <span>借钱</span>
        </router-link>
      </div>
      <div class="guide-row">
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide006.png" alt />
          <span>出境游</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide007.png" alt />
          <span>定制游</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide008.png" alt />
          <span>自由行</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide009.png" alt />
          <span>接送机</span>
        </router-link>
        <router-link to="/home/hotel">
          <img src="@/assets/images/images/guide010.png" alt />
          <span>更多</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  .swipe {
    margin-bottom: 5px;
    height: 9.375rem;
    background-color: pink;
    img {
      width: 23.4375rem;
      height: 9.375rem;
    }
  }
  // ================hotel======================
  .hotel {
    // background-color: rgb(237, 112, 105);
    display: flex;
    // justify-content: space-between;
    margin: 0px 6px 0 6px;

    .sub-hotel {
      height: 5.3125rem;
      flex: 1;
      margin: 0 1px;
      // background-color: rgb(237, 112, 105);
      .main-hotel {
        display: flex;
        justify-content: center;
        line-height: 5.3125rem;
        height: 5.125rem;
        border-radius: 5px 0 0 5px;
        background-color: rgb(237, 112, 105);
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      .ch-hotel {
        height: 2.5rem;
        margin: 0 0 2px 0;
        list-style: none;
        background-color: rgb(237, 112, 105);
        a {
          color: #fff;
          display: flex;
          justify-content: center;
          line-height: 2.5rem;
          text-decoration: none;
        }
      }
      &:nth-child(3) li {
        &:nth-child(1) {
          border-radius: 0 5px 0 0;
        }
        &:nth-child(2) {
          border-radius: 0 0 5px 0;
        }
      }
    }
  }
  // ================ticket======================
  .ticket {
    // background-color: rgb(237, 112, 105);
    display: flex;
    // justify-content: space-between;
    margin: 0px 6px 0 6px;
    .sub-ticket {
      height: 5.3125rem;
      flex: 1;
      margin: 0 1px;
      // background-color: rgb(237, 112, 105);
      .main-ticket {
        display: flex;
        justify-content: center;
        line-height: 5.3125rem;
        height: 5.125rem;
        border-radius: 5px 0 0 5px;
        background-color: rgb(94, 166, 248);
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      .ch-ticket {
        height: 2.5rem;
        margin: 0 0 2px 0;
        list-style: none;
        background-color: rgb(94, 166, 248);
        a {
          color: #fff;
          display: flex;
          justify-content: center;
          line-height: 2.5rem;
          text-decoration: none;
        }
      }
      &:nth-child(3) li {
        &:nth-child(1) {
          border-radius: 0 5px 0 0;
        }
        &:nth-child(2) {
          border-radius: 0 0 5px 0;
        }
      }
    }
  }
  // ====================travel=====================
  .travel {
    // background-color: rgb(237, 112, 105);
    display: flex;
    // justify-content: space-between;
    margin: 0px 6px 0 6px;
    .sub-travel {
      height: 5.3125rem;
      flex: 1;
      margin: 0 1px;
      // background-color: rgb(237, 112, 105);
      .main-travel {
        display: flex;
        justify-content: center;
        line-height: 5.3125rem;
        height: 5.125rem;
        border-radius: 5px 0 0 5px;
        background-color: rgb(104, 215, 117);
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      .ch-travel {
        height: 2.5rem;
        margin: 0 0 2px 0;
        list-style: none;
        background-color: rgb(104, 215, 117);
        a {
          color: #fff;
          display: flex;
          justify-content: center;
          line-height: 2.5rem;
          text-decoration: none;
        }
      }
      &:nth-child(3) li {
        &:nth-child(1) {
          border-radius: 0 5px 0 0;
        }
        &:nth-child(2) {
          border-radius: 0 0 5px 0;
        }
      }
    }
  }
  // ==============================================
  .guide {
    height: 7.5rem;
    margin: 1px 8px;
    .guide-row {
      display: flex;
      margin: 10px auto;
      a {
        width: 3.125rem;
        height: 3.125rem;
        margin: 0 auto;
        font-size: 0.875rem;
        text-decoration: none;
        color: #000;
        img {
          display: block;
          width: 2.1875rem;
          height: 2.1875rem;
          margin: 0 auto;
        }
        span {
          display: flex;
          justify-content: center;
          margin-top: 3px;
        }
      }
    }
  }
}
</style>