<template>
    <svg class="progress-circle" viewBox="0 0 100 100">
        <circle
            cx="50"
            cy="50"
            r="45"
            :stroke="progressColor"
            stroke-width="5"
            fill="transparent"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashOffset"
            transform="rotate(-90 50 50)"
        />
    </svg>
</template>

<script>
export default {
    props: {
        totalTime: {
            type: Number,
            required: true,
        },
        initialTime: {
            type: Number,
            required: true,
        },
        isWorkSession: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        circumference() {
            return 2 * Math.PI * 45;
        },
        strokeDashOffset() {
            if (this.totalTime === 0) return this.circumference;

            const progress = 1 - this.totalTime / this.initialTime;

            return this.circumference * progress;
        },
        progressColor() {
            return this.isWorkSession ? '#FF66BA' : '#66BAFF';
        },
    },
};
</script>

<style scoped>
.progress-circle {
    position: absolute;
    top: 147.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 295px;
    height: 295px;
}
</style>
