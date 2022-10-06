<template>
<div class="hero-page">
    <SidebarComponent></SidebarComponent>
    <div class="col-12 background-overlay" @click="this.$store.commit('closemodal')" >
        <HeserComponent></HeserComponent>
        <MaincontentComponent></MaincontentComponent>
    </div>
</div>
    <TimelinmodalComponent/>
    <AssignprojectComponent/>
    <ProjectdetailsComponent/>
</template>
<script>
import TimelinmodalComponent from './slider/TimelinmodalComponent.vue'
import SidebarComponent from './User/layout/SidebarComponent.vue'
import HeserComponent from './User/layout/HederComponent.vue'
import AssignprojectComponent from './slider/AssignprojectComponent.vue'
import ProjectdetailsComponent from './slider/ProjectdetailsComponent.vue'
import MaincontentComponent from './User/MaincontentComponent.vue'
import {useRouter} from 'vue-router'
export default {
    components: {
        HeserComponent,
        SidebarComponent,
        MaincontentComponent,
        TimelinmodalComponent,
        ProjectdetailsComponent,
        AssignprojectComponent
    },
    computed: {

    },
    methods: {

    },
    created() {
       
        let router = useRouter();
        if (!sessionStorage.getItem('token')) {
            router.push('/signin');
        }
    }
}
</script>

<style>

</style>
