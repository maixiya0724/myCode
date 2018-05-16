<template>
	 <!-- 幸运抽奖 -->
    <div  class="luckyAwardMain">
        <div class="title">幸运抽奖</div>
        <ul ref="bg" id="bg" class="cricle">
            <li v-for="(item,index) in awardList">
                <img class="awardImg" :src="item.imageUrl" alt="礼包图片"/>
            </li>
        </ul>
        <a class="start" @click="startAward"></a>
    </div>
</template>

<style scoped lang="less" src="./less.less"></style>

<script>
import AES from "../../../../static/js/libs/AES.js"
import axios from 'axios';
import Alert from "./alert.vue"

	export default{
		components:{
            Alert:Alert
		},
    data(){
      return {
        isture: false, // 是否在抽奖
        playnum: 5, // 抽奖次数
        superIsTrue: false,
        awardList: ["https://app.caizhanbao.cn/2.png", "https://app.caizhanbao.cn/3.png", "https://app.caizhanbao.cn/2.png", "https://app.caizhanbao.cn/4.png", "https://app.caizhanbao.cn/5.png", "https://app.caizhanbao.cn/6.png", "https://app.caizhanbao.cn/7.png", "https://app.caizhanbao.cn/8.png", "https://app.caizhanbao.cn/9.png", "https://app.caizhanbao.cn/10.png", "https://app.caizhanbao.cn/11.png", "https://app.caizhanbao.cn/12.png"],
        userId:'10114895506',
        prizeId:"",
        prizeMsg:"",
        prizeCode:"",
        token:"ZAgAAAAAAAGE9MTAxMTY5MzkwNDAmYj0yJmM9NCZkPTE2ODYwJmU9QkJEODM3MEJBNTg3ODgyRDVDMEVDNzdEOEE3NjA5QUExJmg9MTUyNjExMTg2NjcxOSZpPTMwMjQwMCZvPTYwLjI0Ny4xMDQuOTQmcD0wJnE9MCZ1c2VybmFtZT0xODMxMDU2NjE5NyZpbD1jboHt8GczDDUq29HD7Qxusy4",

      }
    },
    mounted() {
        this.lottery.init('lottery')
        this.getUserInfo()     
        this.getaward()   
        this.clickfunc()    
    },
    computed: {
        lottery: function() {
            var lottery = {
                index: 0, //当前转动到哪个位置，起点位置
                count: 0, //总共有多少个位置
                timer: 0, //setTimeout的ID，用clearTimeout清除
                speed: 20, //初始转动速度
                times: 0, //转动次数
                cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
                prize: -1, //中奖位置
                init: function(id) {
                    if ($('#' + id).find('.lottery-unit').length > 0) {
                        var $lottery = $('#' + id);
                        var $units = $lottery.find('.lottery-unit');
                        this.obj = $lottery;
                        this.count = $units.length;
                        $lottery.find('.lottery-unit.lottery-unit-' + this.index).addClass('active');
                    };
                },
                roll: function() {
                    var index = this.index;
                    var count = this.count;
                    var lottery = this.obj;
                    $(lottery).find('.lottery-unit.lottery-unit-' + index).removeClass('active');
                    index += 1;
                    if (index > count - 1) {
                        index = 0;
                    };
                    $(lottery).find('.lottery-unit.lottery-unit-' + index).addClass('active');
                    this.index = index;
                    return false;
                },
                stop: function(index) {
                    this.prize = index;
                    return false;
                }
            };
            return lottery
        }
    },
    
    methods: {
        
        startAward() { //点击开始抽奖开始抽奖
            
            if (this.isture) return; // 如果在抽象点击无效果
            this.isture = true; // 标志为 在执行
                this.clickfunc();
          
        },

        rotateFunc(awards, angle, text) { // 旋转的函数
            console.log(angle + "" + text)
            var that = this
            this.isture = true;
            $('#bg').stopRotate();
            $('#bg').rotate({
                angle: 0, //旋转的角度数
                duration: 5000, //旋转时间
                animateTo: angle + 1440, //给定的角度,让它根据得出来的结果加上1440度旋转
                callback: function() {
                    that.isture = false; // 标志为 执行完毕
                    $(".layer").show()
                    $(".alert").show()
                }
            });
        },

        clickfunc: function() {
                    let encrypt =this.AES(this.userId).toString()
                    let that = this
                    // 
                    let url = "/back/api/lottery/syn/userLuckyDraw.do?lenovoId=owoluXZgxDn0jDMb8iQhsQ=="
                this.jqajax(url,{type:"POST",dataType:"json"},function(res){
                    console.log(res)
                    that.prizeId=res.gmDrGoods.id
                    that.prizeMsg = res.msg
                    that.prizeCode=res.gmDrGoodsDetailed.code;
                    window.sessionStorage.setItem("prize",that.prizeMsg); 
                    window.sessionStorage.setItem("prizeCode",that.prizeCode);
                })
           

            switch (that.prizeId) {
                case 8:
                    this.rotateFunc(1, -15, that.prizeMsg);
                    break;
                case 9:
                    this.rotateFunc(2, -45, that.prizeMsg);
                    break;
                case 10:
                    this.rotateFunc(3, -75, that.prizeMsg);
                    break;
                case 11:
                    this.rotateFunc(4, -105, that.prizeMsg);
                    break;
                case 12:
                    this.rotateFunc(5, -135, that.prizeMsg);
                    break;
                case 13:
                    this.rotateFunc(6, -165, that.prizeMsg);
                    break;
                case 14:
                this.rotateFunc(7, -195, that.prizeMsg);
                break;
                case 15:
                    this.rotateFunc(8, -225, that.prizeMsg);
                    break;
                case 16:
                    this.rotateFunc(9, -255, that.prizeMsg);
                    break;
                case 17:
                    this.rotateFunc(10, -285, that.prizeMsg);
                    break;
                case 18:
                    this.rotateFunc(11, -315, that.prizeMsg);
                    break;
                case 19:
                    this.rotateFunc(12, -345, that.prizeMsg);
                    break;
            }
        },

       

        getUserInfo() { // 通过token来获取用户的基本信息
            var ts = this
            let url = "/lenovoId/v3/a/u/user/out/info/iqiyi?token=" + this.token

            axios.get(url).then(function(res) {
                ts.user = res.data.data.user
                ts.userId = ts.user.openid+""
                console.log(ts.userId)
            })
        },
       
        getaward(){
            let url = "/back/api/lottery/queryActivityImage.do"
            let that = this
            this.jqajax(url,{type:"GET",dataType:"json"},function(res){
                console.log(res)
                that.awardList =res.gmDrGoodsList.slice(0,12);

            })
        },

        AES(str){
            return Encrypt(str+'').toString()

        }


}
	}
</script>