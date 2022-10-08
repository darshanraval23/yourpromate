<template>
<div class="hero-page">
    <notifications />
    <SidebarComponent></SidebarComponent>
    <!-- @click="this.$store.commit('closemodal')" -->
    <div class="col-12 background-overlay">
        <HeserComponent></HeserComponent>
        <MaincontentComponent>
        </MaincontentComponent>
    </div>
    <!-- vue model -->
    <!-- <ModalComponent v-show="$store.state.isModalVisible" @close="closeModal"></ModalComponent> -->
    <!-- end of vue model -->
    <ModalComponent v-show="$store.state.isModalVisible" @close="modelclosed">
        <template v-slot:header>
            <h1> Add Project</h1>
        </template>
        <template v-slot:body>
            <!-- {{error}} -->
            <form @submit.prevent="addproject">
                <div class="input-cantainer">
                    <label for="name">Project name:</label>
                    <input type="text" id="name" name="user_name" v-model="filddata.name">
                    <span v-if="error.name">{{error.name}}</span>
                </div>

                <div class="input-cantainer">
                    <label for="projectdetails">Project Details:</label>
                    <textarea id="projectdetails" name="user_bio" v-model="filddata.details"></textarea>
                    <span v-if="error.details">{{error.details}}</span>
                </div>

                <div class="input-cantainer">
                    <label for="categories">Categories:</label>
                    <select id="categories" name="project_categories" v-model="filddata.categories">
                        <optgroup label="Web">
                            <option value="php_laravel">Php Laravel</option>
                            <option value="php">PHP</option>
                            <option value="web_designer">Web Designer</option>
                            <option value="wordpress">Wordpress</option>
                        </optgroup>
                        <optgroup label="Mobile">
                            <option value="android">Android</option>
                            <option value="ios">IOS</option>
                            <option value="mobile_designer">Mobile Designer</option>
                        </optgroup>
                    </select>
                    <span v-if="error.categories">{{error.categories}}</span>
                </div>

                <div class="input-cantainer">
                    <label for="">deadline</label>
                    <input type="date" name="deadline" id="" v-model="filddata.deadline">
                    <span v-if="error.deadline">{{error.deadline}}</span>
                </div>

                <div class="btn-submit">
                    <button type="submit" class="submit">Add</button>
                    <button type="button" class="denger" @click="modelclosed">Cancal</button>
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <!-- This is a new modal footer. -->
        </template>
    </ModalComponent>

</div>
<TimelinmodalComponent />
<AssignprojectComponent />
</template>

<script>
import TimelinmodalComponent from './slider/TimelinmodalComponent.vue'
import SidebarComponent from './User/layout/SidebarComponent.vue'
import HeserComponent from './User/layout/HederComponent.vue'
import AssignprojectComponent from './slider/AssignprojectComponent.vue'
import ProjectdetailsComponent from './slider/ProjectdetailsComponent.vue'
import MaincontentComponent from './User/MaincontentComponent.vue'
import ModalComponent from './User/layout/ModalComponent.vue'
import {
    useRouter
} from 'vue-router'

export default {
    components: {
        HeserComponent,
        SidebarComponent,
        MaincontentComponent,
        TimelinmodalComponent,
        ProjectdetailsComponent,
        AssignprojectComponent,
        ModalComponent
    },
    computed: {

    },
    data() {
        return {
            isModalVisible: false,
            filddata: {
                name: '',
                details: '',
                categories: '',
                deadline: ''
            },
            error: {
                name: '',
                details: '',
                categories: '',
                deadline: ''
            }
        };
    },
    methods: {
        addproject() {
            if (this.filddata.name != '' && this.filddata.details != '') {
                let resualt = axios.post('api/project/add', this.filddata)
                    .then(resp => {
                        this.$notify({
                            type: "success",
                            title: "Important message",
                            text: resp.data.message,
                        });
                        console.log('saved projenct', resp)
                        this.$store.dispatch('getprojects')
                        this.$store.state.isModalVisible = false
                        // this.
                        this.filddata = {
                            name: '',
                            details: '',
                            categories: '',
                            deadline: ''
                        }
                        this.error = {
                            name: '',
                            details: '',
                            categories: '',
                            deadline: ''
                        }
                    })
                    .catch(e => {
                        this.state.error = e.response.data
                    })
            } else if (this.filddata.name == '') {
                this.error.name = "name is requerd!"
            }
            if (this.filddata.details == '') {
                this.error.details = "details is requerd!"
            }
            if (this.filddata.categories == '') {
                this.error.categories = "categories is requerd!"
            }
            if (this.filddata.deadline == '') {
                this.error.deadline = "deadline is requerd!"
            }

        },
        modelclosed(){
            console.log('perant call')
            this.error ={
                 name: '',
                details: '',
                categories: '',
                deadline: ''
            }
            this.$store.state.isModalVisible = false
        }
    },
    created() {
        let router = useRouter();
        if (!sessionStorage.getItem('token')) {
            router.push('/signin');
        }
    }
}
</script>

<style scoped>
form {
    max-width: 100%;
    /* margin: 10px auto; */
    padding: 10px 20px;
    background: #f4f7f8;
    border-radius: 8px;
}

/* h1 {
  margin: 0 0 30px 0;
  text-align: center;
} */
.btn-submit button {
    margin: 10px 5px;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 10px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    /* margin-bottom: 30px; */
}

.input-cantainer span {
    color: red;
}

.input-cantainer {
    margin-bottom: 30px;
}

textarea {
    /* max-width: none; */
    resize: vertical;

}

input[type="radio"],
input[type="checkbox"] {
    margin: 0 4px 8px 0;
}

select {
    padding: 6px;
    height: 32px;
    border-radius: 2px;
}

.submit {
    padding: 10px 18px;
    color: #FFF;
    background-color: #4bc970;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    /* width: 100%; */
    border: 1px solid #3ac162;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    margin-bottom: 10px;
}

.denger {
    padding: 10px 18px;
    color: #FFF;
    background-color: #ff2020;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    /* width: 100%; */
    border: 1px solid #be1111;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    margin-bottom: 10px;
}

fieldset {
    margin-bottom: 30px;
    border: none;
}

legend {
    font-size: 1.4em;
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 8px;
}

label.light {
    font-weight: 300;
    display: inline;
}

.number {
    background-color: #5fcf80;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 100%;
}

/* @media screen and (min-width: 480px) {

    form {
        max-width: 480px;
    }

} */
</style>
