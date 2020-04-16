<template>
    <div class="container">
        <h1 class="mb-4 text-xl font-normal leading-tight lg:text-3xl xl:text-4xl" v-text="$t('title')" />
        <p v-for="(line, index) in $t('description')" :class="index > 0 ? 'mt-6' : ''" :key="index" v-text="line" />

        <div class="flex flex-col flex-1 mt-12">
            <div class="flex flex-col mb-5 md:flex-row md:justify-between">
                <base-share />
                <game-score />
            </div>
            <div
                class="relative flex flex-col items-center flex-1 w-full p-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg"
            >
                <game-progress-tracker :steps="[]" />
                <transition-fade>
                    <component :is="currentScreenComponent" />
                </transition-fade>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters({
            currentScreenComponent: 'screenComponent',
        }),
    };
</script>
