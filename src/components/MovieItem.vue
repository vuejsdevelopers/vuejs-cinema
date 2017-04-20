<template>
    <div class="movie">
        <div class="movie-col-left">
            <router-link v-bind:to="{ name: 'movie', params: { id: movie.imdbID } }">
                <img v-bind:src="movie.Poster">
            </router-link>
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <router-link v-bind:to="{ name: 'movie', params: { id: movie.imdbID } }">
                    <h2>{{ movie.Title }}</h2>
                </router-link>
                <span class="movie-rating">{{ movie.Rated }}</span>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'movie' ],
    }
</script>
