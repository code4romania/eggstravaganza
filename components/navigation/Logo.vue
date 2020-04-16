<template>
    <a
        class="inline-block w-32 transition-opacity duration-150 hover:opacity-75 focus:outline-none focus:shadow-outline"
        v-html="logo"
        target="_blank"
        rel="noopener"
        :href="url"
    />
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                required: true,
            },
            gray: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            logo() {
                let suffix = this.gray ? '-gray' : '';

                return require(`!svg-inline-loader!~/assets/svg/code4romania${suffix}.svg`);
            },
        },
    };
</script>
