<template>
  <div>
    <el-form ref="form" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item>
        <el-input
          type="text"
          auto-complete="false"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          auto-complete="false"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" class="loginRemember"
        >请仔细阅读并同意<span>《免责声明》</span></el-checkbox
      > -->
      <el-button type="primary" style="width: 100%;" @click="submitLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
    submitLogin(){
      let _this = this;
      // if(this.loginForm.username===''||this.loginForm.password===''){
      //   alert('账号密码不能为空！')
      // }else{
        this.$axios({
          method:'post',
          url:'/jubaopen/customer/login',
          data:_this.loginForm
        }).then(res=>{
          console.log(res.data);
          _this.userToken = res.data.result.token;
          _this.$router.push('/home')

        }).catch(error=>{
          alert('错误')
          console.log(error);
        })
      }
    // }
  }
};
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 0 auto 40px auto;
  text-align: center;
}
.loginRemember{
    text-align: left;
    margin: 0 0 15px 0;
}
</style>