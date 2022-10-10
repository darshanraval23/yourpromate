<template>
    <div class="search-box">
            <input class="search-input" type="text" placeholder="Search here Project..." @onchange="getresualt" v-model="serchbyname"/>
            <button class="search-btn">
              <i class="fas fa-search" aria-hidden="true"></i>
            </button>
          </div>
</template>
<script>
import { watch } from '@vue/runtime-core'
export default {
  data(){
    return{
      serchbyname: ''
    }
  },
  methods:{
    // getresualt(){
      // console.log(this.serchbyname)
    // }
    },
}
</script>