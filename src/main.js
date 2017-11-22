import Vue from 'vue';

import App from './App.vue';

//将vue-router集成到这个项目来
import vueRouter from 'vue-router';

//将vueRouter绑定到vue对象上
Vue.use(vueRouter);

import  login from './components/account/login.vue'

import  register from './components/account/register.vue'

var router=new vueRouter({
        routes:[
            {path:'/login',component:login},
            {path:'/register',component:register}
        ]
    }
)



import  'mint-ui/lib/style.min.css';
//注册mint-ui
import  mintui from 'mint-ui';

//在vue中全局使用
Vue.use(mintui);

//注册mui的css样式
import '../statics/mui/css/mui.css';

new Vue({
    el:'#app',
    router:router,
    render:c => c(App),

})

