<template>
    <div style="height:100%;">  
        <router-view></router-view>
        <Footer class="footer" />
    </div>
</template>

<script> 
import Footer from './Footer'

export default {
  name: 'Index',
  components: { 
      Footer,
      
  },
}
</script>

<style> 
.footer {
    position: absolute;
    bottom: 0px;
    line-height: 40px;
    background: blanchedalmond;
    width: 100%;
}

</style>
