<template>
    <div>
        <HomePage v-if="currentPage === 'home'" @start="handleStart" />
        <TimerView v-else :workTime="workTime" :breakTime="breakTime" @go-home="goToHome" />
    </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import TimerView from './components/TimerView.vue';

export default {
    name: 'App',
    components: {
        HomePage,
        TimerView,
    },
    data() {
        return {
            currentPage: 'home',
            workTime: 0,
            breakTime: 0,
        };
    },
    methods: {
        handleStart(workHours, workMinutes, breakHours, breakMinutes) {
            this.workTime = workHours * 3600 + workMinutes * 60;
            this.breakTime = breakHours * 3600 + breakMinutes * 60;
            this.currentPage = 'timer';
        },
        goToHome() {
            this.currentPage = 'home';
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    padding: 3rem;
    height: 100vh;
    background-color: #ffa4d6;
}
</style>
