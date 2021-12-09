<template>
  <div>
    <el-form
      v-loading="loading"
      element-loading-text="正在登录..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :rules="rules"
      ref="loginForm"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          auto-complete="false"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
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
      <el-button type="primary" style="width: 100%" @click="submitLogin"
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
        // code: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      loading: false
    };
  },
  // created(){
  //   this.submitLogin();
  // },
  methods: {
    submitLogin() {
      // let _this = this;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.postRequest("/customer/login", this.loginForm).then((res) => {
            if (res) {
              this.loading = false;
              // 存储用户token
              const tokenStr = res.result.token;
              window.sessionStorage.setItem("tokenStr", tokenStr);
              // 跳转页面
              this.$router.replace("/home");
            }
          });
        } else {
          this.$message.error("请输入用户名和密码");
        }
      });
    },
  },
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
.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}
</style>