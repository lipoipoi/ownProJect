<template>
   <div class="pagination">
       <ul class="paginationList">
           <li ><a href="javascript:void(0)" @click="firstPage()">«</a></li>
           <li v-if="pageVal.current>3"><a href="javascript:void(0)">...</a></li>
           <li v-for="(item,i) in pageArr"><a href="javascript:void(0)" :class="item==pageVal.current?'pageAcitve':''" @click="goto(item)">{{item}}</a></li>
           <li v-if="pageVal.allPage-pageVal.current>=3"><a href="javascript:void(0)">...</a></li>
           <li><a href="javascript:void(0)" @click="lastPage()">»</a></li>
       </ul>
   </div>
</template>
<script>
  module.exports ={
        data:function(){
            return{pageIndex:'',pageArr:[1,2,3,4,5],allPage:''}
        },
        props:["pageVal"],
        methods:{
           firstPage:function(data){
               this.pageArr=this.pageArr.map((item,i)=>{return item=i+1})
               this.pageVal.current=1;
                this.$emit('getIndex',this.pageVal);
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            },
           lastPage:function(){
               const that = this;
               this.pageArr=this.pageArr.map((item,i)=>item=that.pageVal.allPage-(that.pageArr.length-i-1));
               this.pageVal.current=this.pageVal.allPage;
                this.$emit('getIndex',this.pageVal);
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            },
           goto:function(current){
               const that = this;
               this.pageVal.current=current;
               var arrMiddle=Math.floor(this.pageArr.length/2);
               if(current>this.pageArr[arrMiddle]){
                   if(this.pageVal.allPage-current>=3){
                    this.pageArr= this.pageArr.map((item,i)=>{return i<=arrMiddle?item=current-(arrMiddle-i):item=current+(i-arrMiddle)})
                   }else if(this.pageVal.allPage-current<=2&&this.pageVal.allPage-current>=0){
                    this.pageArr= this.pageArr.map((item,i)=>{return that.pageVal.allPage-current>0?that.pageVal.allPage-(that.pageArr.length-i-1):that.pageVal.allPage-(that.pageArr.length-i-1)})
                   }
               }else{
                   if(current>=3){
                    this.pageArr =this.pageArr.map((item,i)=>{return i<=arrMiddle?item=current-(arrMiddle-i):item=current+(i-arrMiddle)})
                   }else if(current ==2){
                      this.pageArr =this.pageArr.map((item,i)=>{return i<=arrMiddle?item=current-(arrMiddle-i-1):item=current+(i-arrMiddle+1)}) 
                   }
               }
               
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                this.$emit('getIndex',this.pageVal);
            }
        }   
    }
</script>
<style>
.pagination{
    height: 40px;
    margin: 10px 0 0 10px; 
    display: block;
    line-height: 2em;
}
.paginationList{
    padding: 0;
    list-style: none;
    display: inline-block;
    margin: 0;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
.paginationList li{
    float: left;
    font-size: 14px;
    word-break: break-word;
    display: inline;
    line-height: 2em;
}
.paginationList>li>a{
    color: #999;
    background-color: transparent;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
    font-size: 14px;
}
.paginationList>li:first-child>a{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left-width: 1px;
}
.paginationList>li:last-child>a{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}
.paginationList>li>.pageAcitve{
     color: #80bd01;
}
</style>