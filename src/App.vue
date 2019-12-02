<template>
  <div id="app">
    <audio id="player" :src="`https://music.163.com/song/media/outer/url?id=${this.$store.state.cursong.id}.mp3`" controls autoplay></audio>
    <transition name="fade" mode="out-in">
    <router-view/> 
    </transition>
  </div>
</template>

<script>
export default {
    name:'app',
    mounted() {
      var that = this;
      var index = 0
      document.getElementById('player').addEventListener('ended',function(){
        var cur = that.$store.state.cursong;
         var list = that.$store.state.songlist;

         var nextflag = 0
         for(var i=0;i<list.length;i++){
           if(cur.id == list[i].id){
             nextflag = i;
           }
         }
        that.$store.commit('setcursong',that.$store.state.songlist[nextflag+1])
      })
    },
   
    watch: {
      playstatus(e){
        //console(e)
        if(e){
            document.getElementById('player').play();
            
        }else{
            document.getElementById('player').pause();
        }
      }
    },
    computed: {
      playstatus(){
        return this.$store.state.status 
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
.fade-enter-active, .fade-leave-active-active{
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
audio{
  height: 12px;position: fixed;
  width: 340px;
  left: 0;bottom: 56px;
  left: 4%;
  opacity: .9;
  z-index: 2;
}
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none
}
li{
  list-style: none;
}
img{width: 100%;height: 100%;}
</style>
