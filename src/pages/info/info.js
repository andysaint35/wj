
import { loading, toast } from 'mz-ui';

export default {
  name: 'info',
  data(){
    return {
      isFail:false,
      cn:'',
      en:''
    }
  },

  created(){
    
  },
  mounted(){

  },
  activated(){
    //this.timeCountDown();
  },
  methods:{
    check(){
      if(!this.$refs.infoName.value){
        toast.info('请填写姓名');
        return false;
      }
      if(!this.$refs.infoTel.value){
        toast.info('请填写手机号');
        return false;
      }
      if(!this.$refs.infoTel.value.match(/1\d{10}/)){
        toast.info('请正确填写手机号');
        return false;
      }
      if(!this.$refs.infoName.value.match(/^([a-zA-Z0-9])+@([a-zA-Z0-9])+(\.[a-zA-Z0-9])+/)){
        toast.info('请正确填写邮箱');
        return false;
      }
      this.$router.replace('/question?name='+this.$refs.infoName.value+'&tel='+this.$refs.infoTel.value);
    }
  }
 
}