<template>
    <div v-if="movie" id="detail">
        <movie-item v-bind:movie="movie.movie"></movie-item>
    </div>
</template>
<script>
    import MovieItem from './MovieItem.vue';

    export default {
        props: [ 'movies' ],
        computed: {
            movie() {
                let movie = this.movies.find(movie => movie.id === this.$route.params.id);
                return movie ? movie : null;
            }
        },
        components: {
            MovieItem
        }
    }
</script>
