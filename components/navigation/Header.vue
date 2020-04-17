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
                        url: 'https://rohelp.ro/ro/',
                        title: 'RoHelp',
                    },
                    {
                        url: 'https://cetrebuiesafac.ro/adaptare-si-rezistenta',
                        title: 'Ce trebuie să fac',
                    },
                    {
                        url: 'https://eepurl.com/glIHNP',
                        title: 'Newsletter',
                    },
                    {
                        url: 'https://code4.ro/ro/doneaza/',
                        title: 'Donează',
                        color: 'green',
                    },
                ],
            };
        },
    };
</script>
