<template>
   <div>
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

</style>