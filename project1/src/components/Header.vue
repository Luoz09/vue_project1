<template>
    <div class="header">
        <span style="text-algin:center;">shopping</span>
        <div class="RightIcon">
          <!--   <i class="fa fa-user" style="font-size:1.5em;line-height:40px;margin-right:20px;"></i> -->
            <i class="fa fa-shopping-cart"  style="font-size:2em;line-height:40px;" @click="shopCar()"></i>
            <div class="goodsCount"> {{ goodsCount }} </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/store.ts'
export default {
    data () {
        return {

        }
    },
    methods: {
        shopCar () {
            this.$router.push({
                name:"ShopCar",
            })
        }
    },
    computed: {
        goodsCount () {
            return store.state.shopCarLists.length
        }
    }
}
</script>

<style>
.header{
    background: blanchedalmond;
    height: 40px;
    line-height: 40px;
}
.RightIcon{  
    position: absolute;
    right: 30px;
    top: 0px;
}
.goodsCount {
    z-index: 99;
    position: absolute;
    right: -3px;
    top: 2px;
    color:white;
    background: red;
    border-radius: 50%;
    line-height: 16px; 
    width: 16px;
}
</style>