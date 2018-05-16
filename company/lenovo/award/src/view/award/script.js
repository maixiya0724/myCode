
import prize from './component/prize.vue';
import alert from "./component/alert.vue"
import superPrize from "./component/superPrize.vue" 
import superAlert from "./component/superAlert.vue"


export default{
    components:{
        prize:prize,
        alert:alert,
        superPrize:superPrize,
        superAlert:superAlert,
    },
    data(){
        return{
          startTime:'',//活动开始时间
            endTime:''//活动结束时间
        }
    },
    mounted(){
       //this.getActivityTime();
       // this.promoteGame()
    },
    methods:{
        //遮罩层和弹窗显示
        layerShow(ct){
            $(ct).show();
            $('.layer').show()
        },
        //遮罩层和弹窗隐藏
        layerHidden(ct){
            $(ct).hide();
            $('.layer').hide()
        },
        myGift(){
            $('.my-gift').hide();
            $('.gift-popup').show()
        },
        myAddress(){

        },
        //获取活动时间
        getActivityTime(){
                var _url = "/back/game/api/lottery/queryDateOfActivity.do";
                var ts = this;
                ts.jqajax(_url,{type:"post",dataType:"json"},function(res){
                   console.log('结果',res)
                    ts.startTime=res.startTime;
                   ts.endTime=res.endTime
                    console.log(ts.startTime);
                    console.log(ts.endTime)
                });
        },
        //获取活动推广游戏
        promoteGame(){
            var _url="/back/game/api/lottery/queryActivityGame.do";
            var ts=this;
            ts.jqajax(_url,{type:"get",dataType:"json"},function(res){
                console.log(res)
            })
         }


    },

}