<template>
  <div> 
      <transition-group name="list-out"  tag="div" class="Imglist">
        <img v-for="(item,index) in ImgLists" 
             v-show = "curIndex == index"
            :key="index+1" :src="item" height="140" width="100%" />
      </transition-group>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
    data () {
       return {
           ImgLists : [
               'static/Images/1.jpg', 'static/Images/2.jpg', 'static/Images/3.jpg', 'static/Images/4.jpg'],
            curIndex: 0,
       }
    },
    methods : {
        play() {
            setInterval(this.autoPlay,2000)
        },
        autoPlay() {
             this.curIndex  ++ ;
             if (this.curIndex >= this.ImgLists.length){
                 this.curIndex = 0
             }
        }
    },
    mounted(){
        this.play();
    }
}
</script>

<style>

.Imglist {
    height: 140px;
    width: 100%;
    overflow: hidden;
}

.Imglist img {
    position: absolute;
    left: 0;
    top: 40px;
}


.list-out-enter {
     transform: translateX(100%)
}

.list-out-enter-to {
    transition: all .5s;
    transform: translateX(0%);
    
}

.list-out-leave {
    transform: translateX(0%)
}

.list-out-leave-to {
    transition: all .5s;
    transform: translateX(-100%); 
    
}

</style>