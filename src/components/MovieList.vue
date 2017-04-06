<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
    </div>
</template>
<script>
    import genres from '../util/genres';

    export default {
        data() {
            return {
                movies: [
                    { title: 'Pulp Fiction', genre: genres.CRIME },
                    { title: 'Home Alone', genre: genres.COMEDY },
                    { title: 'Austin Powers', genre: genres.COMEDY }
                ]
            }
        },
        props: [ 'genre', 'time' ],
        methods: {
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                } else {
                    return this.genre.find(genre => movie.genre === genre);
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        }
    }
</script>
