<template>
<div class="wrpper">
        <span>注册页面</span>
        <div class="content">
          <div class="adminid">用户ID:
            <input type="text" v-model="registerInput.adminid">
          </div>
          <div class="adminname">用户名:
            <input type="text" v-model="registerInput.adminname">
          </div>
          <div class="password">用户密码:
            <input type="password" v-model="passwordR.password">
          </div>
           <div class="password">确认密码:
            <input type="password"  v-model="passwordR.password1">
          </div>
          <button @click="registerButton">注册</button>
        </div>
</div>
</template>

<script setup>
import {registerRequest} from "@/network/user.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const registerInput=reactive({
  adminid:"",
  adminname:"",
  password:"",
})
const passwordR=reactive({
  password:"",
  password1:""
})
const registerButton=()=>{
  if(passwordR.password==passwordR.password1){
      registerInput.password=passwordR.password;
      registerRequest(registerInput).then(res=>{
      if(res.code==0){
          alert(res.msg)
      }
      else{
        alert("注册成功，请登录")
        router.push('/login')
      }
    })
  }else{
    alert("密码不一致，请重新输入！")
  }

}
</script>

<style scoped lang="less">
        .wrpper{
            width: 1000px;
            height: 700px;
            background-color: gray;
            margin: 0 auto;
            position: relative;
            /* background-image: url(); */
            .content{
                position: absolute;
                background-color: white;
                height: 300px;
                width: 300px;
                left: 25%;
                top: 25%;
                //margin-left: 200px;
                //margin-top: 150px;
            }
        }
</style>