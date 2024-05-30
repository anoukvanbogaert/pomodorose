<template>
    <!-- <HomePage /> -->
    <TimerView />
</template>

<script>
// import HomePage from './components/HomePage.vue';
import TimerView from './components/TimerView.vue';

export default {
    name: 'App',
    components: {
        // HomePage,
        TimerView,
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
