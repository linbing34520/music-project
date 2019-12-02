<template>
  <div class="index" style="padding-bottom:50px;">
    <div class="top">
      <div class="maintop">
        <span class="iconfont icon-diantai"></span>
        <div>
          <input type="text" placeholder="北京一夜-信乐团" />
        </div>
        <span class="iconfont icon-paixingbang"></span>
      </div>
    </div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.pic" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="type">
      <div @click="tui">
        <div class="iconfont icon-iconset0208-copy com"></div>每日推荐
      </div>
      <div>
        <div class="iconfont icon-gedan com"></div>歌单
      </div>
      <div>
        <div class="iconfont icon-paixingbang com"></div>排行榜
      </div>
      <div>
        <div class="iconfont icon-diantai1 com"></div>电台
      </div>
      <div>
        <div class="iconfont icon-zhibo com"></div>直播
      </div>
    </div>

    <div class="mainsong">
      <div class="songtop">
        <div class="tj">推荐歌单</div>
        <div>
          <span class="gc">歌单广场</span>
        </div>
      </div>
      <mt-loadmore >
        <div>
          <div class="songd">
            <div v-for="(item,index) in list" :key="index" @click="gome(item.id)">
              <div style="border-radius:10px;">
                <img v-lazy="item.picUrl" alt />
              </div>
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <div class="nav">
      <div>
        <div
          class="iconfont icon-diantai iconb"
          style="color:#fff;width: 32px;height: 32px;background-color: #FD402D;border-radius: 30px;line-height: 32px;margin-left:30%"
        ></div>发现
      </div>
      <div>
        <div class="iconfont icon-shipin iconb"></div>视频
      </div>
      <div>
        <div class="iconfont icon-local iconb"></div>我的
      </div>
      <div>
        <div class="iconfont icon-shequ iconb"></div>云村
      </div>
      <div @click="gohao">
        <div class="iconfont icon-wode iconb"></div>账号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [],
      imgs: [],
      allLoaded: false, //为true禁止调用拉动函数
      autoFill: false //自动调用loadBottom函数直到充满父容器
    };
  },
  beforeCreate() {
    const user = localStorage.getItem('user')
    if(!user){
        this.$router.push({name:'Login'})
    }
  },
  mounted() {
    // this.$axios.defaults.baseURL='http://www.young1024.com:666'
    this.$axios
      .get("http://www.young1024.com:666/personalized")
      .then(result => {
        //  console.log(result.data.result);
        this.list = result.data.result;
      });
  },
  created() {
    this.$axios
      .get("http://www.young1024.com:666/banner?type=2")
      .then(result => {
        console.log(result);
        this.imgs = result.data.banners;
      })
      .catch(err => {});
  },
  methods: {
    gome(id) {
      //alert(id)
      this.$router.push({
        name: "Mylove",
        params: {
          id: id
        }
      });
    },
    gohao() {
        this.$router.push({
        name: "Sigout"
      });
    },
    tui() {
      this.$router.push({
        name: "Gedan"
      });
    }
  }
};
</script>
<style scoped>
img[lazy="loading"] {
  width: 105px;
  height: 105px;
  margin: auto;
}
.index {
  padding: 0 11px 50px 11px;
  margin-bottom: 50px;
}
.top {
  height: 44px;
}
.top span {
  font-size: 20px;
  color: #333;
}
.top .maintop {
  display: flex;
  margin-top: 20px;
}
.top input {
  width: 86%;
  border: 0;
  outline: none;
  background-color: #eee;
  text-align: center;
  height: 26px;
  border-radius: 30px;
  margin-left: 4%;
}
.banner {
  width: 100%;
  height: 128px;
  border-radius: 8px;
}
.mint-swipe {
  border-radius: 8px;
}
.is-active {
  opacity: 1;
}
.banner img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.top div {
  flex: 1;
}
.songd {
  margin-top: 12px;

  width: 100%;
}
.songd > div {
  width: 30%;
  float: left;
  margin: 4% 1%;
  height: 140px;
  font-size: 12px;
  color: #666;
}
.type {
  height: 46px;
  display: flex;
  text-align: center;
  line-height: 23px;
  margin-top: 10px;
}
.type > div {
  flex: 1;
  font-size: 12px;
  color: #666;
}
.com {
  width: 36px;
  height: 36px;
  background-color: #fd402d;
  margin-left: 30%;
  border-radius: 20px;
  font-size: 20px;
  line-height: 32px;
  color: #fff;
}
.mainsong {
  margin-top: 20px;
  padding-bottom: 6px;
}
.songtop {
  display: flex;
}
.songtop > div {
  flex: 1;
}
.songtop > div:nth-child(2) {
  text-align: right;
}
.songtop span {
  text-align: right;
  font-size: 14px;
  color: #333;
  width: 60px;
  height: 60px;
}
.nav {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  box-shadow: 0 0 4px #999;
  padding: 6px 11px 0 11px;
  left: 0;
  font-size: 14px;
  color: #333;
  background-color: #fff;
}
.nav > div {
  flex: 1;
  width: 25%;
  text-align: center;
}

.iconb {
  font-size: 22px;
  color: #666;
}
</style>
