<template>
      <div class="hero-page">
      <sidebar></sidebar>
      <!-- <maincontent></maincontent > -->
        <!-- <h1>home</h1> -->
      </div>
</template>
<script>
import sidebar from './User/layout/SidebarComponent.vue'
// import sidebar2 from './User/layout/Sidebar2.vue'
import maincontent from '../components/User/layout/main.vue'
import { useRouter } from 'vue-router'
    export default {
      components: {
        sidebar,
        maincontent
      },
      created(){
        let router = useRouter();
        if(!sessionStorage.getItem('token')){
        router.push('/signin');
      }
      }
    }
</script>
<style>

</style>
