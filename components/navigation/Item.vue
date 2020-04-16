<template>
    <li>
        <a
            class="focus:outline-none focus:shadow-outline"
            :class="aClassList"
            :href="item.url"
            :target="item.newTab ? '_blank' : false"
            :rel="item.newTab ? 'noopener' : false"
            v-text="item.title"
        />
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
            simple: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            aClassList() {
                if (this.simple) {
                    return ['hover:underline'];
                }

                return ['py-1', 'lg:px-3', 'hover:bg-gray-100'];
            },
        },
    };
</script>
