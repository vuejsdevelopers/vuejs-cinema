<template>
    <div id="overview">
        <day-select v-bind:selected="day"></day-select>
        <div class="main">
            <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies" v-bind:day="day"></movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>
<script>
    import MovieList from './MovieList.vue';
    import MovieFilter from './MovieFilter.vue';
    import DaySelect from './DaySelect.vue';

    export default {
        props: [ 'genre', 'time', 'movies', 'day' ],
        components: {
            MovieList,
            MovieFilter,
            DaySelect
        },
    }
</script>
