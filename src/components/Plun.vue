<template>
  <div id="plun">
    <div class="plunb">
      <div class="top">
        <div class="iconfont icon-shouqi_m" @click="fanhu"></div>
        <div>评论( {{ count }} )</div>
        <div class="iconfont icon-fenxiang"></div>
        <div class="iconfont icon-paixingbang"></div>
      </div>
      <div class="topc" style="height:60px"></div>

      <div class="mainsong">
        <div class="songone">
          <div>
            <div class="zj">
              <img
                :src="this.$store.state.cursong.al.picUrl"
                alt
                width="60px"
                height="60px"
                style="border-radius: 6px;"
              />
            </div>
            <div>
              <div>{{this.$store.state.cursong.name}}</div>
              <div
                class="auth"
                style="color:#999;font-size:14px"
              >{{this.$store.state.cursong.ar[0].name}}</div>
            </div>
          </div>
          <div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>

      <div class="mainsong margint">
        <div class="songone">
          <div>
            <div class="zj">
              <img
                :src="this.$store.state.cursong.al.picUrl"
                alt
                width="60px"
                height="60px"
                style="border-radius: 6px;"
              />
            </div>
            <div>
              <div>小马哥的直播</div>
              <div class="auth"></div>
            </div>
          </div>
          <div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div style="font-size: 18px;line-height: 60px;border-top:6px #eee solid">热门评论</div>
      <div class="mainplun" v-for="(item,index) in plun" :key="index">
        <div class="plunone">
          <div>
            <img :src="item.user.avatarUrl" alt />
          </div>
          <div>
            <div>
              <div style="color:#666">{{item.user.nickname}}</div>
              <div style="font-size:14px;color:#999">{{ item.time | dateFilter('YYYY年MM月DD日') }}</div>
            </div>
          </div>
          <div class="right">
            <span>{{item.likedCount}}</span>
            <span class="iconfont icon-good_active-copy"></span>
          </div>
        </div>
        <div
          style="margin-left:18%;color:#333;border-bottom:1px #eee solid;padding-bottom:4%"
        >{{ item.content }}</div>
      </div>

      <div style="font-size: 18px;line-height: 60px;border-top:6px #eee solid">最新评论</div>

      <div class="moreplun" v-for="(more,indexs) in more" :key="indexs+'info'">
        <div class="plunone">
          <div>
            <img :src="more.user.avatarUrl" alt />
          </div>
          <div>
            <div>
              <div style="color:#666">{{more.user.nickname}}</div>
              <div style="font-size:14px;color:#999">{{ more.time | dateFilter('YYYY年MM月DD日') }}</div>
            </div>
          </div>
          <div class="right">
            <span>{{more.likedCount}}</span>
            <span class="iconfont icon-good_active-copy"></span>
          </div>
        </div>
        <div
          style="margin-left:18%;color:#333;border-bottom:1px #eee solid;padding-bottom:4%"
        >{{ more.content }}</div>
      </div>

      <mt-button size="large" type="danger" plain @click="loadMsgByPage">加载更多</mt-button>
    </div>
    <div class="navc" style="height:48px"></div>
    <input type="text" placeholder="随乐而起，有感而发" class="nav" v-model="content" />
    <mt-button
      style=" position: fixed;
  bottom: 0;width:60px;right:0px;font-size:12px"
      size="small"
      type="primary"
      plain
      @click="sendMsg"
    >发表评论</mt-button>
    <div class="navc" style="height:48px"></div>
  </div>
</template>

<script>
export default {
  name: "Plun",
  data() {
    return {
      plun: {},
      more: {},
      count: "",
      content: "",
      limit: 12
    };
  },
  methods: {
    fanhu() {
      this.$router.go(-1);
    },
    sendMsg() {
      this.$axios
        .post(
          `http://www.young1024.com:666/comment?t=1&type=0&id=${this.$store.state.cursong.id}`
          ,`content=${this.content}`
        )
        .then(result => {
             this.loadMsgByPage();
        })
        .catch(err => {console.log(err)});
    },
    loadMsgByPage(limit) {
      this.$axios
        .get(
          `http://www.young1024.com:666/comment/music?id=${this.$store.state.cursong.id}&limit=${this.limit}`
        )
        .then(result => {
          console.log(result);
          this.more = result.data.comments;
          this.limit += 10;
        })
        .catch(err => {});
    }
  },

  mounted() {
    this.$axios
      .get(
        `http://www.young1024.com:666/comment/music?id=${this.$store.state.cursong.id}`
      )
      .then(result => {
        console.log(result);
        this.count = result.data.total;
        this.plun = result.data.hotComments;
        console.log(this.plun);
      })
      .catch(err => {});
      this.loadMsgByPage();
  }
};
</script>

<style scoped>
body,
html {
  background-color: #eee;
}

#plun {
  padding: 0 14px;
}
.top {
  width: 100%;
  height: 60px;
  line-height: 50px;
  color: #111;
  font-size: 17px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 4 4 #999;
  position: fixed;
  left: 0;
  top: 0;
}

.top div:nth-child(2) {
  width: 80%;
  text-align: center;
}

.top div:nth-child(1),
.top div:nth-child(3),
.top div:nth-child(4) {
  padding: 0 4%;
  font-size: 20px;
}

.mainsong {
  height: 60px;
  background-color: #fff;
  padding: 14px 0;
}

.margint {
  margin-top: 12px;
  border-top: 6px #eee solid;
}

.songone {
  display: flex;
}

.songone > div:nth-child(1) {
  width: 90%;
  display: flex;
}

.songone span {
  font-size: 20px;
  margin-left: 40%;
}

.songonet {
  margin: 4% 0px;
}

.songone .zj {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-right: 4%;
}

.right {
  color: #999;
}

.plunone {
  display: flex;
}

.plunone > div:nth-child(1) {
  width: 10%;
}
.plunone > div:nth-child(2) {
  width: 60%;
  margin-left: 8%;
}
.mainplun {
  margin-top: 12px;
  background-color: #fff;
}

.right {
  text-align: right;
}
.nav {
  position: fixed;
  bottom: 0;
  display: flex;
  outline: none;
  border: 0;
  width: 100%;
  height: 48px;
  padding: 6px 11px 0 11px;
  left: 0;
  font-size: 14px;
  background-color: #fff;
}
</style>