/*
the global file of store 
*/

//import vuex 
import { createStore } from 'vuex'

//import modules 
import UserModule from './modules/UserModule'

//import api plugin
import axios  from 'axios'

export default createStore({
    state: {
        //define state propertic(Variable)
        toggelsidebar: false,
        name: 'darshan',
        slidertrogale:{
            timeline: false,
            assignproject: false,
            projectdetails: false,
            sidebarslider: false,
        },
        isAuthenticated: false,
        token: '',
        projectdetails: Object,
        error: [],
        isModalVisible: false,
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
            if(data == 'timeline'){
                console.log('state mutation data',data)
                this.state.slidertrogale.timeline = !this.state.slidertrogale.timeline
            }else if(data == 'assignproject'){
                console.log('state mutation data',data)
                this.state.slidertrogale.assignproject = !this.state.slidertrogale.assignproject
            }else if(data == 'projectdetails'){
                console.log('state mutation data',data)
                this.state.slidertrogale.projectdetails = !this.state.slidertrogale.projectdetails
            }
            // this.commit(sidebartoggel)
        },
        login(state, data){
            console.log('login')
            this.state.isautodication = true
            this.state.token = data
        },
        logout(state, data){
            // console.log(data)
            this.state.isautodication = false
        },
        changename(state){
            this.state.name = 'raval'
        },
        closemodal(){
            console.log('model close')
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
        changename(state){
            this.state.name = 'ravaldarshan'
        },
        triggersidebarslider(state){
            this.state.slidertrogale.sidebarslider = !this.state.slidertrogale.sidebarslider
        },
        async troggleme(state,commit) {
            // console.log(paylode);
            console.log('action called',commit);
            console.log('action called',state);
            // state.toggelsidebar = !state.toggelsidebar
        },
        async getprojects(state){
            let resualt = axios.post('/api/project')
            .then(resp=>{
                this.state.projectdetails = resp.data
            })
            .catch(e=>{
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
        getprojectsdetails: function(state){
            // console.error('getter called');
            // console.error(state.projectdetails);
            return state.projectdetails
        }
    }
})