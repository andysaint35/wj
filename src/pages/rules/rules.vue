<template>
  <div>
    <div class="bg">
       <div class="box">
       		<div class="title">
       			<div class="cn">活动说明</div>
       			<div class="en">QUIZ RULES</div>
       		</div>
       		<div class="content">
       			<p>请回答10道选择题，每题回答时间为15秒。<br /><br />
我们将从全部答对的参与者中随机抽取5位，赠送幸运礼品。<br /><br />
参与者可多次答题，以获得满分。</p>
       			<p>Please answer 10 multiple choice questions, you have only 15 seconds to answer each question. <br /><br />
Five lucky participants who answer all the questions correctly will receive a prize each.<br /><br />
You may take the quiz multiple times to improve your score.</p>
       		</div>
       		
       </div>
       <router-link class="next" :to="{path:'/info'}"></router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './rules.scss';
</style>
