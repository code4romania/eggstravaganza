<template>
    <transition
        enter-class="opacity-0"
        enter-active-class="transition-opacity duration-200"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
        mode="out-in"
    >
        <slot />
    </transition>
</template>
