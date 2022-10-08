<template>
<div class="main-porjdetailas col-3 " :style="{'transform' : $store.state.slidertrogale.projectdetails ? 'translateX(0px)':'translateX(500px)'}">
    <span><i class="toggel-click2 collaps3 fa-solid fa-angle-right first"></i></span>
    <div class="porj-details">
        <div class="porj-details-heading">
            <h2>Project Details </h2>
            <i class="fa-regular fa-pen-to-square openbtn" onclick="openForm()"></i>
        </div>

        <!-- ------------------------edit form Start------------->

        <div class="form-popup1" id="form">
            <form class="form-container">
                <i class="fa-solid fa-xmark form-close" onclick="closeForm()"></i>
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
                    <p>12-04-2021 <span>1:20PM</span></p>
                </div>
            </form>
        </div>
        <!-- ------------------------edit form End------------->

        <div class="web-dev">
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi inventore dignissimos consequatur itaque? Quisquam,
                quo a. Officiis reprehenderit beatae veritatis, dolorum
                temporibus est aliquam delectus soluta quaerat expedita
                explicabo laboriosam...
                <button class="Click-here modal-toggle" onclick="openpop()" href="#popup1">
                    Read More
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </p>

            <div class="modal">
                <div class="custom-model-main modal-toggle" id="pop">
                    <div class="custom-model-inner">
                        <div class="close-btn">
                            <i class="fa-solid fa-xmark modal-toggle" onclick="closepop()"></i>
                        </div>
                        <div class="custom-model-wrap">
                            <div class="pop-up-content-wrap">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum beatae quisquam eaque hic cumque
                                    dolorum aperiam accusantium quam minima earum corporis fuga ea distinctio culpa architecto,
                                    eveniet
                                    repellat officiis sint quis dolore. Qui, aperiam! Voluptatibus dolores
                                    provident repudiandae! Voluptate qui alias earum similique, quae voluptatem et optio velit debitis
                                    nostrum reprehenderit quos quia, doloribus incidunt possimus non. Incidunt vel, a quasi quis
                                    accusamus, saepe optio quaerat, amet inventore id voluptates quibusdam? Voluptate atque dicta
                                    minus!
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
                <p>12-04-2021 <span>1:20PM</span></p>
            </div>
            <div class="deadline1">
                <h4>Dead line:</h4>
                <p>12-04-2021 <span>1:20PM</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        id: String
    },
    created(){
        console.log(this.id)
    }
}
</script>
