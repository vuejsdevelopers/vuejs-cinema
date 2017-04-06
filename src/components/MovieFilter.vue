<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
        </div>
    </div>
</template>
<script>
    import genres from '../util/genres';
    import CheckFilter from './CheckFilter.vue';

    export default {
        data() {
            return {
                genres
            };
        },
        methods: {
            checkFilter(category, title, checked) {
                this.$emit('check-filter', category, title, checked);
            }
        },
        components: {
            CheckFilter
        }
    }
</script>
