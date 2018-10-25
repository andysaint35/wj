<template>
  <div>
    <div class="bg">
       <div class="box" :class="{failure:isFail}">
    <div class="title">
      
    </div>
    <div class="content">
       <div class="contentTitle">
                  请填写正确信息<br />
五位幸运儿将收到获奖的邮件
                  <p>PLEASE LEAVE YOUR CONTACT INFORMATION<br />
THE 5 LUCKY WINNERS WILL BE NOTIFIED VIA EMAIL</p>         
               </div>
               <form>
                     <div class="formBox">
                           <div class="formLine">
                                 <div class="label">
                                       姓名<br />
                                       NAME
                                 </div>
                                 <div class="text">
                                       <input name="infoName" ref="infoName" />
                                       <p>
                                          *请填写您的姓名<br />
                                          *Please state your name
                                       </p>
                                 </div>
                           </div>
                           <div class="formLine">
                                 <div class="label">
                                       手机<br />
                                       TEL
                                 </div>
                                 <div class="text">
                                       <input name="infoTel" ref="infoTel" />
                                       <p>
                                          *请填写正确的联系方式<br />
                                          *Please fill in your phone number
                                       </p>
                                 </div>
                           </div>
                     </div>
               </form>
        </div>
       </div>
       <a class="next" @click="check"></a>
    </div>
  </div>
</template>
<script src="./info.js"></script>
<style scoped lang="scss">
@import './info.scss';
</style>
