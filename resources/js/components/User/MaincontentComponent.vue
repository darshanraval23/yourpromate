<template>
<section class="col-12 side-nav">
    <!-- {{this.$store.getters.getprojectsdetails}} -->
    <!-- {{this.projecdetails}} -->
    <!-- {{getprojectsdetails}} -->
    <div class="circle1"></div>

    <SearchboxComponent />
    <div class="web-development">
        <!-- {{this.projecdetails}} -->
        <TaskProgressComponent :projectdata="this.projecdetails"/>
        <ApplyfilterComponent />
    </div>
</section>
</template>
<script>
import { mapGetters, mapActions  } from "vuex";
import SearchboxComponent from '../slider/SearchboxComponent.vue'
import ApplyfilterComponent from '../ApplyfilterComponent.vue'
import TaskProgressComponent from '../TaskProgressComponent.vue'

export default {
    data(){
        row: this.projecdetails
    },
    components: { 
        SearchboxComponent,
        ApplyfilterComponent,
        TaskProgressComponent,
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
