<template>
    <component
        class="flex items-center my-1 text-gray-100 rounded-full"
        :class="interactiveClasses"
        @click="clickHandler"
        :is="tagName"
    >
        <img class="flex-shrink-0 overflow-hidden rounded-full" :src="avatar" :draggable="false" alt="" />

        <p class="p-1 ml-2 text-black" :class="nameClasses" v-text="person" />
    </component>
</template>

<script>
    export default {
        props: {
            person: {
                type: String,
                required: true,
            },
            interactive: {
                type: Boolean,
                default: true,
            },
        },

        computed: {
            avatar() {
                return require(`~/assets/images/people/${this.person}.jpg`);
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
        p {
            display: block;
        }
    }
</style>
