<template>
    <div class="timer">
        <div :class="label === 'BREAK' ? 'timer-label side-div break-label' : 'side-div'">
            {{ label === 'WORK' ? '' : label }}
        </div>
        <div class="timer-box">
            <div class="hours-box">
                <div class="arrow-box">
                    <v-icon
                        color="primary"
                        icon="mdi-chevron-up"
                        size="x-large"
                        @click="incrementHours"
                    ></v-icon>
                </div>
                <div class="timer-value">{{ formattedHours }}</div>
                <div class="arrow-box">
                    <v-icon
                        color="primary"
                        icon="mdi-chevron-down"
                        size="x-large"
                        @click="decrementHours"
                    ></v-icon>
                </div>
            </div>
            <div class="timer-value">:</div>
            <div class="minutes-box">
                <div class="arrow-box">
                    <v-icon
                        color="primary"
                        icon="mdi-chevron-up"
                        size="x-large"
                        @click="incrementMinutes"
                    ></v-icon>
                </div>
                <div class="timer-value">{{ formattedMinutes }}</div>
                <div class="arrow-box">
                    <v-icon
                        color="primary"
                        icon="mdi-chevron-down"
                        size="x-large"
                        @click="decrementMinutes"
                    ></v-icon>
                </div>
            </div>
        </div>
        <div :class="label === 'BREAK' ? 'side-div' : 'timer-label side-div'">
            {{ label === 'WORK' ? label : '' }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageTimerValue',
    props: {
        initialHours: {
            type: Number,
            required: true,
        },
        initialMinutes: {
            type: Number,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            hours: this.initialHours,
            minutes: this.initialMinutes,
        };
    },
    computed: {
        formattedHours() {
            return String(this.hours).padStart(2, '0');
        },
        formattedMinutes() {
            return String(this.minutes).padStart(2, '0');
        },
    },
    methods: {
        incrementHours() {
            this.hours = (this.hours + 1) % 24;
        },
        decrementHours() {
            this.hours = (this.hours - 1 + 24) % 24;
        },
        incrementMinutes() {
            this.minutes = (this.minutes + 1) % 60;
        },
        decrementMinutes() {
            this.minutes = (this.minutes - 1 + 60) % 60;
        },
    },
};
</script>

<style scoped>
.timer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    width: 100%;
    height: 7rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 50, 0.25);
}

.timer-box {
    display: flex;
    align-items: center;
}

.arrow-box {
    margin-top: -1rem;
    margin-bottom: -1rem;
    cursor: pointer;
}

.timer-value {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
}

.side-div {
    width: 2.5rem;
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
</style>
