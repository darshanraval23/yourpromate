<template>
<section class="col-12 side-nav">
    <div class="circle1"></div>
    <SearchboxComponent />
    <div class="web-development">
        <TaskProgressComponent :projectdata="this.projecdetails" @projectselect="openprojectdetailsmodel" @opentimeline="openprojecttimeline" />
        <ApplyfilterComponent />
    </div>
</section>
<ProjectdetailsComponent :projectdetails ="getprojectbyid"/>
<AssignprojectComponent :projectid="projectid"></AssignprojectComponent>

</template>
<script>
import { mapGetters, mapActions  } from "vuex";
import SearchboxComponent from '../slider/SearchboxComponent.vue'
import ApplyfilterComponent from '../ApplyfilterComponent.vue'
import TaskProgressComponent from '../TaskProgressComponent.vue'
import ProjectdetailsComponent from '../slider/ProjectdetailsComponent.vue'
import AssignprojectComponent from '../slider/AssignprojectComponent.vue'

export default {
    data(){
        return{
            projectid: '',
            getprojectbyid: ''
        }
    },
    methods:{
        openprojectdetailsmodel(id){
            this.getprojectbyid = this.$store.getters.getprojectsbyid(id)
            // this.projectid = data
            this.$store.state.slidertrogale.projectdetails = true            
        },
        openprojecttimeline(id){
            
            // console.log('open model',id)
            // console.log('main projectid',projectid)
            // console.log('main getprojectbyid',getprojectbyid)
            this.projectid = id
            this.$store.state.slidertrogale.assignproject = true            


        }
    },
    components: { 
        SearchboxComponent,
        ApplyfilterComponent,
        TaskProgressComponent,
        ProjectdetailsComponent,
        AssignprojectComponent
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
