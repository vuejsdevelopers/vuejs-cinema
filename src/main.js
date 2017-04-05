import Vue from 'vue';
import './style.scss';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                    Movie list
                </div>`
    },
    'movie-filter': {
      template: `<div id="movie-filter">
                    Movie filter
                </div>`
    }
  }
});
