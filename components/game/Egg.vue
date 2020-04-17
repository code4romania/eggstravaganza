<template>
    <div class="relative flex items-center" :class="flexDirection">
        <svg viewBox="0 0 76 100" class="ease-in-out-quint" :class="eggnimation">
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" :id="instanceGradientName">
                    <stop stop-opacity="0.5" offset="0" />
                    <stop stop-opacity="0.2" offset="0.5" />
                    <stop stop-opacity="0.0" offset="1" />
                </linearGradient>
            </defs>
            <g :transform="inverted ? 'scale(1,-1) translate(0,-100)' : ''">
                <path d="M38,100c-20,0-45-21-35.85-60.3S38,0,38,0,64.69.37,73.87,39.7,57,100,38,100Z" :fill="color" />
                <path
                    d="M38,100c-20,0-45-21-35.85-60.3S38,0,38,0,64.69.37,73.87,39.7,57,100,38,100Z"
                    :fill="`url(#${instanceGradientName})`"
                />
                <transition name="showCrack">
                    <path v-if="cracked" :d="pattern" fill="#FFF" />
                </transition>
            </g>
        </svg>

        <game-avatar v-if="person" class="my-4" :person="person" :interactive="false" />
    </div>
</template>

<script>
    import math from '~/mixins/math.js';

    export default {
        props: {
            inverted: {
                type: Boolean,
                default: false,
            },
            cracked: {
                type: Boolean,
                default: false,
            },
            color: {
                type: String,
                required: true,
            },
            person: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                showCrack: false,
            };
        },
        computed: {
            impact() {
                return this.$store.state.impact;
            },
            eggnimation() {
                let cls = [];

                if (this.inverted) {
                    cls.push('transition-all', 'duration-100');

                    if (this.impact) {
                        cls.push('mt-16 lg:mt-20');
                    } else {
                        cls.push('mb-16 lg:mb-20');
                    }
                }

                return cls;
            },
            instanceGradientName() {
                return 'eggdient-' + this._uid;
            },
            pattern() {
                this.cracked; // reactivity hack

                let patterns = [
                    'M38.58,2.8v.12l-.32,9.57,0,.74-.15.46-2.7,8.14-.45,9V31l-1,9.18L34.39,50l-.72-9.63v-.21l.81-9.24.26-9.39v-.42l.11-.39,2.48-8.41.1-8.6L37.25,0a4.34,4.34,0,0,1,1.29,0l0,2.49Z',
                    'M38.67.1l1.51,3.31,1.67,3.93.12.29-.13.29-1.13,2.59.3,3.16,0,.14,0,.12-.93,2.86-.08.26-.22.06-4.57,1.3-.35,2.77,0,.24-.18.07L30.91,23.1l.52,3.17v.1l0,.08-1.2,2.64,1.63,3.77,0,.09-.05.08-1.78,2.48L30.88,39v0l0,0-2.39,2.3L30.79,39l-.91-3.48,0-.05,0,0,1.7-2.49L29.86,29.2l0-.09,0-.11L31,26.31,30.37,23l-.05-.26.22-.09,3.71-1.74.3-2.86,0-.28.24-.08,4.55-1.45.75-2.5-.39-3.21,0-.17.07-.17,1-2.49L39.17,4.1,37.18,0A3.87,3.87,0,0,1,38.67.1Z',
                    'M36.16,2.48,36.43.15A10.73,10.73,0,0,1,39,.11l-.63,3.23-.53,8.46,4.36,7.66.21.36v.41l-.28,9.2L43,38.35v.11l0,.09-2.31,9.69,1.84-9.83-1.28-8.8v-.15l-.15-8.77-4.85-7.34L36,12.93v-.72l.16-9.36V2.73Z',
                    'M38.37,0,37.23,5,36.31,9.3l.58,3,0,.21v.21L36.7,16.6l.42,3,2.57,1.75.14.09v.35L40,25.26l2.1,2.1.12.12,0,.31-.36,4,.65,3.26,0,.13,0,.11-1,4.5,1,3V43L42,47.16,43.28,50l-1.35-2.78v-.06l.47-4.23-1-3,0-.09,0-.11.93-4.56L41.62,32l0-.1v-.11l.29-3.84L39.79,26l-.1-.09v-.28l-.2-3.36L36.89,20.7l-.12-.07-.05-.32-.52-3.46,0-.14v-.17l.18-3.82-.65-3.14-.07-.34.07-.36.94-4.75L37.55,0Z',
                ];

                return patterns[math.randomInt(0, patterns.length)];
            },
            flexDirection() {
                return this.inverted ? 'flex-col-reverse' : 'flex-col';
            },
        },
    };
</script>

<style lang="postcss">
    .showCrack-enter {
        opacity: 0;
    }

    .showCrack-enter-active {
        transition-property: opacity;
        transition-delay: 100ms;
        transition-duration: 25ms;
    }

    .showCrack-enter-to {
        opacity: 1;
    }
</style>
