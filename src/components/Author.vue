<template>
  <div class="container">
      <div class="container_inner">
            <SlideBar></SlideBar>
      </div>
  </div>
</template>
<script>
    module.exports={
        data:function(){
            return{}
        },
        created:function(){
            this.$http({url:"https://cnodejs.org/api/v1/user/"+this.$route.query.author,method:'get'})
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        },
        components:{'SlideBar':require('./../common/SlideBar.vue')}
    }
</script>
