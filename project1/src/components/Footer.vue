<template>
   <div>
        <router-link exact to="/"> 主页 </router-link>
        <router-link to="/Top"> 排行 </router-link>
        <router-link to="/ShopCar"> 购物车 </router-link>
        <router-link to="/Center"> 我的 </router-link>
   </div>
</template>

<script>
export default {

}
</script>

<style>

a {
    margin: 0;
    padding: 0;
    text-decoration: none; 
    width: 24%;
    text-align: center;
    color: black;
    display: inline-block;
}

.router-link-active{
      color:blue;
  }

</style>