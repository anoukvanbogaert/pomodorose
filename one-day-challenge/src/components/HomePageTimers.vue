<template>
    <div class="timers">
        <HomePageTimerValue
            :initialHours="workHours"
            :initialMinutes="workMinutes"
            label="WORK"
            @update-hours="updateWorkHours"
            @update-minutes="updateWorkMinutes"
        />
        <HomePageTimerValue
            :initialHours="breakHours"
            :initialMinutes="breakMinutes"
            label="BREAK"
            @update-hours="updateBreakHours"
            @update-minutes="updateBreakMinutes"
        />
    </div>
</template>

<script>
import HomePageTimerValue from './HomePageTimerValue.vue';

export default {
    name: 'HomePageTimers',
    components: {
        HomePageTimerValue,
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
        updateWorkHours(hours) {
            this.workHours = hours;
            this.$emit(
                'set-time',
                this.workHours,
                this.workMinutes,
                this.breakHours,
                this.breakMinutes
            );
        },
        updateWorkMinutes(minutes) {
            this.workMinutes = minutes;
            this.$emit(
                'set-time',
                this.workHours,
                this.workMinutes,
                this.breakHours,
                this.breakMinutes
            );
        },
        updateBreakHours(hours) {
            this.breakHours = hours;
            this.$emit(
                'set-time',
                this.workHours,
                this.workMinutes,
                this.breakHours,
                this.breakMinutes
            );
        },
        updateBreakMinutes(minutes) {
            this.breakMinutes = minutes;
            this.$emit(
                'set-time',
                this.workHours,
                this.workMinutes,
                this.breakHours,
                this.breakMinutes
            );
        },
    },
};
</script>

<style scoped>
.timers {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}
</style>
