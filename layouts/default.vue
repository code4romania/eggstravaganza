<template>
    <div>
        <div class="flex flex-col min-h-screen">
            <navigation-header />
            <Nuxt class="flex flex-col flex-1 py-16 xl:pt-20 md:text-lg" />
        </div>
        <navigation-footer />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                htmlAttrs: {
                    lang: this.$i18n.locale,
                },
            };
        },
    };
</script>
