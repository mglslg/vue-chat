// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';

//清除浏览器缓存中的数据
localStorage.clear();

Vue.config.devtools = true;
new Vue({
    el: 'body',
    components: { App },
    store: store
});

