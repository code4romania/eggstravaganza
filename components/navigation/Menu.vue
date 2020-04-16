<template>
    <ul class="w-full" :class="ulClassList">
        <navigation-item v-for="(item, index) in items" :key="index" :item="item" :simple="simple" />
    </ul>
</template>

<script>
    export default {
        props: {
            open: {
                type: Boolean,
                required: true,
            },
            items: {
                type: Array,
                required: true,
            },
            simple: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            ulClassList() {
                let cls = [];

                if (!this.simple) {
                    cls = [
                        'items-center',
                        'justify-end',
                        'col-span-4',
                        'pt-10',
                        'lg:pt-0',
                        'lg:w-auto',
                        'lg:flex',
                        'lg:col-span-9',
                        'lg:col-start-4',
                    ];

                    if (!this.open) {
                        cls.push('hidden');
                    }
                }

                return cls;
            },
            hamburgerPath() {
                return this.open
                    ? 'M10 8.6L2.9 1.5 1.5 2.9 8.6 10l-7.1 7.1 1.4 1.4 7.1-7.1 7.1 7.1 1.4-1.4-7.1-7.1 7.1-7.1-1.4-1.4L10 8.6z'
                    : 'M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z';
            },
        },
    };
</script>
