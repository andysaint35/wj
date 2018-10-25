import share from '../../components/share/share';


export default {
  name: 'fullscore',
  data(){
    return {
      isFail:false,
      cn:'',
      en:'',
      showMash: false
    }
  },
   components: {
    share
  },
  created(){
    var query = this.$route.query;
    this.isFail = JSON.parse(query.isFail);
    if(this.isFail){
      this.cn='好可惜，这次未能进入满分榜，下次再接再厉哦！';
      this.en='SOME OF YOUR ANSWERS WERE INCORRECT TRY AGAIN TO IMPROVE YOUR SCORE!';
    }
    else{
      this.cn='恭喜你！答对10题闯关成功！';
      this.en='CONGRATULATIONS! YOU HAVE ANSWERED ALL 10 QUESTIONS CORRECTLY!';
    }
  },
  mounted(){

  },
  activated(){
    //this.timeCountDown();
  },
   methods:{
    mask(){
      this.showMash = true;
    }
  }
 
}