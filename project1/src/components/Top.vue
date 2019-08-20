<template>
   <div style="height:calc(100% - 40px);">
       <div class="leftMenu">
           <ul>
               <li v-for="(item,index) in topMenuLists" @click="ChangeContent(index)" 
                   :key="index" :class="[index == curMenuIndex ? 'on' : '' ]">{{ item }}</li>
           </ul>
       </div>
       <div class="rightContent">
           <div class="content" v-for="(item,index) in showContent.lists" :key="index" 
                                style="height:calc(25% - 10px);padding:5px 0;" @click="showDetails(item)">
                <div style="height: calc(100% - 40px)">
                    <img :src="item.src" width="95%" height="100%">      
                </div>
                <div style="line-height:20px;">{{ item.name }}</div>
                <div style="line-height:20px;">
                    <del>{{ item.originPrice }}</del> &emsp;
                    {{ item.price }}
                </div> 
           </div>
       </div>
   </div>
</template>

<script>
export default {
    data () {
        return {
            topMenuLists: ["图片1","图片2","图片3","图片4"],
            topContentLists: [
                {id: "1",lists: [
                    { src: "static/Images/list1.jpg" , id: "111", name: "图片1", originPrice: "120" , price:"100" },
                    { src: "static/Images/list1.jpg" , id: "111", name: "图片1", originPrice: "120" , price:"100" },
                    { src: "static/Images/list1.jpg" , id: "111", name: "图片1", originPrice: "120" , price:"100" },
                    { src: "static/Images/list1.jpg" , id: "111", name: "图片1", originPrice: "120" , price:"100" },
                ]},
                {id: "2",lists: [
                    { src: "static/Images/list2.jpg" , id: "222", name: "图片2", originPrice: "1200" , price:"1000" },
                    { src: "static/Images/list2.jpg" , id: "222", name: "图片2", originPrice: "1200" , price:"1000" },
                    { src: "static/Images/list2.jpg" , id: "222", name: "图片2", originPrice: "1200" , price:"1000" },
                    { src: "static/Images/list2.jpg" , id: "222", name: "图片2", originPrice: "1200" , price:"1000" },
                ]},
                {id: "3",lists: [
                    { src: "static/Images/list3.jpg" , id: "333", name: "图片3", originPrice: "12" , price:"10" },
                    { src: "static/Images/list3.jpg" , id: "333", name: "图片3", originPrice: "12" , price:"10" },
                    { src: "static/Images/list3.jpg" , id: "333", name: "图片3", originPrice: "12" , price:"10" },
                    { src: "static/Images/list3.jpg" , id: "333", name: "图片3", originPrice: "12" , price:"10" },
                ]},
                 {id: "4",lists: [
                    { src: "static/Images/list4.jpg" , id: "444", name: "图片4", originPrice: "140" , price:"90" },
                    { src: "static/Images/list4.jpg" , id: "444", name: "图片4", originPrice: "140" , price:"90" },
                    { src: "static/Images/list4.jpg" , id: "444", name: "图片4", originPrice: "140" , price:"90" },
                    { src: "static/Images/list4.jpg" , id: "444", name: "图片4", originPrice: "140" , price:"90" },
                ]}
            ],
            curMenuIndex: "0",
        }
    },
    methods: {
        ChangeContent (index) {
            this.curMenuIndex = index;
        },
        showDetails (item) {
            this.$router.push("ContentDetails?id="+item.id)
         }
    },
    computed: {
        showContent () {
            return this.topContentLists[this.curMenuIndex]
        }
    }
    
}
</script>

<style>
ul,li {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    padding: 20px;
}
.leftMenu {
    width: 27%;
    height: 80%;
    background: blanchedalmond;
    position: absolute;
    top: 5%;
}
.rightContent {
   width: 70%;
   height: 98%;
   background: blanchedalmond;
   position: relative;
   top: 1%;
   left: 28.5%;
}

.on {
    color:blue;
}

</style>