<template>
    <component
        class="flex items-center my-1 text-gray-100 rounded-full"
        :class="interactiveClasses"
        @click="clickHandler"
        :is="tagName"
    >
        <img class="flex-shrink-0 overflow-hidden rounded-full" :src="avatar" :draggable="false" alt="" />

        <div
            class="px-2 py-1 ml-2 text-base leading-tight text-left text-black whitespace-no-wrap rounded"
            :class="nameClasses"
        >
            <span class="block font-semibold">{{ person.name }}</span>
            <span class="block">{{ person.city }}</span>
        </div>
    </component>
</template>

<script>
    export default {
        props: {
            person: {
                type: Object,
                required: true,
            },
            interactive: {
                type: Boolean,
                default: true,
            },
        },

        computed: {
            avatar() {
                if (!this.person.id) {
                    return require('~/assets/images/people/placeholder.png');
                }

                return require(`~/assets/images/people/${this.person.id}.jpg`);
            },
            tagName() {
                return this.interactive ? 'button' : 'div';
            },
            interactiveClasses() {
                if (!this.interactive) {
                    return false;
                }

                return [
                    '-ml-2',
                    'shadow-solid',
                    'hover:z-10',
                    'hover:shadow-outline',
                    'focus:z-10',
                    'focus:outline-none',
                    'focus:shadow-outline',
                    'tooltip',
                ];
            },
            nameClasses() {
                if (!this.interactive) {
                    return false;
                }

                return ['hidden', 'bg-white', 'border', 'text-sm'];
            },
        },
        methods: {
            clickHandler() {
                if (!this.interactive) {
                    return false;
                }

                this.$emit('click');
            },
        },
    };
</script>

<style lang="postcss">
    .tooltip:hover,
    .tooltip:focus {
        div {
            display: block;
        }
    }
</style>
