<template>
    <div class="BreadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <!-- 判断是否为最后一页 最后一页不能跳转-->
                <span v-if="index === levelList.length - 1">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "BreadCrumb",
    components: {
    },
    data() {
        return {
            levelList: []
        }
    },
    // 路由发生变化的时候就进行监听，所有绑定到this上的属性都能进行监听
    watch: {
        $route() {
            this.getBreadCrumb()
        }
    },
    created() {
        console.log(this.$route.matched, "router");
    },
    methods: {
        getBreadCrumb() {
            //获取嵌套路由
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title && !item.meta.breadcrumb)
            console.log(matched, "matched");
            // 判断当前的路由是否为首页
            const first = matched[0]
            if (!this.isHome(first)) matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)

        },
        isHome(route) {
            return route.meta.title.trim() === '首页'
        },
        handleLink(item) {
            this.$router.push(item.push)//阻止默认事件 
        }
    }
}
</script>