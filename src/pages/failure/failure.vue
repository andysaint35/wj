<template>
  <div>
    <div class="bg">
       <div class="box">
 		<div class="title">
 			
 		</div>
 		<div class="content">
 		   <div class="contentTitle">
                  恭喜你！答对10题<br />闯关成功！
                  <p>CONGRATULATIONS!<br />YOU HAVE ANSWERED ALL 10 QUESTIONS CORRECTLY!
                  </p>         
               </div>
               <div>
                     <router-link class="board" :to="{path:'/fullscore'}"></router-link>
               </div>
 		</div>
       		
       </div>
       <div class="btnBox">
       		<router-link class="btn1" :to="{path:'/'}"></router-link>
       		<router-link class="btn2" :to="{path:'/'}"></router-link>
       </div>
    </div>
  </div>
</template>
<script src="./fullscore.js"></script>
<style scoped lang="scss">
@import './fullscore.scss';
</style>
