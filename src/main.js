import Vue from 'vue';
import './style.scss';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                    <div v-for="movie in movies">{{ movie }}</div>
                </div>`,
      data: {
        movies: [
          { title: 'Pulp Fiction' },
          { title: 'Home Alone' },
          { title: 'Austin Powers' }
        ]
      }
    },
    'movie-filter': {
      template: `<div id="movie-filter">
                    Movie filter
                </div>`
    }
  }
});
