<template>
    <button
        class="inline-flex justify-center px-6 py-2 mx-1 text-base border border-transparent rounded-md focus:outline-none focus:shadow-outline-blue"
        :class="buttonTypeClasses"
        @click="$emit('click')"
        v-text="label"
        :disabled="disabled"
    />
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            primary: {
                type: Boolean,
                required: false,
                default: false,
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        computed: {
            buttonTypeClasses() {
                if (this.primary) {
                    if (this.disabled) {
                        return ['text-green-100', 'bg-green-300', 'cursor-not-allowed'];
                    }

                    return [
                        'text-green-100',
                        'bg-green-600',
                        'hover:bg-green-800',
                        'focus:border-green-900',
                        'active:bg-green-800',
                    ];
                }

                if (this.disabled) {
                    return ['text-blue-200', 'bg-blue-100', 'cursor-not-allowed'];
                }

                return ['text-blue-700', 'bg-blue-100', 'hover:bg-blue-200', 'focus:border-blue-300', 'active:bg-blue-300'];
            },
        },
    };
</script>
