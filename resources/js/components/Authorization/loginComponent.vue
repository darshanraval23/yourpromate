<template>
<div class="login-page">
    <div class="form">
        <notifications />
        <h1>Yourpromote login</h1>
        <!-- error massage -->
        <div class="alert" v-if="formerror.message" :style="{display: tonggelstyle}">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <strong>Oh!</strong> {{formerror.message[0]}}
        </div>
        <!-- end error massage -->
        <!-- login form -->
        <form class="login-form" @submit.prevent="LoginUser">
            <label for="email">Email*</label>
            <input type="text" placeholder="email" id="email" v-model="formdata.email" />
            <span v-if="formerror.email">{{formerror.email[0]}}</span>

            <label for="password">Password*</label>
            <input type="password" placeholder="password" id="password" v-model="formdata.password" />
            <span v-if="formerror.password">{{formerror.password[0]}}</span>

            <button>login</button>
            <p class="message">Not registered?
                <router-link to="/ragisteration">Create an account</router-link>
            </p>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'loginuser',
    data() {
        return {
            formdata: {
                email: '',
                password: '',
            },
            formerror: {},
            tonggelstyle: 'none',
            token: ''
        }
    },
    methods: {
        LoginUser() {
            const options = this.formdata
            let resualt = axios.post('/api/user/login', options)
                .then(resp => {
                    this.$notify({
                        type: "SUCCESS",
                        title: "Important message",
                        text: resp.data.message
                    });
                    sessionStorage.setItem("token", resp.data.token);
                    this.token = sessionStorage.getItem('token')
                    this.$router.push({
                        path: '/',
                        replace: true
                    })
                }).catch(e => {
                    this.formerror = e.response.data
                   this.tonggelstyle = 'blocphpk'
                });
        },
    },
    
}   
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);


.alert {
  /* display: block; */
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin: 10px 10px;
}

.closebtn {
  /* margin-left: 15px !important; */
  margin: 0% !important;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: rgb(252, 252, 252);
}


h1 {
    margin: 2% 0%;
}

.login-page {
    width: 500px;
    padding: 8% 0 0;
    margin: auto;
}

.form {
    background-color: #F6F7F9 !important;
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 500px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form span {
    margin: 5px 5px;
    display: flex;
    color: red;
    /* font-size: 10px; */
}

.form label {
    margin-left: 5px;
    display: flex;
}

.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}

.form button:hover,
.form button:active,
.form button:focus {
    background: #43A047;
}

.form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
}

.form .message a {
    color: #4CAF50;
    text-decoration: none;
}

.form .register-form {
    display: none;
}

.container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
}

.container:before,
.container:after {
    content: "";
    display: block;
    clear: both;
}

.container .info {
    margin: 50px auto;
    text-align: center;
}

.container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
}

.container .info span {
    color: #4d4d4d;
    font-size: 12px;
}

.container .info span a {
    color: #000000;
    text-decoration: none;
}

.container .info span .fa {
    color: #EF3B3A;
}

body {
    background: #76b852;
    /* fallback for old browsers */
    background: rgb(141, 194, 111);
    background: linear-gradient(90deg, rgba(141, 194, 111, 1) 0%, rgba(118, 184, 82, 1) 50%);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
