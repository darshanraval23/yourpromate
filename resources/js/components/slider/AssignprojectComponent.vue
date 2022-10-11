<template>
<notifications />
<section class="main-assign-detail col-3 mySidenav" id="hide-menu1" :style="{'transform' : $store.state.slidertrogale.assignproject ? 'translateX(0px)':'translateX(500px)'}">
    <span @click="close"><i class="toggel-click3 closebtn collaps fa-solid fa-angle-right first"></i></span>
    <div class="assign-detail">
        <div class="assign-dev">
            <h3>Assign project</h3>
            <div class="select-project">
                <h4>Select Project members</h4>
                <!-- --------------------------Select2 Sortable Options------------------ -->
                <div class="inline field">
                    <select name="skills" multiple="" class="label ui selection fluid dropdown" v-model="selectedemployee">
                        <option v-for="(item, index) in employes" :value="item.id" :key="index">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <a href="" class="assign-tag-btn">
                    <button @click.prevent="seveselectedemp">
                        Submit
                    </button>
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            selectedemployee: {},
            employes: {},
        }
    },
    props: {
        projectid: {
            default: 1,
            type: Number
        },
    },
    created() {
        this.getemployees();
    },
    methods: {
        close() {
            this.$store.state.slidertrogale.assignproject = false
        },
        seveselectedemp() {
            const hedder = {
                employesids: this.selectedemployee,
                projectid: this.projectid
            }
            let resualt = axios.post("/api/assign", hedder)
                .then(resp => {
                    this.$notify({
                        title: 'Important message',
                        text: 'project allocated sucseesfully!'
                    });
                    this.close()
                })
                .catch(e => {
                    this.$notify({
                        title: 'Important message',
                        text: e.response.data
                    });
                    console.log(e)
                })
            console.log(this.selectedemployee)
        },
        getemployees() {
            let resualt = axios.get("/api/users")
                .then(resp => {
                    console.log(resp)
                    this.employes = resp.data
                })
                .catch(e => {
                    console.log(e)
                })
        }

    },

}
</script>
