<template>
    <div class="app-wrapper">
        <!-- 左侧菜单 -->
        <Sidebar class="sidebar-container"></Sidebar>
        <!-- navbar -->
        <Navbar></Navbar>
    </div>
</template>


<script>
import { Sidebar, Navbar, AppMain } from '@/components'
export default {
    name: 'Layout',
    components: {
        Sidebar,
        Navbar,
        AppMain
    },
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.app-wrapper {
    &:after {
        content: "";
        display: table;
        clear: both;
    }

    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
</style>