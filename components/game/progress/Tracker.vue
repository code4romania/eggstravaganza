<template>
    <aside class="flex justify-center w-full max-w-2xl py-8 text-center">
        <game-progress-step
            v-for="(step, index) in steps"
            :key="index"
            :step="step"
            :first="index === 0"
            :last="index === steps.length - 1"
        />
    </aside>
</template>

<script>
    export default {
        computed: {
            steps() {
                return this.$store.state.screens;
            },
        },
    };
</script>
