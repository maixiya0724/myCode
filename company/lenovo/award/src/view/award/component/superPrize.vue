<template>
	<div class="superPrize">
		<div class="superBtn">豪华抽奖</div>
		<div class="superPrize"> 
			<div class="draw" id="lottery">
				<div :class="'item lottery-unit lottery-unit-'+index"  v-for="(item,index) in awardList" >
					<div  :style="'background-image:url('+item.imageUrl+');'" class="img"></div>
					<p>{{item.name}}</p>
				</div>
				<div @click="startSupAward" class="start">
					<p>单次抽奖消耗积分</p>
				</div>
		
	</div> 
			</div>
		</div>
</template>

<style scoped lang="less" src="./less.less"></style>


<script>
import axios from 'axios';

export default {
		components:{

		},
		data(){
			return {
				lottery:{
					index: -1,    //当前转动到哪个位置，起点位置
					count: 0,     //总共有多少个位置
					timer: 0,     //setTimeout的ID，用clearTimeout清除
					speed: 20,    //初始转动速度
					times: 0,     //转动次数
					cycle: 50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
					prize: -1,    //中奖位置
					init: function(id) {
						if ($('#' + id).find('.lottery-unit').length > 0) {
							var $lottery = $('#' + id);
							var  $units = $lottery.find('.lottery-unit');
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
				},
				awardList:[],
				click:false,
        		token:"ZAgAAAAAAAGE9MTAxMTY5MzkwNDAmYj0yJmM9NCZkPTE2ODYwJmU9QkJEODM3MEJBNTg3ODgyRDVDMEVDNzdEOEE3NjA5QUExJmg9MTUyNjExMTg2NjcxOSZpPTMwMjQwMCZvPTYwLjI0Ny4xMDQuOTQmcD0wJnE9MCZ1c2VybmFtZT0xODMxMDU2NjE5NyZpbD1jboHt8GczDDUq29HD7Qxusy4",
        		prizeMsg:'',
        		prizeId:"",

			}
		},
		mounted(){
			//this.init()
			this.getaward()
			this.getUserInfo()
		},
		methods:{ 
			//获取豪华奖品
			 getaward(){
	            let url = "/back/api/lottery/queryActivityImage.do"
	            let that = this
	            this.jqajax(url,{type:"GET",dataType:"json"},function(res){
	                console.log(res)
	                let length = res.gmDrGoodsList.length
	                that.awardList =res.gmDrGoodsList.slice(length-8,length);
	                console.log(that.awardList);
	            })
	        },
 			// 豪华抽奖 
        startSupAward() { // 开始豪华抽奖
        	this.lottery.init('lottery');
        	this.requestData()

            if (this.click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;
            } else {
                lottery.speed = 100;
                this.roll(); //转圈过程不响应click事件，会将click置为false
                this.click = true; //一次抽奖完成后，设置click为true，可继续抽奖      
                return false;
            }
        },


        roll() { // 滚动函数
        	let that = this;
            that.lottery.times += 1;

            that.lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
            	
            //console.log(that.lottery.prize+'/'+that.lottery.index)

            if (that.lottery.times > that.lottery.cycle + 10 && that.lottery.prize == that.lottery.index) {
            	// 匹配到中奖的位置 转动到足够的圈数，并且中奖位置等于转动的位置时，停止转动 清除定时器，然后把所有参数归零
                clearTimeout(that.lottery.timer);

              //console.log("结束了")
              	// 归零
              	//that.lottery.index=-1;
                that.lottery.prize = -1;
                that.lottery.times = 0;
                that.lottery.speed=20;
                that.click = false;
                 setTimeout(function(){
                     $(".layer").show()
                     $(".superAlert").show()
                 },1500)

            } else {


                if (that.lottery.times < that.lottery.cycle) {// 控制转动速度  加速
                	//console.log("减速")
                    that.lottery.speed -= 10;
                } else if (that.lottery.times == that.lottery.cycle) {// 定义中奖位置
                	console.log(that.prizeId);
                	switch(that.prizeId) {
                		case "haohualibaoa":
                			that.lottery.prize = 0; 
                			break;
                		case "haohualibaob" :
                			that.lottery.prize = 1; 
                			break;
            			case "jifendiannao" :
            			that.lottery.prize = 2; 
            				break;
            			case "jifenyinxiang" :
            			that.lottery.prize = 3; 
            				break;
            			case "jifenjianpan" :
            			that.lottery.prize = 4; 
            				break;
            			case "jifenshubiao" :
            			that.lottery.prize = 5; 
            				break;
            			case "jifenermai" :
            			that.lottery.prize = 6; 
            				break;
            			case "jifenupan" :
            			that.lottery.prize = 7; 
            				break;
                	}

                  

                   


                } else {// 转动次数大于规定次数时  该减速了
                	//console.log("加速")

                    if (that.lottery.times > that.lottery.cycle + 10 && ((that.lottery.prize == 0 && that.lottery.index == 7) || that.lottery.prize == that.lottery.index + 1)) {
                        that.lottery.speed += 110;
                    } else {
                        that.lottery.speed += 20;
                    }
                }
                if (that.lottery.speed < 40) {
                    that.lottery.speed = 40;
                };
                that.lottery.timer = setTimeout(that.roll, that.lottery.speed); //循环调用
            }
            return false;
        },
        init(){
        	this.lottery.init('lottery');
        },
        requestData(){

        	  let encrypt =this.AES(this.userId).toString()
                    let that = this
                    let url = "/back/api/lottery/syn/userDeluxeDraw.do?lenovoId=owoluXZgxDn0jDMb8iQhsQ=="
                this.jqajax(url,{type:"POST",dataType:"json"},function(res){
                    console.log(res)
                    that.prizeId=res.gmDrGoods.prizeNumber
                    that.prizeMsg = res.msg
                    window.sessionStorage.setItem("superPrize",that.prizeMsg); 
                })
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

        AES(str){
            return Encrypt(str+'').toString()

        }

       
	}
}
</script>