<template>
<aside class="col-2 main-add" id="clickeddown" :style="{'display' : $store.state.slidertrogale.sidebarslider? 'block':'none'}">
    <div class="addnew-proj" @click="$store.state.isModalVisible = !$store.state.isModalVisible">
        <div class="proj">
            <i class="fa-sharp fa-solid fa-plus" set=""></i>
            <a href="#">Add New Project</a>
        </div>
        <p>Quick Access</p>
        <a href="#">View Archive List</a>
    </div>
    <div class="sliderpin " @click="fixedsidebar">
        <i class="fa-solid fa-thumbtack " :style="{'color': isSliderfixed ? '#ff8d4f': ''}"></i>
    </div>
</aside>
</template>
<style scoped>
.sliderpin{
cursor: pointer;
/* padding: 20px; */
}
</style>
<script>
export default {
    data() {
        return {}
    },
    computed:{
      isSliderfixed(){
        return this.$store.state.slidertrogale.isaddprojectfixed
      }
    },
    methods: {
      fixedsidebar(){
        this.$store.state.slidertrogale.isaddprojectfixed = !this.$store.state.slidertrogale.isaddprojectfixed
      }
    },
    props: {
        toggelsidebar: String,
    }
}
</script>
