<template>
  <div>
    <el-container>
      <el-header>聚宝盆新媒体推广平台</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-submenu index="1" v-for="(item,index) in this.$router.options.routes" :key="index"  v-if="!item.hidden">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item :index="children.path" v-for="(children,indexj) in item.children" :key="indexj"><i class="el-icon-message"></i>{{children.name}}</el-menu-item>
              <!-- <el-menu-item><i class="el-icon-message"></i>选项2</el-menu-item> -->
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
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