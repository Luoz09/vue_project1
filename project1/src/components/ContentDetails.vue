<template>
    <div>
        <img :src="item.src" height="200">
        <div style="line-height:40px;"> {{ item.name }} </div>
        <div style="line-height:40px;"> 
            <del> {{ item.originPrice }} </del>  &emsp; &emsp;
                  {{ item.price }}
        </div>
        <div> 
           购买数量：
           <input type="number"  v-model="num" />
           <div style="margin-top:20px;"> 总价：{{ countMoney }} </div>
        </div> 
        <button class="btn" @click="addGoodsInCar()">加入购物车</button> 

          <i class="fa fa-car shoppingCar"  @click="shopCar()">
                 <div class="details_goodsCount"> {{ goodsCount }} </div>
            </i>    
    </div>
</template>

<script>
import store from '@/store/store.ts'
export default {
    data () {
        return {
            item: {},
            num:0
        }
    },
    methods: {
        addGoodsInCar () {
            if (this.num == 0)
            {
                alert("请输入数量");
            }
            else{
                store.commit("addShopCarData",{
                    id: this.item.id,
                    src: this.item.src,
                    name: this.item.name,
                    num: this.num,
                    price: this.item.price
                })
                alert("添加购物车成功")
            }
        },
        shopCar () {
            this.$router.push({
                name: "ShopCar"
            })
        }
    },
    mounted () { 
        const id = this.$route.query.id
        this.item = store.state.lists.filter((item)=>{
            return item.id === id
        })[0]
    },
    computed: {
        countMoney () {
            return (this.item.price * this.num) || 0
        },
        goodsCount () {
            return store.state.shopCarLists.length
        }
    }
}
</script>

<style>
.btn {
    background: rgb(247, 203, 138);
    width: 30%;
    border: none;
    line-height: 40px;
    position: absolute;
    bottom: 20px;
    left: 35%;
}
.shoppingCar {
    font-size:2em;
    line-height:40px;
    position:absolute;
    left: 80%;
    bottom: 20%;
}
.details_goodsCount {
    z-index: 99;
    position: relative;
    color:white;
    top: -45px;
    left: 15px;
    font-size: 18px!important;
    background: red;
    border-radius: 50%;
    line-height: 20px;
    width: 20px;
}
</style>
