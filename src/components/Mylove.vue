<template>
  <div id="mysong" :style="{backgroundImage:`url(${songxq.coverImgUrl})`}">
    <div class="top">
      <div class="iconfont icon-shouqi_m" @click="fanhu"></div>
      <div>歌单</div>
      <div class="iconfont icon-caozuo_vertical"></div>
      <div class="iconfont icon-paixingbang"></div>
    </div>
    <div class="maint">
      <div class="maintopo">
        <div class="mtop">
          <div>
            <div class="iconfont icon-xinaixin" style="font-size: 54px;text-align: right;margin-right:20%"></div>
            <div style="text-align: right;margin:6%"> <span><img src="" alt=""></span> <span style="width:80%">我的详细</span> <span class="iconfont icon-right" @click="gome" style="text-align: right;"></span></div>
          </div>
          <div>
            <div>我喜欢的音乐</div>
            <div><img :src="songxq.coverImgUrl" alt="" style="width:100px;"></div>
          </div>
        </div>
        <div class="btop">
          <div>
            <div class="iconfont icon-pinglun"></div>
            <span>评论</span>
          </div>
          <div>
            <div class="iconfont icon-fenxiang"></div>
            <span>分享</span>
          </div>
          <div>
            <div class="iconfont icon-xiazai"></div>
            <span>下载</span>
          </div>
          <div>
            <div class="iconfont icon-duoxuan"></div>
            <span>多选</span>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="maintop">
        <div>
          <span class="iconfont icon-shipin" @click="playall(songone)"></span>
          <span>播放全部</span>
        </div>
        <div class="sel">
          <span class="iconfont icon-duoxuan"></span>
          <span>多选</span>
        </div>
      </div>
      <div class="mainsong">
        <div class="songone" v-for="(item,index) in songone" :key="index" @click="playsong(item,index)">
          <div @click="playxq()">
            <div class="zj">
                <img v-lazy="item.al.picUrl" alt="">
            </div>
            <div>
              <div> {{ item.name }}  </div>
              <div class="auth"> {{ item.ar[0].name }} </div>
            </div>
          </div>
          <div>
            <span class="iconfont icon-shipin"></span><span class="iconfont icon-caozuo_vertical">
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="nav">
      <div>
        <div class="iconfont icon-diantai iconb"></div>发现
      </div>
      <div>
        <div class="iconfont icon-shipin iconb"></div>视频
      </div>
      <div>
        <div
          class="iconfont icon-local iconb"
          style="color:#fff;width: 32px;height: 32px;background-color: #FD402D;border-radius: 30px;line-height: 32px;margin-left:30%"
        ></div>我的
      </div>
      <div>
        <div class="iconfont icon-shequ iconb"></div>云村
      </div>
      <div>
        <div class="iconfont icon-wode iconb"></div>账号
      </div>
    </div>
    <div class="navc" style="height:48px">   
    </div>
  </div>
</template>

<script>
export default {
    name:'Mylove',
    data() {
        return {
            songid:this.$route.params.id,
            songxq:{},
            songone:{},
            auth:{},
        }
    },
    mounted() {
        // console.log(this.songid)
        this.$axios.get('http://www.young1024.com:666/playlist/detail?id='+this.songid).then((result) => { 
        this.songxq = result.data.playlist
        console.log(result)
        this.songone = result.data.playlist.tracks;
        this.auth = result.data.playlist.tracks.ar;
        // console.log(this.songxq.tracks) 
    });
    },
    methods: {
        gome(){
          this.$router.push({
                name:'Me'
            })
        },
        fanhu(){
            this.$router.go(-1)
        },
        playxq(){
            this.$router.push({
                name:'Play'
            })
        },
        playsong(song,index){
          // this.$store.commit('setlist',Array(this.songone[index]))
          this.$store.commit('setcursong',song);
         this.$store.state.songlist.push(this.songone[index]);
        },
        playall(list){
          console.log(list)
          this.$store.commit('setlist',list);
          // alert(this.$store.state.songlist.length)
          this.$store.commit('setcursong',list[0])
        },
    },
};
</script>


<style scoped>

/* #mysong {
  background-image: url(http://c.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17f0d1c48b4090f603738de91a.jpg);
  
} */

img[lazy=loading] {
  width: 40px;
  height: 40px;
  margin: auto;
}
.maint{
    padding: 0;margin: 0;
}
.top {
  height: 60px;
  line-height: 50px;
  color: #fff;
  font-size: 17px;
  display: flex;
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

.mtop {
  height: 120px;
  display: flex;
}
.mtop > div {
  flex: 1;
  color: #fff;
}
.btop {
  margin: 10px 0;
  display: flex;
  height: 42px;
}
.auth{
    font-size: 12px;
    color: #666
}
.btop > div {
  flex: 1;
  text-align: center;
  color: #fff;
}
.btop > div > div {
  font-size: 22px;
}

.main {
  background-color: #fff;
  padding: 0 12px;
  border-radius: 16px 16px 0 0;
}
.maintop {
  padding-top: 14px;
  display: flex;
}
.maintop div {
  flex: 1;
}
.maintop div span {
  margin-left: 4%;
}
.maintop div.sel {
  text-align: right;
}
.mainsong {
  margin-top: 10px;
}
.songone {
  display: flex;
}
.songone > div:nth-child(1) {
  width: 80%;
  display: flex;
}
.songone span {
  font-size: 20px;
  margin-left: 40%;
}
.songone{
    margin: 4% 0px;
}
.songone .zj {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 4%;
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
</style>>