<template>
<div class="webdev col-9">
    <div class="main-webdev ">
        <div class="right-webdev col-8">
            <div class="top-title">
                <h3 class="menu-button collaps">Website development</h3>
                <p>
                    <i class=" fa-1 fa-sharp fa-solid fa-circle"></i>Pending Allocation
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
                        <a href="#" class="menu-button1" @click="trogglepopup('timeline')">Time line</a>
                    </li>
                    <li>
                        <a href="#" class="menu-button2" @click="trogglepopup('assignproject')">Assign project</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="main-webdev menu-button">
        <div class="right-webdev col-8">
            <div class="top-title">
                <h3>Website development</h3>
                <p>
                    <i class="fa-2 fa-sharp fa-solid fa-circle"> </i>In Progress &nbsp; &nbsp;
                </p>
            </div>
            <div class="bot-title">
                <a href="">Category Sample</a>
                <a href="">Category Sample</a>
            </div>
        </div>
        <div class="left-webdev col-3">
            <p>12-04-2021 1:20 PM</p>
            <div class="deadline">
                <p>Deadline:<span> 12-04-2021</span></p>
            </div>
        </div>
        <div class="side-tap col-1">
            <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
            <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
            <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
            <div class="dot-list form-popup">
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
    <div class="main-webdev menu-button ">
        <div class="right-webdev col-8">
            <div class="top-title">
                <h3>Website development</h3>
                <p>
                    <i class="fa-3 fa-sharp fa-solid fa-circle"> </i>Pending Allocation
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
</template>
<script>
export default {
    methods:{
        trogglepopup(data){
            // this.parant.troggleTimeline
            // this.parant.troggleTimeline
            // console.log(data)
            //  this.$emit('change')
             this.$store.commit('troggletimeline',data)
        }
    },
    // props:[
    //     parantsnfun: function
    // ]
}
</script>
