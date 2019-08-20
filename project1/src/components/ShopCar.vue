<template>
   <div style="height:calc(100% - 40px)">
       <div class="shopHeader"> 购物车明细 ( {{ goodsList.length }} ) </div>
       <!-- <div class="goodsInfo">
           <div class="fl" style="width:45%;height:100%;">
             <img src="static/Images/list1.jpg" height="100%" width="100%">
           </div>
           <div class="fl" style="width:51%;text-align:left;padding:0 2%;">
               <span> 真的真的真的很不错啊温泉偶是看了的骄傲</span>
               <div style="margin-top:7px;"> 单价：200  &emsp;  数量：3 </div>
               <div style="margin-top:7px;"> 总价：600  &emsp;  <button class="btn" @click="delGoodsInfo()">删除</button> </div>
           </div>
       </div> -->
       <div class="goodsInfoBox">
            <div v-for="(item,index) in goodsList" :key="index" class="goodsInfo">
                <div class="goodsHeader"> 
                    <input type="checkbox" class="checkbox" v-model="item.isCount"/>
                </div>
                <div style="height:110px;">
                    <div class="fl" style="width:45%;height:100%;">
                        <img :src="item.src" height="100%" width="100%">
                    </div>
                    <div class="fl" style="width:51%;text-align:left;padding:0 2%;height:100%">
                        <div style="height:50px;overflow: hidden;"> {{ item.name }} </div>
                        <div style="margin-top:5px;line-height:25px;"> 
                            单价：{{ item.price }}  &emsp;  
                            数量：{{ item.num }} 
                        </div>
                        <div style="margin-top:5px;line-height:25px;"> 
                            总价：{{ item.price * item.num }}  &emsp;  
                            <button class="del_btn" @click="delGoodsInfo(item.id)">删除</button> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="count">
                全选：<input type="checkbox" v-model="isChooseAll" @click="chooseAll()"  class="chooseAll">
                结算总价 ： {{ countGoodsMoney }}
                <button class="count_btn" @click="countGoodsInfo()"> 结算 </button> 
            </div>
       </div>
   </div>
</template>

<script>
import store from '@/store/store.ts'
export default {
    data () {
        return {
            isChooseAll: false,
        }
    },
    methods: {
        delGoodsInfo (id) { 
            store.state.shopCarLists  =  this.goodsList.filter((item) => {
                return item.id !== id
            })
        },
        chooseAll () {
            this.isChooseAll = !this.isChooseAll
            this.goodsList.forEach(item => {
                 item.isCount = this.isChooseAll
            })
        },
        countGoodsInfo () {
            //未选中的明细数组
            let notCountLists = this.goodsList.filter((item) => {
                  return !item.isCount
            })
            //选中待结算的明细数组
            let countLists = this.goodsList.filter((item) => {
                return item.isCount
            })
            if(countLists.length > 0) {
                let countData = []
                countLists.forEach((item) => {
                    countData.push(item)
                })
                store.commit("addCountGoodsLists",{
                    countData: countData,
                    countMoney: this.countGoodsMoney,
                })
                store.state.shopCarLists = notCountLists
                alert("结算成功")
            }
            else{
                alert("请选择结算的购物明细")
            }
           
        }
    },  
    computed: {
        goodsList () {
            //判断明细是否全选
            this.isChooseAll = store.state.shopCarLists.every(item=>{
                return item.isCount
            })
            return store.state.shopCarLists
        },
        countGoodsMoney () {
            let count = 0;
            this.goodsList.forEach((item) => {
                item.isCount && ( count += item.num * item.price ) 
            })
            return count
        }
    }
}
</script>

<style>
.goodsHeader {
    background: rgb(255, 235, 205,.8);
    width: 100%;
    height: 30px;
    margin-bottom: 5px; 
}
.shopHeader {  
    line-height: 40px;
    background: blanchedalmond;
}
.checkbox {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
}
.goodsInfoBox {
    overflow-y: auto;
    height: calc(100% - 80px)
}
.goodsInfo {
    padding: 10px;
    height: 145px;
}
.fl {
    float: left; 
} 

.del_btn {
    background: rgb(247, 203, 138); 
    width: 30%;
    border: none; 
}
.count {
    position: absolute;
    bottom: 40px;
    right: 20px; 
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.chooseAll {
    width: 20px;
    height: 20px;
    top: 5px;
    position: relative;
}
.count_btn {
    width: 20%; 
    margin-top: 5px;
    height: 30px;
    float: right;
}
</style>