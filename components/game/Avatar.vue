<template>
    <component
        class="relative flex items-center my-1 text-gray-100 rounded-full"
        :title="person.name"
        :class="interactiveClasses"
        @click="clickHandler"
        :is="tagName"
    >
        <img
            class="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full lg:w-16 lg:h-16"
            :src="avatar"
            :draggable="false"
            alt=""
        />

        <div
            class="px-2 py-1 ml-2 text-base leading-tight text-left text-black rounded sm:whitespace-no-wrap name"
            :class="nameClasses"
        >
            <span class="block font-semibold">{{ person.name }}</span>
            <span class="block text-gray-700">{{ person.city }}</span>
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

                return ['hidden', 'bg-white', 'border', 'text-sm', 'absolute', 'left-0', 'pointer-events-none'];
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
    @screen md {
        .tooltip:hover,
        .tooltip:focus {
            div {
                display: block;
            }
        }
    }

    .tooltip .name {
        margin-left: 115%;
    }
</style>
