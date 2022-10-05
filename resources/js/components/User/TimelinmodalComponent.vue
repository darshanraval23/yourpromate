<template>
<div class="main-time-detail col-3 mySidenav" id="mySidenav" :style="{'transform' : $store.state.popuptrogale.timeline ? 'translateX(0px)':'translateX(500px)'}" >
    <span><i class="toggel-click3 closebtn collaps1 fa-solid fa-angle-right first"></i></span>
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
                        <p>12-04-2021 <span>1:20PM</span></p>
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
                        <p>12-04-2021 <span>1:20PM</span></p>

                        <div class="contact">
                            <i class="fa-solid fa-user"></i>
                            <i class="fa-solid fa-user"></i>
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
                        <p>12-04-2021 <span>1:20PM</span></p>
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
                        <p>On 12-04-2021 <span>1:20PM</span></p>
                        <div class="contact">
                            <div class="progress-container">
                                <progress title="50%" id="progressBar" value="50" max="100"></progress>
                            </div>
                            <!-- <span>50%</span> -->
                        </div>
                    </div>
                </li>
                <li class="blocks-item">
                    <div class="icon">
                        <i class="fa-solid fa-check-double"></i>
                    </div>
                    <div class="topic">
                        <h4>Project Delivered</h4>
                        <p>12-04-2021 <span>1:20PM</span></p>
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
                        <p>12-04-2021 <span>1:20PM</span></p>

                        <div class="contact">
                            <!-- <div class="progress-container">
                  <progress value="75" max="100">75%</progress>
                </div> -->
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
