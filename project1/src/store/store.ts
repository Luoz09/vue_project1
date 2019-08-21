import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
         shopCarLists: [],
         lists: [
            { src:"static/Images/list1.jpg",id:"111", name:"图片1", originPrice: "120", price: "100" },
            { src:"static/Images/list2.jpg",id:"222", name:"图片2", originPrice: "2200", price: "1700" },
            { src:"static/Images/list3.jpg",id:"333", name:"图片3", originPrice: "88", price: "66" },
            { src:"static/Images/list4.jpg",id:"444", name:"图片4", originPrice: "33", price: "9" },
            { src:"static/Images/list1.jpg",id:"222", name:"图片2", originPrice: "53", price: "19" },
            { src:"static/Images/list2.jpg",id:"555", name:"图片6", originPrice: "73", price: "39" }
         ],
         countGoodsLists: []
      },
      mutations: {
          addShopCarData (state,obj) {
            this.state.shopCarLists.push({
                id: obj.id,
                src: obj.src,
                name: obj.name,
                num: obj.num,
                price: obj.price,
                isCount: false,
            })
          },
          addCountGoodsLists (state,obj) {
            this.state.countGoodsLists.push({
                countData: obj.countData,
                countMoney: obj.countMoney,
            })
          }
      },
      actions: {

      } 
})