<template>
	<div class="dialog2" v-show="dialog.show">
	  <div class="mask"></div>
	  <div class="dialogbox">
	    {{dialog.content}}
	    <a class="link left" href="#">前往商城</a>
	    <a href="javascript:void(0)" class="link right" @click="hide">取消</a>
	  </div>
	</div>
</template>
<script>
export default {
  name: 'dialog2',
  data() {
    return {
    	
    };
  },
  props:{
  	dialog:{
  		type:Object,
  		default:{
  			title:'',
  			content:'',
  			detail:'',
  			times:'',
  			show: false
  		}
  	}
  },
  methods:{
  	hide(){
  		this.dialog.show = false;
  	}
  }
};
</script>
<style scoped lang="scss">
	.dialog2{ display:block; position:fixed; left:0; top:0; height:100%; width:100%; z-index:100;}
.mask{
	background:#000;
	@include opacity(0.5);
	position:fixed;
	left:0;
	top:0;
	height:100%;
	width:100%;
	z-index:100;
}
.dialogbox{
	text-align:center;
	position:fixed;
	top:50%;
	left:50%;
	width:300px;
	padding:20px;
	padding-bottom:60px;
	margin-left:-150px;
	margin-top:-25%;
	background:#fff;
	border-radius:3px;
	z-index:101;
	color:#666;
	font-weight:lighter;
	text-align:center;
	line-height:20px;
	p{padding:5px 0;}
	h1{
		line-height:35px;
		padding-left:40px;
		padding-bottom:10px;
		
		background-size:30px auto;
		background-position:60px center;
		background-repeat:no-repeat;
		font-weight:normal;
		font-size:24px;
		text-align:center
	}
	a.link{
		position:absolute;
		height:40px; 
		line-height:40px;
		text-align:center;
		color:#fff;
		width:49.9%;
		bottom:0;
		background:#13d2b7;
	}
	a.left{
		left:0;
	}
	a.right{
		left:50.1%;
	}
}
</style>