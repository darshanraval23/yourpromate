<template>
<div class="webdev col-9">
    <div v-for="item in projectdata" :key="item.id">
        <!-- {{projectdata}}/ -->
        <div class="main-webdev menu-button ">
            <div class="right-webdev col-8">
                <div class="top-title">
                    <h3 @click="this.$store.commit('trogglesmodal' , 'projectdetails')">{{item.name}}</h3>
                    <p>
                        <i class="fa-3 fa-sharp fa-solid fa-circle"> </i>{{item.status}}Pending Allocation
                    </p>
                </div>
                <div class="bot-title">
                    <a href="">Category Sample</a>
                    <a href="">Category Sample</a>
                </div>
            </div>
            <div class="left-webdev col-3">
                <p>12-04-2021 1:20 PM</p>
                <p>Missing Deadline</p>
            </div>
            <div class="side-tap col-1">
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <div class="dot-list form-popup" id="myForm">
                    <ul>
                        <li>
                            <a href="#">All Topics</a>
                            <a href="#">Tutorials</a>
                            <a href="#">About</a>
                            <a href="#">Write for Us</a>
                            <a href="#">Q&A</a>
                            <a href="#">Webinars</a>
                            <a href="#">Webinars</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        // trogglepopup(data){
        //     // this.parant.troggleTimeline
        //     // this.parant.troggleTimeline
        //     // console.log(data)
        //     //  this.$emit('change')
        //      this.$store.commit('troggletimeline',data)
        // }
    },
    props: {
        projectdata: Object
    }

}
</script>
