<template>
    <div class="relative w-1/3">
        <i
            class="relative z-10 block w-6 h-6 mx-auto overflow-hidden transition-transform duration-100 transform rounded-full"
            :class="badgeClasses"
        />
        <hr
            v-if="!last"
            class="absolute top-0 z-0 w-full my-2 duration-200 border-4 transition-color progress-bar"
            :class="hrClasses"
        />
        <div class="p-2 whitespace-no-wrap" :class="textClasses" v-text="$t(`steps.${step}`)" />
    </div>
</template>

<script>
    export default {
        props: {
            step: {
                type: String,
                required: true,
            },
            first: {
                type: Boolean,
                default: false,
            },
            last: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            isActive() {
                return this.$store.getters.isScreenActive(this.step);
            },
            isComplete() {
                return this.$store.getters.isScreenComplete(this.step);
            },
            badgeClasses() {
                if (this.isComplete) {
                    return ['bg-blue-600'];
                }

                if (this.isActive) {
                    return ['bg-blue-400', 'scale-150'];
                }

                return ['bg-gray-500'];
            },
            hrClasses() {
                if (this.isComplete) {
                    return ['border-blue-600'];
                }

                return ['border-gray-500'];
            },
            textClasses() {
                if (!this.isActive) {
                    return ['hidden', 'sm:block'];
                }
            },
        },
    };
</script>

<style>
    hr.progress-bar {
        right: -50%;
    }
</style>
