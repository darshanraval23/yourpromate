<template>
<div class="main-porjdetailas col-3 " :style="{'transform' : $store.state.slidertrogale.projectdetails ? 'translateX(0px)':'translateX(500px)'}">
    <span><i class="toggel-click2 collaps3 fa-solid fa-angle-right first" @click="close"></i></span>
    <div class="porj-details">
        <div class="porj-details-heading">
            <h2>Project Details </h2>
            <i class="fa-regular fa-pen-to-square openbtn" @click="this.modeltroggle.changededline = true"></i>
        </div>

        <!-- ------------------------edit form Start------------->

        <div class="form-popup1" id="form" :style="{'display':modeltroggle.changededline ? 'block': 'none'}">
            <form class="form-container">
                <i class="fa-solid fa-xmark form-close" @click="this.modeltroggle.changededline = false"></i>
                <h3>Web Development</h3>
                <!-- <label for="email"> type your Text here </label>  -->
                <div class="edit-box">
                    <input class="edit-text" type="text" placeholder="your text here.." name="text" />
                </div>
                <div class="inner-tag-div">
                    <a href="#">Tag</a>
                    <a href="#">Tag</a>
                    <input type="datetime-local" id="time" name="time">
                </div>
                <div class="inner-deadline1">
                    <h4>Dead line:</h4>
                    <p>{{projectdetails.deadline}}</p>
                </div>
            </form>
        </div>
        <!--------------------------edit form End------------->

        <div class="web-dev">
            <h3>{{projectdetails.name}}</h3>
            <p>{{projectdetails.details}}
                <button class="Click-here modal-toggle" @click="this.modeltroggle.moredetails = true" href="#popup1">
                    Read More
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </p>

            <div class="modal">
                <div class="custom-model-main modal-toggle" id="pop" :style="{'display':modeltroggle.moredetails ? 'block': 'none'}">
                    <div class="custom-model-inner">
                        <div class="close-btn">
                            <i class="fa-solid fa-xmark modal-toggle" @click="this.modeltroggle.moredetails = false"></i>
                        </div>
                        <div class="custom-model-wrap">
                            <div class="pop-up-content-wrap">
                                <p>{{projectdetails.details}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-overlay"></div>
                </div>
            </div>

            <div class="tag-div">
                <a href="#">Tag</a>
                <a href="#">Tag</a>
                <p>{{projectdetails.ProjectStart}}</p>
            </div>
            <div class="deadline1">
                <h4>Dead line:</h4>
                <p>{{projectdetails.deadline}}</p>
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
    data() {
        return {
            modeltroggle: {
                changededline: false,
                moredetails: false,
            },
        }
    },
    props: {
        projectdetails: ''
    },
    computed: {},
    created() {},
    methods: {
        close() {
            this.$store.state.slidertrogale.projectdetails = false
        },
    },

}
</script>
