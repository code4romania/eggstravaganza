<template>
    <div class="flex items-center flex-1 w-full mx-auto sm:max-w-md lg:max-w-2xl">
        <div class="flex flex-wrap justify-center p-2 py-10">
            <game-avatar
                v-for="(opponent, index) in opponents"
                @click="setOpponent(opponent)"
                :person="opponent"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
    import math from '~/mixins/math.js';
    import { mapActions } from 'vuex';

    export default {
        computed: {
            opponents() {
                return math.shuffle(this.$store.state.opponents);
            },
        },
        methods: {
            setOpponent(opponent) {
                this.$store.dispatch('setOpponent', opponent);
                this.$ga.event('People', 'Choose', opponent.name);
            },
        },
    };
</script>
