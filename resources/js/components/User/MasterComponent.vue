<template>
<section class="col-12 side-nav">
    <div class="circle1"></div>
    <SearchboxComponent />
    <div class="web-development">
        <TaskProgressComponent  />
        <ApplyfilterComponent />
    </div>
</section>
</template>
<script>
import SearchboxComponent from './SearchboxComponent.vue'
import ApplyfilterComponent from '../ApplyfilterComponent.vue'
import TaskProgressComponent from '../TaskProgressComponent.vue'
export default {
    components: { 
        SearchboxComponent,
        ApplyfilterComponent,
        TaskProgressComponent,
    },
    data(){
      return{
        projectdetails:{
            titale: ''
        }
      }
    },
    methods: {
      //  troggleTimeline(dta  ){
      //   let modalename = {
      //       name: 'timeline'
      //   }
      //     this.$store.commit('troggleme', modalename)
      //       // this.parant.troggleTimeline
      //       console.log(modalename)
      //   }
    }
}
</script>
