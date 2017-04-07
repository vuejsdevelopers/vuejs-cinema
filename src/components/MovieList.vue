<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{ movie.movie.Title }}</div>
    </div>
</template>
<script>
    import genres from '../util/genres';

    export default {
        props: [ 'genre', 'time', 'movies' ],
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
