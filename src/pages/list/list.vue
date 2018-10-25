<template>
  <div>
      <share :isShow = "showMash"></share>
    <div class="bg">
       <div class="box">
       		<div class="title">
       			<div class="cn">满分榜</div>
       			<div class="en">FULL SCORE LIST</div>
       		</div>
       		<div class="content">
       			<div class="topMask"></div>
       			<div class="listBox">
       				<ul>
       					<li v-for="item in listData">{{item.name}}</li>
       					
       				</ul>
       			</div>
       			<div class="bottomMask"></div>
       		</div>
       		
       </div>
       <div class="btnBox">
       		<router-link class="btn1" :to="{path:'/'}"></router-link>
       		<a class="btn2" @click="mask"></a>
       </div>
    </div>
  </div>
</template>
<script src="./list.js"></script>
<style scoped lang="scss">
@import './list.scss';
</style>
