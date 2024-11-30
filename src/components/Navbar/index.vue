<template>
    <div class="navbar">
        <Hamburger></Hamburger>
        <!-- 面包屑 -->
        <BreadCrumb></BreadCrumb>
    </div>
</template>

<script>
import Hamburger from '../Hamburger/index.vue'
import BreadCrumb from '../BreadCrumb/index.vue'
export default {
    name: "Navbar",
    components: {
        Hamburger,
        BreadCrumb
    },
    data() {
        return {

        }
    }
}
</script>