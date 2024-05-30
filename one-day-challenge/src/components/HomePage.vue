<template>
    <div class="homepage">
        <div class="header">
            <div class="background" />
        </div>
        <HomePageTimers />
        <div class="start-button">
            <button>START</button>
        </div>
    </div>
</template>

<script>
import HomePageTimers from './HomePageTimers.vue';
export default {
    name: 'HomePage',
    components: {
        HomePageTimers,
    },
};
</script>

<style>
.homepage {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.background {
    width: 295px;
    height: 295px;
    background-color: white;
    border-radius: 50%;
    margin-bottom: 3rem;
}

.timers {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}
.side-div {
    width: 2.5rem;
}

.timer {
    width: 100%;
    height: 7rem;
    background: white;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 50, 0.25);
}

.timer-label {
    color: #66baff;
    font-size: 1.75rem;
    font-weight: 800;
    writing-mode: vertical-rl;
    text-orientation: mixed;
}
.break-label {
    transform: rotate(180deg);
}

.timer-value {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
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
