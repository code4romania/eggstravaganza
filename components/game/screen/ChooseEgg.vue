<template>
    <div class="flex flex-wrap items-center flex-1 w-full max-w-3xl mx-auto">
        <div v-for="(color, index) in $store.state.colors" :key="index" class="w-1/2 p-5 md:w-1/3 md:px-10">
            <button
                class="w-full transition-opacity duration-100 hover:opacity-75 focus:outline-none focus:opacity-75"
                @click="setColors(color)"
            >
                <game-egg class="w-full" :color="color" />
            </button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: mapActions({
            setColors: 'setColors',
        }),
    };
</script>
