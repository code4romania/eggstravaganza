<template>
    <footer class="text-blue-100 bg-blue-500">
        <div class="container grid items-end row-gap-10 col-gap-6 py-12 lg:py-24 lg:grid-cols-2">
            <div class="flex flex-wrap">
                <ul class="w-full py-5 md:w-1/2 md:px-3 md:py-0" v-for="(menu, menuIndex) in menus" :key="menuIndex">
                    <li class="mb-4 font-bold tracking-wide" v-text="menu.name" />

                    <navigation-item v-for="(item, itemIndex) in menu.items" :key="itemIndex" :item="item" simple />
                </ul>
            </div>
            <div class="tracking-wide lg:text-right">
                <navigation-logo url="https://code4.ro/ro/" class="mb-4" gray />

                <p v-html="$t('footer.copy', { year })" />
                <p v-text="$t('footer.tagline')" />
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        computed: {
            year() {
                return new Date().getFullYear();
            },
        },
        data() {
            return {
                menus: [
                    {
                        name: 'Ecosistem CoVid-19',
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
                                url: 'https://datelazi.ro/',
                                title: 'Date La Zi',
                            },
                            {
                                url: 'https://diasporahub.ro/',
                                title: 'Diaspora Hub',
                            },
                        ],
                    },
                    {
                        name: 'Linkuri utile',
                        items: [
                            {
                                url: 'https://code4.ro/ro/',
                                title: 'Code for Romania',
                            },
                            {
                                url: 'https://eepurl.com/glIHNP ',
                                title: 'Abonează-te la newsletter',
                            },
                            {
                                url: 'https://code4.ro/ro/codul-de-conduita/',
                                title: 'Codul de conduită',
                            },
                            {
                                url: 'https://code4.ro/ro/doneaza/',
                                title: 'Donează',
                            },
                        ],
                    },
                ],
            };
        },
    };
</script>











