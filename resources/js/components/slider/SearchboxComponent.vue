<template>
<div class="search-box">
    <input class="search-input" type="text" placeholder="Search here Project..." @keyup="getresualt" v-model="searchItem" />
    <button class="search-btn">
        <i class="fas fa-search" aria-hidden="true"></i>
    </button>
</div>
</template>

<script>
import {
    watch
} from '@vue/runtime-core'
export default {
    data() {
        return {
            searchItem: ''
        }
    },
    methods: {
        getresualt() {
            if (/[^a-zA-Z]/.test(this.searchItem)) {
                this.$notify({
                    type: 'error',
                    text: 'There is no space or spatial character allowed in search projects!'
                })
            } else {
                this.$store.dispatch('getprojectsbyname', this.searchItem)
            }
        }
    },
}
</script>
