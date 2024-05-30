<template>
    <div class="timer-top">
        <ProgressCircle :totalTime="totalTime" :initialTime="initialTime" />
        <CircleBackGround />
    </div>
    <div class="timer-bottom">
        <div class="formatted-time">{{ formattedTime }}</div>
        <div class="back-home" @click="goToHome">
            <v-icon color="accent" icon="mdi-home"></v-icon>
            <div class="back-home-text">back to home</div>
        </div>
    </div>
</template>
<script>
import CircleBackGround from './CircleBackGround.vue';
import ProgressCircle from './ProgressCircle.vue';

export default {
    props: {
        workTime: {
            type: Number,
            required: true,
        },
        breakTime: {
            type: Number,
            required: true,
        },
    },
    components: {
        CircleBackGround,
        ProgressCircle,
    },
    data() {
        return {
            totalTime: this.workTime,
            initialTime: 0,
        };
    },
    computed: {
        formattedTime() {
            const hours = String(Math.floor(this.totalTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((this.totalTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(this.totalTime % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        },
    },
    methods: {
        getRandomTime() {
            const maxSeconds = 900;
            return maxSeconds;
        },

        goToHome() {
            this.$emit('go-home');
        },

        startCountdown() {
            this.timerInterval = setInterval(() => {
                if (this.totalTime > 0) {
                    this.totalTime -= 1;
                    this.initialTime += 1;
                } else {
                    clearInterval(this.timerInterval);
                }
            }, 1000);
        },
    },
    mounted() {
        this.startCountdown();
    },
    beforeUnmount() {
        clearInterval(this.timerInterval);
    },
};
</script>
<style scoped>
.timer-top {
    height: 60%;
    display: flex;
    align-items: center;
}
.timer-bottom {
    background-color: white;
    padding: 0 !important;
    height: 40%;
}

.formatted-time {
    font-size: 4rem;
    font-weight: 900;
    padding-top: 1rem;
    color: #ff66ba;
}
.back-home {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.back-home-text {
    font-size: 1.25rem;
    color: #66baff;
    margin-left: 0.25rem;
}
</style>
