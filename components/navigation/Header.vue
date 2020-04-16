<template>
    <nav class="lg:shadow-none" :class="{ 'shadow-lg': open }">
        <div class="container flex flex-wrap items-center justify-between py-5 border-b">
            <navigation-logo url="https://code4.ro/ro/" />

            <navigation-burger :open="open" @click="open = !open" />

            <navigation-menu :open="open" :items="items" />
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                items: [
                    {
                        url: '/',
                        title: 'Link 1',
                    },
                    {
                        url: '/',
                        title: 'Link 2',
                    },
                    {
                        url: '/',
                        title: 'Link 3',
                    },
                ],
            };
        },
    };
</script>
