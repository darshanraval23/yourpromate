<template>
     <div class="col-12 background-overlay">
        <header>
          <nav>
            <div class="nav-new-proj">
              <a href="#" class="active">New Project</a>
              <a href="">In Progress Project</a>
              <a href="">Completed Project</a>
            </div>
          </nav>
        </header>
        <MasterComponent></MasterComponent>
      </div>
</template>
<script>
import MasterComponent from '../MasterComponent.vue'
export default {
    components:{
      MasterComponent,
    }
}
</script>