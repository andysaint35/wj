
<template>
	<footer>
		<div class="tab">
			<router-link to="/"><i class="icon-tab tab-1"></i>首页</router-link><router-link to="#"><i class="icon-tab tab-2"></i>社区</router-link>
			<router-link to="/notice"><i class="icon-tab tab-3"></i>商城</router-link>
			<router-link to="/user"><i class="icon-tab tab-4"></i>我的</router-link>
		</div>
	</footer>
</template>
<script>
export default {
  name: 'footer-view',
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import '../../sass/common/application.scss';
body{background:#f1f1f1;}
a{ color:#666;text-decoration:none;}
a:hover{ }
header{
	@include linear-gradient(45, #f9a82a, #fe8820);
	height:40px;
	line-height:40px;
	text-align:center;
	color:#fff
}
section#body{
	height:auto;
	background:#f00;
}

footer{
	
	height:55px;
	border-top:1px solid #cdcdcd;
	position:fixed;
	bottom:0px; 
	width:100%;
	background:#fff;
	padding-top:5px;
}
footer .tab{
	display:flex;
}

footer .tab .icon-tab{
	background-size:30px auto;
	width:30px;
	height:30px;
	display:block;
	margin: 0 auto 2px;
}
.footerblock{ height:60px; }
.foottabCommon{
	flex:1;
	display:block;
	text-align:center;
	font-size:0.8rem;
}
footer .tab a {
	@extend .foottabCommon
}
footer .tab i.tab-1{
		background-position:left top;
}
footer .tab i.tab-2{
		background-position:left -30px;
}
footer .tab i.tab-3{
		background-position:left -60px;
}
footer .tab i.tab-4{
		background-position:left bottom;
}

#wrap{ position:absolute; height:100%; background:#ff0; width:100%; }

.dialog{ display:block; position:fixed; left:0; top:0; height:100%; width:100%; z-index:100;}
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
	position:fixed;
	top:50%;
	left:50%;
	width:300px;
	padding:20px;
	margin-left:-170px;
	margin-top:-20%;
	background:#fff;
	border-radius:3px;
	z-index:101;
	color:#666;
	font-weight:lighter;
	text-align:center;
	line-height:30px;
	h1{
		height:30px;
		line-height:35px;
		padding-left:40px;
		
		background-size:30px auto;
		background-position:80px center;
		background-repeat:no-repeat;
		font-weight:normal;
		font-size:24px;
		text-align:center
	}
}
</style>
