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

                let cls = ['py-1', 'lg:px-3', 'lg:ml-4', 'rounded'];

                if (typeof this.item.color === 'undefined' || this.item.color !== 'green') {
                    cls.push('hover:bg-gray-200', 'focus:bg-gray-200');
                } else {
                    cls.push('text-white', 'bg-green-400', 'hover:bg-green-500', 'focus:bg-green-500');
                }

                return cls;
            },
        },
    };
</script>
