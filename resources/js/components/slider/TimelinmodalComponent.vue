<template>
<div class="main-time-detail col-3 mySidenav" id="mySidenav" :style="{'transform' : $store.state.slidertrogale.timeline ? 'translateX(0px)':'translateX(500px)'}">
    <span @click="$store.state.slidertrogale.timeline= false"><i class="toggel-click3 closebtn collaps1 fa-solid fa-angle-right first"></i></span>
    <div class="time-details">
        <h3>Timeline</h3>
        <div class="time-dev">
            <ul class="blocks-list">
                <li class="blocks-item">
                    <div class="icon">
                        <i class="dashed fa-solid fa-circle-check"></i>
                    </div>
                    <div class="topic">
                        <h4>Project created</h4>
                        <p>{{recodes.created_at ? dateTime(recodes.created_at) : 'Project Not Created'}}</p>
                        <div class="contact">
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon">
                        <img src="@/assets/images/icons/group.png" alt="">
                    </div>
                    <div class="topic">
                        <h4>Project allocated</h4>
                        <p>{{recodes.Project_allocated_date ? dateTime(recodes.Project_allocated_date) : 'Project Not Allocated'}}</p>
                        <div class="contact">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon">
                        <i class="fa-regular fa-calendar-check"></i>
                    </div>
                    <div class="topic">
                        <h4>Project Start</h4>
                        <p>{{recodes.ProjectStart ? dateTime(recodes.ProjectStart) : 'Project Not Started'}}</p>
                        <!-- <p>12-04-2021 <span>1:20PM</span></p> -->
                        <div class="contact">
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon">
                        <i class="fa-regular fa-calendar-check"></i>
                    </div>
                    <div class="topic">
                        <h4>Project Progress</h4>
                        <p>On {{dateTime(new Date())}}</p>
                        <div class="contact">
                            <div class="progress-container ">
                                <div class="progressbar" :style="{'width': recodes.progress}">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon">
                        <i class="fa-solid fa-check-double"></i>
                    </div>
                    <div class="topic">
                        <h4>Project Delivered</h4>
                        <p>{{recodes.ProjectDelivered ? dateTime(recodes.ProjectDelivered) :'Project Not Delivered' }}</p>
                        <div class="contact">
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon1">
                        <i class="fa-sharp fa-solid fa-rocket"></i>
                    </div>
                    <div class="topic">
                        <h4>Project Launch</h4>
                        <p>{{recodes.ProjectLaunch ? recodes.ProjectLaunch :'Project Not Launch' }}</p>
                        <div class="contact">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
    props: {
        recodes: {
            default: '',
            // type: Object
        }
    },
    computed: {

    },
    created() {},
    methods: {
        /*
        @info date formater function 
        @perms date
        */
        dateTime(value) {
            return moment(value).format('DD-MM-YYYY h:mm A');
        },
    }
}
</script>
