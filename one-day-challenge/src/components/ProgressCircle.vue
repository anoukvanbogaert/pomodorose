<template>
    <svg class="progress-circle" viewBox="0 0 100 100">
        <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#FF66BA"
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
    },
    computed: {
        circumference() {
            return 2 * Math.PI * 45;
        },
        strokeDashOffset() {
            if (this.initialTime === 0) return this.circumference;
            const progress = 1 - this.initialTime / this.totalTime;
            return this.circumference * progress;
        },
    },
};
</script>

<style scoped>
.progress-circle {
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 295px;
    height: 295px;
}
</style>
