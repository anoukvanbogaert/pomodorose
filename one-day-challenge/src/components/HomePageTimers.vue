<template>
    <div class="timers">
        <div class="timer work-timer">
            <div class="side-div" />
            <div class="timer-box">
                <div class="hours-box">
                    <div class="arrow-box">
                        <v-icon color="primary" icon="mdi-chevron-up" size="x-large"></v-icon>
                    </div>
                    <div class="timer-value">00</div>
                    <div class="arrow-box">
                        <v-icon color="primary" icon="mdi-chevron-down" size="x-large"></v-icon>
                    </div>
                </div>
                <div class="timer-value">:</div>
                <div class="minutes-box">
                    <div class="arrow-box">
                        <v-icon color="primary" icon="mdi-chevron-up" size="x-large"></v-icon>
                    </div>
                    <div class="timer-value">30</div>
                    <div class="arrow-box">
                        <v-icon color="primary" icon="mdi-chevron-down" size="x-large"></v-icon>
                    </div>
                </div>
            </div>
            <div class="timer-label work-label side-div">WORK</div>
        </div>
        <div class="timer break-timer">
            <div class="timer-label break-label side-div">BREAK</div>
            <div class="timer-value">05:00</div>
            <div class="side-div" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePageTimers',
};
</script>
<style scoped>
.timer-box {
    display: flex;
    align-items: center;
}

.arrow-box {
    margin-top: -1rem;
    margin-bottom: -1rem;
}
</style>
