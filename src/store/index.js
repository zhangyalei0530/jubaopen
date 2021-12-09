import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        routes:[]
    },
    mutations:{//唯一改变state值的方法同步执行，异步的用actions方法
        initRoutes(state,data){
            state.routes=data;
        }
    }
})