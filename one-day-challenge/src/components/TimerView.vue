<template>
    <div class="timer-top"><CircleBackGround /></div>
    <div class="timer-bottom">
        <div>time</div>
        <div>back to home button</div>
    </div>
</template>
<script>
import CircleBackGround from './CircleBackGround.vue';
export default {
    components: {
        CircleBackGround,
    },
};
</script>
<style scoped>
.timer-top {
    height: 60vh;
    display: flex;
    align-items: center;
}
.timer-bottom {
    background-color: white;
    padding: 0 !important;
    height: 40vh;
}
</style>
