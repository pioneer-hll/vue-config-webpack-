import Vue from 'vue';

import App from './App.vue';

//��vue-router���ɵ������Ŀ��
import vueRouter from 'vue-router';

//��vueRouter�󶨵�vue������
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
//ע��mint-ui
import  mintui from 'mint-ui';

//��vue��ȫ��ʹ��
Vue.use(mintui);

//ע��mui��css��ʽ
import '../statics/mui/css/mui.css';

new Vue({
    el:'#app',
    router:router,
    render:c => c(App),

})

