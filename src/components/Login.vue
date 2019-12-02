<template>
  <div id="login">
    <div id="top">手机号登陆</div>
    <div id="main">
      <div class="tilte">未注册手机号登录后自动创建账号</div>
      <form>
        <input type="text" v-model="name" name="phone" placeholder="+86 137666" />
        <input type="password" v-model="pwd" name="pwd" placeholder="请输入密码" />
        <input type="submit" class="log" @click="handleLogin" value="登录" />
      </form>
    </div>
  </div>
</template>


<script>
export default {
    
  name: "login",
  data() {
    return {
      name: "",
      pwd: "",
      token:""
    };
  },
  methods: {
    handleLogin() {
      this.$axios
        .get(
          `http://www.young1024.com:666/login/cellphone?phone=${this.name}&password=${this.pwd}`
        )
        .then(result => {
          console.log(result);
          if(result.status === 200){
            this.token = result.data.profile
            localStorage.setItem('user',this.token)
              this.$router.push({name:'index'})
          }
        }).catch(err => {
          alert('该用户不存在')
        });
       
    }
  }
};
</script>

<style scoped>
#login {
  padding: 10px 14px;
}
#top {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
#main {
  margin-top: 30px;
  text-align: center;
}
#main .tilte {
  text-align: left;
  font-size: 12px;
  color: #999;
  line-height: 50px;
}
input {
  width: 90%;
  height: 40px;
  outline: none;
  border: 0;
  border-bottom: 1px rgb(224, 222, 222) solid;
}
#main .log {
  width: 90%;
  height: 32px;
  background-color: #fd402d;
  border-radius: 20px;
  border: 0;
  outline: none;
  margin-top: 40px;
  color: #fff;
  cursor: pointer;
}
</style>