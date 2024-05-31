<template>
    <div class="timer-container">
        <div class="background-text" :style="backgroundTextStyle">{{ backgroundText }}</div>

        <div class="timer-top">
            <ProgressCircle
                :totalTime="totalTime"
                :initialTime="initialTime"
                :isWorkSession="isWorkSession"
            />
            <CircleBackGround :isWorkSession="isWorkSession" />
        </div>
        <div class="timer-bottom">
            <div class="formatted-time">{{ formattedTime }}</div>
            <div class="back-home" @click="goToHome">
                <v-icon color="accent" icon="mdi-home"></v-icon>
                <div class="back-home-text">back to home</div>
            </div>
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
    emits: ['go-home'],
    data() {
        return {
            totalTime: this.workTime,
            initialTime: this.workTime,
            isWorkSession: true,
            workTimeStored: parseInt(localStorage.getItem('workTime'), 10) || this.workTime,
            breakTimeStored: parseInt(localStorage.getItem('breakTime'), 10) || this.breakTime,
        };
    },
    computed: {
        formattedTime() {
            const hours = String(Math.floor(this.totalTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((this.totalTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(this.totalTime % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        },
        backgroundText() {
            return this.isWorkSession
                ? 'WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK'
                : 'KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK KITKAT BREAK ';
        },
        backgroundTextStyle() {
            return this.isWorkSession ? {} : { backgroundColor: '#8FC4EF' };
        },
    },
    methods: {
        goToHome() {
            this.$emit('go-home');
        },

        startCountdown() {
            this.timerInterval = setInterval(() => {
                if (this.totalTime > 0) {
                    this.totalTime -= 1;
                } else {
                    if (this.isWorkSession) {
                        this.totalTime = this.breakTime;
                    } else {
                        this.totalTime = this.workTime;
                    }

                    this.isWorkSession = !this.isWorkSession;
                    this.initialTime = this.totalTime;
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
.timer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.background-text {
    position: absolute;
    top: 0;
    left: 0;
    margin: -1.5rem;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
    z-index: 0;
    overflow-wrap: break-word;
}
.timer-top {
    display: flex;
    align-items: center;
    padding: 3rem;
    padding-top: 147.5px;
    z-index: 1;
}
.timer-bottom {
    background-color: white;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}

.formatted-time {
    font-size: 5rem;
    font-weight: 900;
    padding-top: 1rem;
    color: #ff66ba;
}
.back-home {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: -1rem;
}

.back-home-text {
    font-size: 1.25rem;
    color: #66baff;
    margin-left: 0.25rem;
}
</style>
