/*
the global file of store 
*/

//import vuex 
import { createStore } from 'vuex'

//import modules 
import UserModule from './modules/UserModule'

//import api plugin
import axios from 'axios'

export default createStore({
    state: {
        //define state propertic(Variable)
        toggelsidebar: false,
        name: 'darshan',
        slidertrogale: {
            timeline: false,
            assignproject: false,
            projectdetails: false,
            sidebarslider: false,
            isaddprojectfixed: false,
        },
        isAuthenticated: false,
        token: '',
        projectdetails: Object,
        error: [],
        isModalVisible: false,
        userdata: Object,
        currentComponent: 'MaincontentComponent'
    },
    modules: {
        //use modules 
        user: UserModule,
        

    },
    mutations: {
        /*
        @info hear create those function will manuplation state data
        @paems take two parms state and data(paylode)
        */
        trogglesmodal(state, data) {
            if (data == 'timeline') {
                this.state.slidertrogale.timeline = !this.state.slidertrogale.timeline
            } else if (data == 'assignproject') {
                this.state.slidertrogale.assignproject = !this.state.slidertrogale.assignproject
            } else if (data == 'projectdetails') {
                this.state.slidertrogale.projectdetails = !this.state.slidertrogale.projectdetails
            }
        },
        login(state, data) {
            this.state.isautodication = true
            this.state.token = data
        },
        logout(state, data) {
            this.state.isautodication = false
        },
        changename(state) {
            this.state.name = 'raval'
        },
        closemodal() {
            this.state.slidertrogale.timeline = false
            this.state.slidertrogale.assignproject = false
            this.state.slidertrogale.projectdetails = false
            this.state.slidertrogale.sidebarslider = false
        }

    },
    actions: {
        /*
        @info  hare we can call api 
        @paems take two parms state and cammit(paylode) 
        */
        changename(state) {
            this.state.name = 'ravaldarshan'
        },
        triggersidebarslider(state) {
            this.state.slidertrogale.sidebarslider = !this.state.slidertrogale.sidebarslider
        },
        async addproject(state, commit) {
            let resualt = axios.post('/api/project')
                .then(resp => {
                    this.state.projectdetails = resp.data
                })
                .catch(e => {
                    this.state.error = e.response.data
                })
        },
        async getprojects(state) {
            let resualt = axios.post('/api/project')
                .then(resp => {
                    this.state.projectdetails = resp.data
                })
                .catch(e => {
                    this.state.error = e.response.data
                })
        },
        async getprojectsbyname(state, name) {
            if(name == ''){
               this.dispatch('getprojects') 
            }else{
            const searchItem ={
                'projectname': name
            }
            let resualt = axios.post('/api/searchproject', searchItem)
                .then(resp => {
                    this.state.projectdetails = resp.data
                })
                .catch(e => {
                    this.state.error = e.response.data
                })
            }
        },

        getprojectbyid(state, id){
            let resualt = axios.get("/api/project/"+id)
                .then(resp => {
                    this.state.projectdetails = resp.data
                })
                .catch(e => {
                    this.state.error = e.response.data
                })
        }
    },
    getters: {
        /*
        @info  thos function will help to get state data
        @paems state and gatters
        */
        getname: function (state) {
            return `${state.name}`
        },
        //get all project details
        getprojectsdetails: function (state) {
            return state.projectdetails
        },
        getprojectsbyid: (state) => (id) => {
            return state.projectdetails.find(projectdetails => projectdetails.id == id)  
        },

    },
})