<template>
    <div class="container">
        <h1 class="mb-4 text-xl font-semibold leading-tight lg:mb-8 lg:text-3xl xl:text-4xl" v-text="$t('title')" />
        <p v-for="(line, index) in $t('description')" :class="index > 0 ? 'mt-6' : ''" :key="index" v-text="line" />

        <div class="flex flex-col flex-1 mt-12">
            <client-only>
                <div class="flex flex-col mb-5 md:flex-row md:justify-between">
                    <base-share />
                    <game-score />
                </div>
            </client-only>
            <div
                class="relative flex flex-col items-center justify-center flex-1 w-full p-4 overflow-hidden bg-gray-100 border rounded-lg shadow-md"
            >
                <client-only>
                    <game-progress-tracker :steps="[]" />
                    <transition-fade>
                        <component :is="currentScreenComponent" />
                    </transition-fade>
                </client-only>

                <noscript class="px-4 py-32 text-center lg:py-48" v-text="$t('noscript')" />
            </div>
        </div>

        <section class="grid gap-10 mt-20 lg:grid-cols-3">
            <h1
                class="text-lg font-semibold leading-tight lg:text-xl xl:text-2xl lg:col-span-3"
                v-text="$t('subtitle')"
            />

            <base-card
                title="Rămâi în continuare în siguranță în lupta cu epidemia de COVID-19"
                url="https://cetrebuiesafac.ro/"
                label="Ce trebuie să fac"
                icon="info"
            />

            <base-card
                title="Susține organizațiile implicate activ în lupta cu epidemia de COVID-19"
                url="https://rohelp.ro/ro/"
                label="RoHelp.ro"
                icon="support"
            />

            <base-card
                title="Îți place ce facem? Cumpără un “ou virtual” pentru Code for Romania"
                url="https://code4.ro/ro/doneaza/"
                label="Donează"
                icon="donate"
            />
        </section>
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
