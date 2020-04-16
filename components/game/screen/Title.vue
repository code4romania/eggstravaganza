<template>
    <h1 class="mb-3 text-lg font-semibold text-blue-500 sm:text-xl" v-text="title" />
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
        },
    };
</script>
