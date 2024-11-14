<template>
    <component :="linkProps(to)">
        <slot></slot>
    </component>
</template>

<script>
import { Validator } from '@bigbighu/cms-utils'
export default {
    name: 'Link',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        linkProps(url) {
            // 判断当前链接是否为外部链接
            if (Validator.isExternal(url)) return {
                is: 'a',
                href: url,
                target: '_blank'
            }
            else return {
                is: 'router-link',
                to: url
            }
        }
    },
};
</script>