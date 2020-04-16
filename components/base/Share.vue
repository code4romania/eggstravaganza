<template>
    <div class="flex items-center justify-between">
        <span class="mr-3 text-base" v-text="$t('shareOn')" />
        <button
            @click="popup(platform.uri)"
            v-for="platform in platforms"
            :key="platform.id"
            class="w-6 h-6 mx-1 my-2 rounded-full md:w-8 md:h-8 hover:opacity-75 focus:outline-none focus:shadow-outline"
            v-html="require(`!svg-inline-loader!~/assets/svg/icons/${platform.id}.svg`)"
        />
    </div>
</template>

<script>
    export default {
        computed: {
            platforms: () => [
                {
                    id: 'facebook',
                    uri: 'https://www.facebook.com/sharer/sharer.php?u=',
                },
                {
                    id: 'twitter',
                    uri: 'https://twitter.com/intent/tweet?url=',
                },
                {
                    id: 'linkedin',
                    uri: 'http://www.linkedin.com/shareArticle?mini=true&url=',
                },
            ],
        },
        methods: {
            popup(sharer) {
                let popupHeight = 550,
                    popupWidth = 780,
                    posY = Math.floor((window.outerHeight - popupHeight) / 2),
                    posX = Math.floor((window.outerWidth - popupWidth) / 2);

                let popup = window.open(
                    sharer + encodeURIComponent(location.href),
                    'social',
                    `width=${popupWidth},height=${popupHeight},left=${posX},top=${posY},location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1`
                );

                if (popup) {
                    popup.focus();
                }
            },
        },
    };
</script>
