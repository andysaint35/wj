<template>
  <div>
    <div class="bg">
       <div class="box">
       		<div class="title">
       			<div class="cn">第{{cnNum[currentNum]}}题</div>
       			<div class="en">THE {{enNum[currentNum]}} QUESTION</div>
       		</div>
       		<div class="content">
       			<img :src=imgUrl class="questionImg" />
       			<ul class="option">
       				<li v-for="(item, index) in selectArray" >
       					<input type="radio" class="magic-radio" name="options" @click="answerSelect" :value="item.value" /><img :src="item.imgUrl">
       				</li>
       			</ul>
       			<ul class="option optionForCheck">
       				<li v-for="(item, index) in selectArray"  :class="{correct: correctArray[currentNum]==(index+1)&&showCorrect}">
       					<img class="imgCorrect" v-show="correctArray[currentNum]==(index+1)&&showCorrect" :src="imgCorrectUrl" />
       				</li>
       			</ul>
       		</div>
       		<div class="timeCount">
       			<span class="timeShow" :style="{color:numColor}">{{time}}</span>
       			<i class="lock"></i>
       			<div class="lock_bg">
       				<span class="animateLock" :style="{width:timeWidth}"></span>
       			</div>
       		</div>
       </div>
       	<a class="next" @click="check"></a>
    </div>
  </div>
</template>
<script src="./question.js"></script>
<style scoped lang="scss">
@import './question.scss';
</style>
