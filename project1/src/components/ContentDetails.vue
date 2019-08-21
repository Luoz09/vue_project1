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
        <div class="btnBox">
            <button class="btn" @click="addGoodsInCar()">加入购物车</button>
            <button class="btn" @click="returnHistory()">返回</button>
        </div>
        
        <i class="fa fa-shopping-cart shoppingCar"  @click="shopCar()">
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
        },
        returnHistory () {
            this.$router.go(-1)
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
.btnBox {
    position: absolute;
    width: 100%;
    bottom: 20px;
}
.btn {
    background: rgb(247, 203, 138);
    width: 30%;
    border: none;
    line-height: 40px;
    margin: 0 10px;
}
.shoppingCar {
    font-size:2.5em;
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
    left: 20px;
    font-size: 18px!important;
    background: red;
    border-radius: 50%;
    line-height: 20px;
    width: 20px;
}
</style>
