<template>
    <game-main />
</template>

<script>
    import meta from '~/mixins/meta.js';

    export default {
        head() {
            return meta({
                titleTemplate: null,
                title: this.$t('title'),
                description: this.$t('description'),
            });
        },
    };
</script>
