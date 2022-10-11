<template>
<div class="webdev col-9">
    <div v-for="item in projectdata" :key="item.id">
        <div class="main-webdev menu-button ">
            <div class="right-webdev col-8">
                <div class="top-title">
                    <h3 @click="projecdetails(item.id)">{{item.name}}</h3>
                    <p><i class="fa-3 fa-sharp fa-solid fa-circle"> </i>{{item.status}}</p>
                </div>
                <div class="bot-title">
                    <a href="">{{item.project_categories}}</a>
                </div>
            </div>
            <div class="left-webdev col-3 deadline">
                <p>{{item.ProjectStart}}</p>
                <div class="deadline" v-if="item.deadlinestatus != 'Missing Deadline'">
                    <p>Deadline:<span>{{item.deadlinestatus}}</span></p>
                </div>
                <p v-else>{{item.deadlinestatus}}</p>
            </div>
            <div class="side-tap col-1">
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i class="fa-sharp fa-solid fa-circle"></i></a>
                <div class="dot-list form-popup" id="myForm">
                    <ul>
                        <li>
                            <a href="#" v-if="item.status != 'Pending Allocation'" @click="open(item.id,1)">Time Line</a>
                            <!-- <a href="#" v-if="item.status == 'Pending Allocation'" @click="open(item.id)">Assign project</a> -->
                            <a href="#" @click="open(item.id,2)">Assign project</a>
                            <!-- <a href="#">All Topics</a> -->
                            <!-- <a href="#">Tutorials</a> -->
                            <!-- <a href="#">About</a> -->
                            <!-- <a href="#">Write for Us</a> -->
                            <!-- <a href="#">Q&A</a> -->
                            <!-- <a href="#">Webinars</a> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    methods: {
        projecdetails(data) {
            this.$emit('projectselect', data)
        },
        open(projectid, item){
            if(item == 2){
                this.$store.state.slidertrogale.assignproject = true
                this.$emit('opentimeline', projectid)
            }
            else if(item == 1){
                this.$store.state.slidertrogale.timeline = true
                this.$emit('timeline', projectid)
            }
        }
    },
    computed: {
        //  ...mapGetters('projectsdetails', 2)
    },
    props: {
        projectdata: Object
    }
}
</script>
