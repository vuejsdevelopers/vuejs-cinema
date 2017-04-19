import Vue from 'vue';
import './style.scss';

import Overview from './components/Overview.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import { checkFilter } from './util/bus';
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } });

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    moment,
    day: moment(),
    bus
  },
  components: {
    Overview
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
  }
});
