<template>
    <aside class="col-2 main-add" id="clickeddown" :style="{'display' : $store.state.toggelsidebar? 'block':'none'}">
        <div class="addnew-proj">
          <div class="proj">
            <i class="fa-sharp fa-solid fa-plus" set=""></i>
            <a href="">Add New Project</a>
          </div>
          <p>Quick Access</p>
          <a href="">View Archive List</a>
        </div>
        <i  class="fa-solid fa-thumbtack"></i>
      </aside>  
</template>
<script>
export default {
  data(){
    return{
      // toggelsidebar : false
    }
  },
  state(){

  },
  props:{
    toggelsidebar: String,
  }
}
</script>