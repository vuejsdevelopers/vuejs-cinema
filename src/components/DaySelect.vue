<template>
    <div id="day-select">
        <ul class="days">
            <li v-bind:class="{ day: true, active: isActive(day) }" v-for="day in days" v-on:click="selected = day">
                {{ formatDay(day) }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: this.$moment(),
                days: [0, 1, 2, 3, 4, 5, 6 ].map(num => this.$moment().add(num, 'days'))
            };
        },
        methods: {
            formatDay(raw) {
                if (raw.isSame(this.$moment(), 'day')) {
                    return 'Today';
                } else {
                    return raw.format('ddd DD/MM');
                }
            },
            isActive(day) {
                return day.isSame(this.selected, 'day');
            }
        }
    }
</script>
