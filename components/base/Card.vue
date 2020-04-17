<template>
    <aside class="flex flex-col overflow-hidden bg-white border rounded-lg shadow-md">
        <div class="flex items-center flex-1 px-4 py-5 sm:p-6">
            <div
                class="flex-shrink-0 w-12 h-12 p-3 text-blue-500 bg-blue-100 rounded-md"
                v-html="require(`!svg-inline-loader!~/assets/svg/icons/${this.icon}.svg`)"
            />
            <h1 class="flex-1 ml-5 lg:text-base" v-text="title" />
        </div>

        <a
            class="flex items-center justify-end p-4 text-base font-semibold text-blue-600 transition-colors duration-150 bg-gray-100 sm:px-6 hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
            target="_blank"
            rel="noopener"
            :href="url"
        >
            <span v-text="label" />
            <i
                class="inline-block w-5 ml-2"
                v-html="require('!svg-inline-loader!~/assets/svg/icons/arrow-right.svg')"
            />
        </a>
    </aside>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
        },
    };
</script>
