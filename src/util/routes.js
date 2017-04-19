import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default [
  { path: '/', component: Overview, name: 'home' },
  { path: '/movie', component: Detail, name: 'movie' },
  { path: '*', redirect: { name: 'home' } }
];
