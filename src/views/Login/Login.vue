<template>
<div class="wrpper">
        <div class="content">
            <div class="username">
                <span>用户名:</span><input type="text" width="100px" v-model="userInput.userId">
            </div>
            <div class="userpassword">
                <span>密  &nbsp;&nbsp;&nbsp;码:</span><input type="password" v-model="userInput.password">
            </div>
            <div class="mb-2 flex items-center text-sm">
              <el-radio-group v-model="radio1" class="ml-4">
                <el-radio label="1">管理员</el-radio>
                <el-radio label="2">用户</el-radio>
              </el-radio-group>
            </div>
            <button class="login" @click="login">登录</button>
            <div class="register" @click="toRegister">如果还没有账号，请先注册</div>

        </div>
    </div>
</template>

<script setup>
import {userloginRequest,adminloginRequest} from "@/network/user.js";
import {reactive,ref} from "vue";
// import {useStore} from "vuex";
import {useRouter } from "vue-router";
const router = useRouter();
// const store = useStore();
const radio1 = ref('1');
let userInput=reactive({
  userId:"",
  password:"",
  manager:0
})
const login=()=> {
  console.log(userInput)
  if (radio1.value == '0') {
    userloginRequest(userInput).then(res => {
      console.log(res)
      if (res.code == 1) {
        alert("管理员登录成功")
        router.push("/")
      } else {
        alert(res.msg)
      }
    })
  } else {
    adminloginRequest(userInput).then(res => {
      console.log(res)
      if (res.code == 1) {
        alert("用户登录成功")
        router.push("/")
      } else {
        alert(res.msg)
      }
    })
  }
}
const toRegister=()=>{
  router.push("/register")
}
</script>

<style scoped lang="less">
        .wrpper{
            width: 1000px;
            height: 700px;
            background-color: gray;
            margin: 0 auto;
            /* background-image: url(); */
            .content{
                background-color: white;
                height: 300px;
                width: 300px;
                margin-right: 200px;
                margin-top: 210px;
                float: right;
                .username{
                    margin-top: 20px;
                }
                .userpassword{
                    margin-top: 20px;
                }
                .login{
                    margin-top: 20px;
                    margin-left: 180px;
                }
                .register{
                  color: red;
                  cursor: pointer;
                }
            }
        }
        .el-button--text {
          margin-right: 15px;
        }
        .el-select {
          width: 300px;
        }
        .el-input {
          width: 300px;
        }
        .dialog-footer button:first-child {
          margin-right: 10px;
        }
</style>