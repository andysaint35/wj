import OptionA from '@/assets/images/question/a.png';
import OptionB from '@/assets/images/question/b.png';
import OptionC from '@/assets/images/question/c.png';
import imgCorrect from '@/assets/images/question/ico_right.png';
import { loading, toast } from 'mz-ui';

export default {
  name: 'question',
  data(){
    return {
      enNum: ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH'],
      cnNum: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      currentNum: 0,
      totalImg:[],
      totalImgLength:25,
      randomArray:[1,3,4,8,10,13,18,19,23,24],
      correctArray:[3,3,2,3,2,1,1,2,3,2],
      showCorrect:false,
      totalTime:10,
      totalQuestion:10,
      time:0,
      timer:null,
      nextTimer:null,
      imgCorrectUrl:imgCorrect,
      singleSelect:'',
      hasSelected:[],
      curObj: null,
      answer:[],
      userName:'',
      userTel:'',
      currentImgUrl:'',
      isMounted:false,
      selectArray:
      [
        {value:'1', imgUrl:OptionA},
        {value:'2', imgUrl:OptionB},
        {value:'3', imgUrl:OptionC}
      ]
    }
  },

  created(){
    var query = this.$route.query;
    
    this.userName = query.name;
    this.userTel = query.tel;
    this.getQuestion();

    
  },
  mounted(){
    this.isMounted = true;
    this.time = this.totalTime;
    this.timeCountDown();
  },
  activated(){
    this.hasSelected=[];
     var query = this.$route.query;
    
    this.userName = query.name;
    this.userTel = query.tel;

    if(this.isMounted){
      this.isMounted= false;
    }
    else{
      this.totalImg=[];
      this.getQuestion();
      this.currentNum=0;
      this.time = this.totalTime;
      this.timeCountDown();
    }
  },
  methods:{

    init(){
      this.currentNum=0;

    },

    getQuestion(){
      var _this = this;
      this.axios.get('/api/admin/db/get').then(res =>{
          this.randomArray = res.question;
          this.correctArray = res.answer;
          for(var i =0; i<this.randomArray.length; i++){
            _this.totalImg.push({img:require("@/assets/images/question/list/"+this.randomArray[i]+".png")});
          }
      })
    },

    postQuestion(postData){
      var _this = this;
      this.axios.post('/api/admin/db/add', postData).then(res =>{
          if(res.flag ==1){
            toast.info(res.msg);

            this.$router.replace('/');
            return false;
          }
          else{
            if(res.data.score==10){
                this.$router.replace('/fullscore?isFail=false');
            }
            else{
              this.$router.replace('/fullscore?isFail=true');
            }
          }
          
      })
    },

    answerSelect(event){
      this.curObj = event.target;
      this.singleSelect =event.target.value;
       
    },
    timeCountDown(){
        if(!this.timer){
          
          this.timer = setInterval(()=>{
            if(this.time > 0 && this.time<=this.totalTime){
              this.time--;
            }
            else{
              clearInterval(this.timer);
              this.timer = null;
              this.check();
            }
          },1000)
        }
    },
    check(){

      if(this.time!=0&&!this.singleSelect){
        toast.info('请选择答案！');
        return ;
      }

      if(!this.nextTimer){
        clearInterval(this.timer);
        this.timer = null;
        this.showCorrect = true;
        this.time = this.totalTime;
        this.hasSelected.push(this.singleSelect||'未选择');
        
        this.singleSelect='';
        this.nextTimer = setTimeout(()=>{
          this.curObj?this.curObj.checked=false:'';
          clearTimeout(this.nextTimer);
          this.nextTimer=null;
          this.next();
        },2000)
      }
    },
    next(){
      this.showCorrect = false;
      //this.totalQuestion-1
      if(this.currentNum >=this.totalQuestion-1){
        /* 保存数据 fullscore */
        this.postQuestion({
          question:JSON.stringify(this.randomArray),
          answer:JSON.stringify(this.hasSelected),
          name:this.userName,
          tel:this.userTel
        });
      }
      else{
        this.currentNum++;
        this.timeCountDown();
      }
      
    }
  },
  computed:{

    timeWidth(){
      return parseInt(100/this.totalTime*(this.time-1))+5+"%"
    },
    numColor(){
      if(this.time>0){
        return '#e06664';
      }
      else{
        return '#ffffff';
      }
    },
    imgUrl(){
      return this.totalImg[this.currentNum]&&this.totalImg[this.currentNum].img||"";
    }
  }
 
}