<template>
<aside class="col-1">
    <div class="main-menu">
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
                    <span @click="triggersidebar" ><i class="toggel-click1 rotate" :class="[$store.state.slidertrogale.sidebarslider? 'fa-solid fa-angle-right first down':'fa-solid fa-angle-right first']"></i></span>
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
    data() {
        return {
            name: 'darshan'
        }
    },
    computed:{
        isSidebarfixed(){
            return this.$store.state.slidertrogale.isaddprojectfixed
        }
    },
    components: {
        SidebarpopupComponent,
    },
    methods: {
        triggersidebar(){
            if(this.isSidebarfixed){
                this.$notify({
                            type: "error",
                            title: "Important message",
                            text: 'Please unping the silder!',
                });
            }else{
                this.$store.state.slidertrogale.sidebarslider = !this.$store.state.slidertrogale.sidebarslider
            }
        }
    }
}
</script>
