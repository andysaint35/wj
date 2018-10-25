import share from '../../components/share/share';

export default {
  name: 'list',
  data(){
    return {
      showMash: false,
      listData: []
    }
  },
  components: {
    share
  },
  created(){
    
  },
  mounted(){
    this.getFullScoreList();
  },
  activated(){
    //this.timeCountDown();
  },
  methods:{
    getFullScoreList(){
      this.axios.get('/api/admin/db/getFullScoreList').then(res=>{
        if(res.flag==0){
          this.listData = res.data;
          
        }
      })
    },
    mask(){
      this.showMash = true;
    }
  }
 

}