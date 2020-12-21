import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 使用 import 配合 webpackChunkName 注释进行动态懒加载
const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/Index.vue');
const Article = () => import(/* webpackChunkName: "article" */ '@/pages/article/Index.vue');

const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/article', name: 'Article', component: Article },
];

// 使用 history 模式保持 spa url 的美观性
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
