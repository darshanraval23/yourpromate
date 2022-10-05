/*
this is global file of store 
*/

//import vuex 
import { createStore } from 'vuex'

//import modules 
import UserModule from './modules/UserModule'

export default createStore({
    state: {
        toggelsidebar: false,
        name: 'darshan',
        popuptrogale:{
            timeline: false,
            assignproject: false,
            projectdetails: false,

        }
    },
    modules: {
        user: UserModule,
        },
    mutations: {
        troggletimeline(state, data) {
            if(data == 'timeline'){
                console.log('state mutation data',data)
                this.state.popuptrogale.timeline = !this.state.popuptrogale.timeline
            }else if(data == 'assignproject'){
                console.log('state mutation data',data)
                this.state.popuptrogale.assignproject = !this.state.popuptrogale.assignproject
            }else if(data == 'projectdetails'){
                console.log('state mutation data',data)
                this.state.popuptrogale.projectdetails = !this.state.popuptrogale.projectdetails
            }
            // this.commit(sidebartoggel)
        },
    
    },
    actions: {
        
        async troggleme(state,commit) {
            // console.log(paylode);
            console.log('action called',commit);
            console.log('action called',state);
            // state.toggelsidebar = !state.toggelsidebar
        }    
    },
    getters: {
        getname: function (state) {
            return `${state.name}`
        }
    }
})