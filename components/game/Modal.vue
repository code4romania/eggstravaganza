<template>
    <div class="absolute inset-0 z-50 flex items-end px-4 pb-6 sm:pb-10 sm:justify-center">
        <div class="absolute inset-0 bg-gray-500 opacity-75" />

        <div
            class="w-full px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-sm sm:p-6"
        >
            <div
                class="flex items-center justify-center w-12 h-12 p-2 mx-auto rounded-full"
                :class="badgeColor"
                v-html="badgeIcon"
            />

            <p
                class="mt-3 text-lg font-semibold leading-tight text-center text-black sm:mt-5 md:text-xl"
                v-text="title"
            />

            <div class="flex justify-center w-full mt-5 rounded-md">
                <base-button @click="reset" :label="$t('tryAgain')" primary />
            </div>

            <base-share class="justify-center mt-2" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                success: 'playerHasWon',
            }),
            badgeColor() {
                if (this.success) {
                    return ['text-green-600', 'bg-green-100'];
                }

                return ['text-red-600', 'bg-red-100'];
            },
            badgeIcon() {
                return require(`!svg-inline-loader!~/assets/svg/icons/${this.success ? 'smile' : 'frown'}.svg`);
            },
            title() {
                return this.success ? this.$t('state.won') : this.$t('state.lost');
            },
        },
        methods: mapActions({
            reset: 'reset',
        }),
    };
</script>
