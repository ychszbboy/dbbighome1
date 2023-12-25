<template>
  <div class="wrpper">
    <div class="goods">
<!--      {{allgoods.value}}-->
      <div class="goods-num">全部商品：</div>
      <table>
        <tr>
          <input type="checkbox" :checked="allChecked" @click="checkedAll" class="all">
                全选
          <th>商品</th>
          <th></th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>

<!--            x下面用来循环-->
        <tr v-for="(item,index) in allgoods" :key="index">
          <input type="checkbox" :checked="item.checked"
                     @click="changeChecked(item.foodName)">
          <td>
            <img :src="item.photo" class="goods_image" alt="">
          </td>
          <td>{{ item.foodName }}</td>
          <td>{{ item.foodId }}</td>
          <td>{{ item.introduction }}</td>
          <td>{{ item.price }}元</td>
        </tr>
      </table>
    </div>
      <div class="footer">
        <span class="addGood" ></span>
        <el-button text @click="dialogFormVisible = true">
            添加新的餐品
        </el-button>
        <el-dialog v-model="dialogFormVisible" title="添加商品">
        <el-form :model="form">
          <el-form-item label="食物编号">
            <el-input v-model="form.foodId" autocomplete="off" />
          </el-form-item>
           <el-form-item label="食物名称">
            <el-input v-model="form.foodName" autocomplete="off" />
          </el-form-item>
           <el-form-item label="食物价格">
            <el-input v-model="form.price" autocomplete="off" />
          </el-form-item>
           <el-form-item label="食物介绍">
            <el-input v-model="form.foodIntroduction" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="addGoods">
              Confirm
            </el-button>
          </span>
        </template>
        </el-dialog>
        <span class="delete" @click="deleteGoods">删除所选餐品</span>
      </div>
    </div>

</template>

<script setup>
import {getGoodsData,addNewGoodsData,deleteGoodsData} from "@/network/goods";
import {onMounted, reactive, ref} from "vue";
let allgoods = ref([]);
let dialogFormVisible = ref(false)
onMounted(()=>{
  getGoodsData().then(res=>{
    // console.log(res.data)
    res.data.records.forEach(element=>{//循环isdelete
        if(element.isdelete == 1){

        }else{
          allgoods.value.push(element)
        }
      }
    )
    // console.log(allgoods.value)
  })
})
//添加商品
const addGoods=()=>{
  addNewGoodsData(form).then(res=>{
    console.log(res.data)
    alert(res.data)
    // if(res.status==500){
    //   alert("添加失败")
    // }
  })
  dialogFormVisible = false;
  // window.location.reload();
}
const form = reactive({
  "foodId":"",
  "foodName":"",
  "price":"",
  "foodIntroduction":"",
  "photo":"",
  "isdelete":0,
})
//选择商品
const changeChecked=(name)=>{
  for (let i in allgoods.value){
    if(allgoods.value[i].foodName == name){
        allgoods.value[i].checked = !allgoods.value[i].checked
    }
  }
  // for (let i in allgoods.value){
  //   if(allgoods.value[i].checked){
  //       console.log(allgoods.value[i].foodName)
  //   }
  // }
}
const deleteGoods =()=>{
  const deletelist = ref([])
  for(let i in allgoods.value){
    if(allgoods.value[i].checked) {
      deletelist.value.push(allgoods.value[i])
    }
  }
  console.log(deletelist.value)
  for(let i in deletelist.value){
    deleteGoodsData(deletelist.value[i])
  }
  alert("删除成功！！")
  // for (let i in deletelist.value) {
  //   deleteGoodsData(deletelist.value[i].foodName).then(res => {
  //     alert(res.data)
  //   })
  // }
}
</script>
<style scoped lang="less">
.wrpper{
  border: 2px solid red;
  width: 1000px;
  margin: 0 auto;
  .goods{
    .goods-num{
      font-weight: 700;
      font-size: 20px;
    }
    table{
      border-collapse: collapse;
      margin-top: 20px;
      tr{
        border-bottom: 1px solid #f0f0f0;
          th{
            background-color: #f3f3f3;
            height: 45px;
            &:nth-child(1){
              width: 50px;
              padding-left: 10px;
            }
          }
          td{
            padding-top: 10px;
            padding-bottom: 10px;
            img{
                width: 80px;
                height: 80px;
                border: 1px solid #eeeeee;
              }
            &:nth-child(1){
              text-align: center;
              }
            &:nth-child(3){
              width: 600px;
              padding-left: 20px;
              padding-right: 50px;
              &:hover{
                color:#e2231a;
                cursor: pointer;
              }
              }
            &:nth-child(4){
              width: 80px;
              text-align: center;
            }
            &:nth-child(5){
              width: 80px;
              text-align: center;
            }
            &:nth-child(6){
              width: 120px;
              text-align: center;
              font-weight: 700;
            }
            &:nth-child(7){
              width: 80px;
              text-align: center;
              &:hover{
                cursor: pointer;
                color: #e2231a;
              }
            }
            }

      }
    }
  }
  .footer{
      span{
        cursor: pointer;
        margin-right: 10px;
      }
      .addGood{
      }
      .delete{
      }
    }
}
</style>
