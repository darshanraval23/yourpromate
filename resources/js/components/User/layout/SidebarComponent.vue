<template>
    <aside class="col-1">
        <div class="menu-container">
            <div class="logo">
                <a href="">
                    <img src="@/assets/images/CodelinkLogoSymbol.png" alt="">
                </a>
            </div>
            <div class="top-nav">
                <ul id="MiniLeftNav">
                    <li>
                        <a href="#" class="active navtext"><img src="@/assets/images/icons/file2.png" alt="">
                            <span>Project</span>
                        </a>
                    </li>
                    <li>
                        <a class="navtext" href="#">
                            <img src="@/assets/images/icons/group1.png" alt="">
                            <span>Clients</span>
                        </a>
                    </li>
                    <li>
                        <a class="navtext" href="#">
                            <i class="fa-sharp fa-solid fa-file-invoice-dollar"></i>
                            <span>Invoices</span>
                        </a>
                    </li>
                    <li>
                        <a class="navtext" href="#">
                            <img src="@/assets/images/icons/clerk-with-tie1.png" alt="">
                            <span>Employee</span>
                        </a>
                    </li>
                    <li>
                        <a class="navtext" href="#">
                            <img src="@/assets/images/icons/filter1.png" alt="">
                            <span>Leads</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bot-nav">
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-bell"></i>
                        </a>
                        <span>2</span>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-user"></i>
                            <div class="poly6"></div>
                        </a>
                    </li>
                    <li>
                        <span @click="this.$store.dispatch('triggersidebarslider')"><i class="toggel-click1 rotate fa-solid fa-angle-right first" id="sliderbutton" ></i></span>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    <SidebarpopupComponent />
</template>
<script>
import SidebarpopupComponent from './SidebarpopupComponent.vue'
export default {
    data(){
        return{
        // toggelsidebar: false,
        name: 'darshan'
        }
    },
    components: {
        SidebarpopupComponent,
    },
    methods:{
    //   sidebarpopup(){
    //       console.log('vue methode called');
    //       this.$store.commit("troggleme", this.toggelsidebar);
    //        // this.toggelsidebar = !this.toggelsidebar
    //        // this.$store.dispatch('troggleme', this.name);   
    //        // this.$store.commit('changename'); 
    //        this.$store.dispatch('changename'); 
    //   }
    }

}
</script>
