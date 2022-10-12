<template>
<section class="col-12 side-nav">
    <div class="circle1"></div>
    <SearchboxComponent />
    <div class="web-development">
        <TaskProgressComponent :projectdata="this.projecdetails" @projectselect="openprojectdetailsmodel" @timeline="openprojecttimeline" @assignproject ="openassignproject" />
        <ApplyfilterComponent />
    </div>
</section>
<ProjectdetailsComponent :projectdetails ="getprojectbyid"/>
<AssignprojectComponent :projectid="projectid"></AssignprojectComponent>
<TimelinmodalComponent :recodes="projectDetails" ></TimelinmodalComponent>
</template>
<script>
import { mapGetters } from "vuex";
import SearchboxComponent from '../slider/SearchboxComponent.vue'
import ApplyfilterComponent from '../ApplyfilterComponent.vue'
import TaskProgressComponent from '../TaskProgressComponent.vue'
import ProjectdetailsComponent from '../slider/ProjectdetailsComponent.vue'
import AssignprojectComponent from '../slider/AssignprojectComponent.vue'
import TimelinmodalComponent from '../slider/TimelinmodalComponent.vue'
export default {
    data(){
        return{
            projectid: '',
            getprojectbyid: '',
            projectDetails: ''
        }
    },
    methods:{
        openprojectdetailsmodel(id){
            this.getprojectbyid = this.$store.getters.getprojectsbyid(id)
            this.$store.state.slidertrogale.projectdetails = true            
        },
        openassignproject(id){
            this.projectid = id
            this.$store.state.slidertrogale.assignproject = true            
        },
        openprojecttimeline(id){
            this.projectid = id
            this.$store.state.slidertrogale.timeline = true            
            this.projectDetails = this.$store.getters.getprojectsbyid(id)
            console.log(this.projectDetails)
        }
    },
    components: { 
        SearchboxComponent,
        ApplyfilterComponent,
        TaskProgressComponent,
        ProjectdetailsComponent,
        AssignprojectComponent,
        TimelinmodalComponent
    }, 
    created(){
        this.$store.dispatch('getprojects')
    },
    computed:{
        ...mapGetters({projecdetails: 'getprojectsdetails'})
    },
    getters:{

    }  
}
</script>
