<template>
    <div class="homepage">
        <CircleBackGround />
        <HomePageTimers @set-time="setTime" />
        <div class="start-button">
            <button @click="start">START</button>
        </div>
    </div>
</template>

<script>
import HomePageTimers from './HomePageTimers.vue';
import CircleBackGround from './CircleBackGround.vue';
export default {
    name: 'HomePage',
    components: {
        HomePageTimers,
        CircleBackGround,
    },
    data() {
        return {
            workHours: 0,
            workMinutes: 30,
            breakHours: 0,
            breakMinutes: 5,
        };
    },
    methods: {
        setTime(workHours, workMinutes, breakHours, breakMinutes) {
            this.workHours = workHours;
            this.workMinutes = workMinutes;
            this.breakHours = breakHours;
            this.breakMinutes = breakMinutes;
            localStorage.setItem('workHours', workHours);
            localStorage.setItem('workMinutes', workMinutes);
            localStorage.setItem('breakHours', breakHours);
            localStorage.setItem('breakMinutes', breakMinutes);
        },
        start() {
            const workHours = localStorage.getItem('workHours') || this.workHours;
            const workMinutes = localStorage.getItem('workMinutes') || this.workMinutes;
            const breakHours = localStorage.getItem('breakHours') || this.breakHours;
            const breakMinutes = localStorage.getItem('breakMinutes') || this.breakMinutes;

            this.$emit(
                'start',
                parseInt(workHours, 10),
                parseInt(workMinutes, 10),
                parseInt(breakHours, 10),
                parseInt(breakMinutes, 10)
            );
        },
        updateWorkHours(hours) {
            this.workHours = hours;
        },
        updateWorkMinutes(minutes) {
            this.workMinutes = minutes;
        },
        updateBreakHours(hours) {
            this.breakHours = hours;
        },
        updateBreakMinutes(minutes) {
            this.breakMinutes = minutes;
        },
    },
};
</script>

<style>
.homepage {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 3rem;
}

.start-button {
    margin-top: 3rem;
    width: 100%;
}

.start-button button {
    background: #ffffb4;
    color: #ff66ba;
    border: none;
    border-radius: 1rem;
    padding: 0.75rem 3rem;
    font-size: 1.5rem;
    font-weight: 850;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 50, 0.25);
}
</style>
