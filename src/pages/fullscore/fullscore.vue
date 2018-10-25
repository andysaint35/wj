<template>
  <div>
  <share :isShow = "showMash"></share>
    <div class="bg">
       <div class="box" :class="{failure:isFail}">
 		<div class="title">
 			
 		</div>
 		<div class="content">
 		   <div class="contentTitle">
                  {{cn}}
                  <p>{{en}}</p>         
               </div>
               <div>
                     <router-link class="board" :to="{path:'/list'}"></router-link>
               </div>
 		</div>
       		
       </div>
       <div class="btnBox">
       		<router-link class="btn1" :to="{path:'/'}"></router-link>
       		<a class="btn2" @click="mask"></a>
       </div>
    </div>
  </div>
</template>
<script src="./fullscore.js"></script>
<style scoped lang="scss">
@import './fullscore.scss';
</style>
