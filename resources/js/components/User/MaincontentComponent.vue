<template>
<section class="col-12 side-nav">
    <!-- {{this.$store.getters.getprojectsdetails}} -->
    <!-- {{this.projecdetails}} -->
    <!-- {{getprojectsdetails}} -->
    <div class="circle1"></div>

    <SearchboxComponent />
    <div class="web-development">
        <!-- {{this.projecdetails}} -->
        <TaskProgressComponent :projectdata="this.projecdetails" @projectselect="openprojectdetailsmodel"/>
        <ApplyfilterComponent />
    </div>
</section>
<ProjectdetailsComponent />

</template>
<script>
import { mapGetters, mapActions  } from "vuex";
import SearchboxComponent from '../slider/SearchboxComponent.vue'
import ApplyfilterComponent from '../ApplyfilterComponent.vue'
import TaskProgressComponent from '../TaskProgressComponent.vue'
import ProjectdetailsComponent from '../slider/ProjectdetailsComponent.vue'

export default {
    data(){
        return{
            // row: this.projecdetails
        }
    },
    methods:{
        openprojectdetailsmodel(data){
            console.log('model open',data)
            this.$store.state.slidertrogale.projectdetails = true
            
        }
    },
    components: { 
        SearchboxComponent,
        ApplyfilterComponent,
        TaskProgressComponent,
        ProjectdetailsComponent,
    }, 
    created(){
        this.$store.dispatch('getprojects')
        // ...mapGetters()
        // console.log(store.getters.getprojectsdetails)
        // this.$store.gatter('')
    },
    computed:{
        ...mapGetters({projecdetails: 'getprojectsdetails'})
        // ...mapGetters(['getprojectsdetails'])
    },
    getters:{

    }  
}
</script>
