<template>
  <div id="bj">
    <div class="paly">
      <div class="top">
        <div class="iconfont icon-shouqi_m" style="font-size: 20px;" @click="fanhu"></div>
        <div class="tit">{{this.$store.state.cursong.name}}</div>
        <div class="iconfont icon-paixingbang"></div>
      </div>
      <div class="aut">
        <div style="color:#fff;width:100%">{{this.$store.state.cursong.ar[0].name}}</div>
      </div>
      <div class="center">
        <div class="centerT">
          <div class="guangpan" :class="[this.$store.state.status?'round':'round2']">
            <img :src="this.$store.state.cursong.al.picUrl" alt />
          </div>
        </div>
        <div class="caozuot">
          <div class="iconfont icon-xin2"></div>
          <div class="iconfont icon-xiazai"></div>
          <div class="iconfont icon-dian"></div>
          <div class="iconfont icon-pinglun" @click="goplun"></div>
          <div class="iconfont icon-caozuo_vertical" @click="quxiao()"></div>
        </div>
      </div>
      <div class="caozuo">
        <div class="iconfont icon-xin"></div>
        <div class="iconfont icon-bofangzanting1" @click="prev"></div>
        <div
          class="iconfont"
          :class="[this.$store.state.status?'icon-zanting':'icon-bofang']"
          @click="play"
          style="font-size:54px;"
        ></div>
        <!-- <div class="iconfont icon-bofang" style="font-size:54px;"></div> -->
        <div class="iconfont icon-bofangzanting" @click="next"></div>
        <div class="iconfont icon-shouqi"></div>
      </div>
    </div>
    <div class="mainsong">
      <div class="songone" v-for="(item,index) in songl" :key="index" @click="playsong(item)">
        <div>
          <div class="zj">{{ index+1 }}</div>
          <div>
            <div>{{ item.name }}</div>
            <div class="auth" style="font-size:12px;color:#111;">{{ item.ar[0].name }}</div>
          </div>
        </div>
        <div>
          <span class="iconfont icon-quxiao" @click="delsong(index)"></span>
          <span class="iconfont icon-caozuo_vertical"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var index = 0;
var mark = true;

export default {
  name: "Play",
  data() {
    return {
      songl: {}
    };
  },
  methods: {
    fanhu() {
      this.$router.go(-1);
    },
    goplun() {
      this.$router.push({
        name: "Plun"
      });
    },
    play() {
      var status = !this.$store.state.status;
      this.$store.commit("setstatus", status);
     
    },
    playsong(song) {
      this.$store.commit("setcursong", song);
    },
    next() {
      index++;
      var cur = this.$store.state.cursong;
      var list = this.$store.state.songlist;
      for (var i = 0; i < list.length; i++) {
        if (cur.id == list[i].id) {
          index = i;
          break;
        } else {
          index = list.length - 1;
        }
      }
      this.$store.commit("setcursong", this.$store.state.songlist[index + 1]);
    },
    prev() {
      index--;
      var cur = this.$store.state.cursong;
      var list = this.$store.state.songlist;
      for (var i = 0; i < list.length; i++) {
        if (cur.id == list[i].id) {
          index = i;
          break;
        } else {
          if (index < 0) index = list.length - 1;
        }
      }
      this.$store.commit("setcursong", this.$store.state.songlist[index - 1]);
    },
    quxiao() {
      if (mark) {
        this.songl = this.$store.state.songlist;
        mark = false;
      } else {
        this.songl = "";
        mark = true;
      }
    },
    delsong(index) {
      this.$store.state.songlist.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#bj {
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573130291102&di=42705523163a4b6daea5cb49cf243c92&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D24bd57cbc5fdfc03e52debbce10faba2%2Fb8389b504fc2d562697471d8e11190ef76c66c83.jpg);
  background-size: cover;
}
.paly {
  padding: 0px 24px;
}
@keyframes playing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes stoping {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.mainsong {
  height: 400px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  border-radius: 6px 6px 0 0;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
}
.songone {
  width: 100%;
  display: flex;
  text-align: center;
}
.songone > div:nth-child(1) {
  width: 120%;
  display: flex;
}
.songone span {
  font-size: 20px;
  margin-left: 40%;
}
.songone {
  margin: 4% 0px;
}
.songone .zj {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 4%;
}
.round {
  animation: playing 10s linear infinite;
}

.round2 {
  animation: stoping 1s;
}
.aut {
  display: flex;
  text-align: center;
}
.top {
  height: 88px;
  line-height: 88px;
  color: #fff;
  font-size: 17px;
  display: flex;
}

.top div {
  flex: 1;
}

.top div:nth-child(2) {
  text-align: center;
}
.tit {
  white-space: nowrap;
}
.center {
  height: 500px;
}
.centerT {
  height: 400px;
  display: flex;
}
.guangpan {
  width: 260px;
  height: 260px;
  border-radius: 300px;
  text-align: center;
  margin-left: 12%;
  margin-top: 26%;
}
.guangpan img {
  width: 100%;
  height: 100%;
  border-radius: 300px;
}
.top div:nth-child(3) {
  text-align: right;
  font-size: 20px;
}

.caozuo,
.caozuot {
  height: 100px;
  line-height: 120px;
  display: flex;
  color: #fff;
}

.caozuo div,
.caozuot > div {
  flex: 1;
  text-align: center;
  font-size: 20px;
}
</style>
