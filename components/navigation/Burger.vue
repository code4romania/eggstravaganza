<template>
    <button
        class="flex justify-end col-span-1 p-4 lg:hidden focus:bg-gray-200 focus:outline-none"
        @click="$emit('click')"
    >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path :d="svgButtonPath" />
        </svg>
    </button>
</template>

<script>
    export default {
        props: {
            open: {
                type: Boolean,
                required: true,
            },
        },
        computed: {
            svgButtonPath() {
                return this.open
                    ? 'M10 8.6L2.9 1.5 1.5 2.9 8.6 10l-7.1 7.1 1.4 1.4 7.1-7.1 7.1 7.1 1.4-1.4-7.1-7.1 7.1-7.1-1.4-1.4L10 8.6z'
                    : 'M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z';
            },
        },
    };
</script>
