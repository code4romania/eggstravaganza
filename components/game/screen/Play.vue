<template>
    <div class="flex flex-col justify-center flex-1 w-full p-10">
        <div class="flex flex-col items-center justify-end w-full max-w-xl mx-auto">
            <game-egg
                :color="$store.state.player.color"
                :class="eggClass"
                :cracked="opponentHasWon"
                :avatar="null"
                inverted
            />

            <game-egg
                :color="$store.state.opponent.color"
                :class="eggClass"
                :cracked="playerHasWon"
                :avatar="$store.state.opponent.name"
            />
        </div>

        <div class="flex items-center justify-center w-full mt-12">
            <base-button @click="braceForImpact" :label="$t('knockEgg')" primary :disabled="$store.state.impact" />
        </div>
        <game-modal v-if="isModalOpen" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            eggClass: () => 'w-32 lg:w-40',
            ...mapGetters({
                playerHasWon: 'playerHasWon',
                opponentHasWon: 'opponentHasWon',
                isModalOpen: 'isModalOpen',
            }),
        },
        methods: mapActions({
            braceForImpact: 'braceForImpact',
        }),
    };
</script>
