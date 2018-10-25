<template>
	<div v-show="isShow" @click="close">
	  <div class="mask"></div>
	  <div class="share"></div>
	</div>
</template>
<script>
export default {
  name: 'dialog1',
  data() {
    return {
    	show : this.isShow
    };
  },
  props:{
  	isShow: {
  		type: Boolean,
  		defalut: false
  	}
  },
  methods:{
  	close(){
  		this.isShow=false;
  	}
  }
}; 
</script>
<style scoped lang="scss">
	.mask{ background:#000; opacity:0.8; position:fixed; left:0; top:0; right:0; bottom:0; width:100%; height:100%; z-index:1000}
	.share{
		position:fixed;  top:0; right:10px; 
		width:180px; height:180px;
		background:url('#{$img-path}/info/ico_share.png') no-repeat;
		background-size:contain;
		z-index:1001;
	}
</style>