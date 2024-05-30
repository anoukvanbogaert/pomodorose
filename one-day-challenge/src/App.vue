<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomePage />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/HomePage.vue';

export default {
    name: 'App',
    components: {
        HomePage,
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
