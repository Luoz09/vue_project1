<template>
   <div style="height: calc(100% - 40px)">
       <div style="padding:15px 0;line-height:20px;">
           当前用户： admin
       </div>
       <div style="width:100%;height:calc(100% - 50px)">
           <div style="line-height:40px;background:blanchedalmond;"> 订单数量({{ countLists.length }})</div>
           <div  style="width:100%;height:calc(100% - 40px);overflow-y:auto;">
                <div class="countList" v-for="(item,index) in countLists" :key="index">
                    <div class="countHeader" style="text-align:left;padding-left:20px;line-height:30px;">
                        订单总价： {{ item.countMoney }}
                    </div>
                    <div style="height:100px;margin-top:5px;" v-for="(items,indexs) in item.countData" :key="indexs">
                        <div class="fl" style="width:45%;height:100%;">
                            <img :src="items.src" height="100%" width="100%">
                        </div>
                        <div class="fl countText">
                            <div>{{ items.name }} </div>
                            <div>单价：{{ items.price }} </div>
                            <div>数量：{{ items.num }} </div>
                            <div>总价：{{ items.num * items.price }} </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
import store from '@/store/store.ts'
export default {
    data() {
       return {
       }
    },
    methods: {
    },
    computed: {
        countLists () {
            return store.state.countGoodsLists
        }
    }
}
</script>

<style>
.countList {
    width: 90%;
    margin: 5px 5%;
    height: 135px;
}
.countHeader { 
    background: blanchedalmond;
}
.countText {
    width:51%;
    text-align:left;
    padding:0 2%;
    height:100px;
    line-height:25px;
}

</style>