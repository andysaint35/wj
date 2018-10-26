<template>
  <div>
    <div class="bg">
    	<div class="block"></div>
        <div class="btn">
        	<router-link class="btn1" :to="{path:'/rules'}"></router-link>
        	<router-link class="btn2" :to="{path:'/list'}"></router-link>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './home.scss';
</style>
