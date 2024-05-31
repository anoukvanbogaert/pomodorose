<template>
    <div class="circle">
        <img v-if="isWorkSession" :src="workImage" alt="Hello" class="work-image" />
        <img v-if="!isWorkSession" :src="breakImage" alt="Hello" class="break-image" />
    </div>
</template>
<script>
export default {
    props: {
        isWorkSession: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            workImage: require('@/assets/work.png'),
            breakImage: require('@/assets/break.png'),
        };
    },
};
</script>
<style scoped>
.circle {
    width: 295px;
    height: 295px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 3rem;
}
.work-image {
    max-width: 60%;
}
.break-image {
    max-height: 60%;
}
</style>
