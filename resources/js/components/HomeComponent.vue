<template>
{{$store.state.name}}
{{$store.state.toggelsidebar}}

<div class="hero-page">
    <SidebarComponent></SidebarComponent>
    <!-- <SidebarpopupComponent/> -->
    <div class="col-12 background-overlay">
        <HeserComponent></HeserComponent>
        <MasterComponent></MasterComponent>
    </div>
    <!-- <h1>home</h1> -->
</div>
    <TimelinmodalComponent/>
    <AssignprojectComponent/>
    <ProjectdetailsComponent/>
</template>

<script>
import TimelinmodalComponent from './User/TimelinmodalComponent.vue'
import SidebarComponent from './User/layout/SidebarComponent.vue'
import HeserComponent from './User/layout/HederComponent.vue'
import MasterComponent from './User/MasterComponent.vue'
import AssignprojectComponent from './User/AssignprojectComponent.vue'
import ProjectdetailsComponent from './User/ProjectdetailsComponent.vue'
// import SidebarpopupComponent from './User/layout/SidebarpopupComponent.vue'
// import vuex from 'vuex'
import {
    useRouter
} from 'vue-router'
export default {
    components: {
        HeserComponent,
        SidebarComponent,
        MasterComponent,
        TimelinmodalComponent,
        ProjectdetailsComponent,
        AssignprojectComponent
        // SidebarpopupComponent
    },
    computed: {
        // getname(){
        //   this.$store.getters.getname
        // }
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
