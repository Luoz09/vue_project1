<template>
   <div style="height:calc(100% - 40px)">
         <Header />
         <Banner />
         <Content class="contents"/>
   </div>
</template>

<script>
import Header from './Header'
import Banner from './Banner'
import Content from './Content'
export default {
    components: {
        Header,
        Banner,
        Content
    }
}
</script>

<style>
.contents {
    margin-top: 20px;
    height: calc(100% - 200px);
    overflow-y: auto;
}

</style>