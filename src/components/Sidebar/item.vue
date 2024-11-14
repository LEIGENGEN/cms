<template>
    <div>
        <!-- -->
    </div>
</template>

<script>
export default {
    name: 'Item',
    // 声明为函数式组件
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
    },
    render(h, context) {
        // 可以调用create,调用虚拟节点
        const { icon, title } = context.props
        const vNodes = []
        const classStr = 'icon-font icon-' + icon
        // 判断icon是否存在
        if (icon) vNodes.push(<i class={classStr} />)
        // 固定写法，通过slot将需要的内容插入
        if (title) vNodes.push(<span slot="title">{{ title }}</span>)
        return vNodes
    },
    mounted() {

    },
    methods: {

    },
};
</script>