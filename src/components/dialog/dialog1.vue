<template>
	<div class="dialog1" v-show="dialog.show">
	  <div class="mask"></div>
	  <div class="dialogbox">
	    <h1>{{dialog.title}}</h1>
	    {{dialog.content}}
	    <p><b>{{dialog.detail}}</b></p>
	  </div>
	</div>
</template>
<script>
export default {
  name: 'dialog1',
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
  }
};
</script>
<style scoped lang="scss">
	.dialog1{ display:block; position:fixed; left:0; top:0; height:100%; width:100%; z-index:100;}
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
		margin-bottom:10px;
	
		background-size:30px auto;
		background-position:60px center;
		background-repeat:no-repeat;
		font-weight:normal;
		font-size:24px;
		text-align:center
	}
}
</style>