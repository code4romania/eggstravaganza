<template>
    <div class="flex h-12">
        <p
            class="flex items-center text-sm"
            v-show="$store.state.score.games > 0"
            v-html="$t('scores', $store.state.score)"
        />
    </div>
</template>
