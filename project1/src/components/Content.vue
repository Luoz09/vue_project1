<template>
   <div>
       <div class="main" v-for="(item,index) in lists" :key="index" @click="showDetails(item)">
           <img :src="item.src" height="100" width="100%" >
           <span style="line-height:30px;"> 
               <del> {{ item.originPrice }} </del>  &emsp;   
                     {{ item.price }} 
            </span> 
       </div> 
   </div>
</template>

<script>
import store from '@/store/store.ts'
export default {
    data () {
        return {
            lists : store.state.lists
        }
    },
    methods : {
         showDetails (item) {
            this.$router.push("ContentDetails?id="+item.id)
         }
    }, 
}
</script>

<style>
.main {
    width: 46%;
    height: 130px;
    padding: 2%; 
    float: left;
}
</style>