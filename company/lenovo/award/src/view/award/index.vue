<template>
    <div class="container">
    <alert> 抽奖成功的弹床</alert>
    <superAlert>豪华抽奖成功的弹窗</superAlert>
        
        <div class="content-top">
            <div class="activity-time">
                活动时间:<span>{{startTime}}</span>-<span>{{endTime}}</span>
            </div>
            <!--用户个人信息及记录查询-->
            <div class="user-wrapper clearfix">
                <div class="left">
                    亲！欢迎您~ <span style="color:#f5c34d">aaa</span>
                </div>
                <!--积分查询弹窗-->
                <div class="score-popup" style="display:none">
                     <div class="popup-title">
                         积分查询
                         <div class="close">
                             <img src="/static/img/award/close.png" id="closeLayer" @click="layerHidden('.score-popup')">
                         </div>
                     </div>
                    <div class="popup-content">
                        您还没有任何积分哦~
                    </div>
                </div>
                <div class="right clearfix">
                    <div class="record" @click="layerShow('.score-popup')">
                        积分查询
                    </div>
                    <!--中奖记录弹窗-->
                    <div class="win-popup" style="display:none">
                        <div class="popup-title">
                            中奖记录
                            <div class="close">
                                <img src="/static/img/award/close.png" @click="layerHidden('.win-popup')">
                            </div>
                        </div>
                        <div class="popup-content">
                           您还没有任何奖励哦~
                        </div>
                    </div>
                    <div class="record award-record" @click="layerShow('.win-popup')">
                        中奖记录
                    </div>
                </div>
            </div>
            <div class="tab-wrapper clearfix">
                <ul class="tab clearfix">
                    <li style="background:url('/static/img/award/sign-in.png') no-repeat;background-size:cover"></li>
                    <li style="background:url('/static/img/award/award.png') no-repeat;background-size:cover"></li>
                    <li style="background:url('/static/img/award/luxury-award.png') no-repeat;background-size:cover"></li>
                    <li style="background:url('/static/img/award/points.png') no-repeat;background-size:cover"></li>
                </ul>
            </div>
            <!--积分获取及每日签到-->
            <div class="records clearfix">
                <div class="record-container">
                    <div class="title">
                        积分获取
                    </div>
                    <!--每日活跃任务-->
                    <div class="task task-wrap">
                        <div class="title-top">
                            每日活跃任务
                        </div>
                        <div class="task-container clearfix">
                            <div class="outline clearfix">
                                <div class="task-specific">
                                    <img src="/static/img/award/task1.png">
                                    <div class="task-introduce">
                                        玩剑道仙语，在线时间超
                                        过30分钟可领取20积分
                                    </div>
                                    <div class="task-button">
                                        领取任务
                                    </div>
                                </div>
                                <div class="task-specific">
                                    <img src="/static/img/award/task1.png">
                                    <div class="task-introduce">
                                        玩剑道仙语，在线时间超
                                        过30分钟可领取20积分
                                    </div>
                                    <div class="task-button">
                                        领取任务
                                    </div>
                                </div>
                                <div class="task-specific" style="margin-right:0rem">
                                    <img src="/static/img/award/task1.png">
                                    <div class="task-introduce">
                                        玩剑道仙语，在线时间超
                                        过30分钟可领取20积分
                                    </div>
                                    <div class="task-button">
                                        领取任务
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="points-container">
                    <div class="title">
                        每日签到
                    </div>
                    <div class="left">
                        <!--每日签到任务-->
                        <div class="task task-wrap">
                            <div class="title-top">
                                签到日历
                            </div>
                            <div class="calendar">
                                <table>
                                    <tr>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                    </tr>
                                    <tr>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>31</td>
                                        <td>01</td>
                                        <td>02</td>
                                        <td>03</td>
                                        <td>04</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td>06</td>
                                        <td>07</td>
                                        <td>08</td>
                                        <td>09</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="sign-times">
                                <p>您已连续签到:10次</p>
                                <p style="font-size:0.11rem">签到礼包奖励请到我的礼包中查看</p>
                            </div>
                            <div class="welfare clearfix">
                                <div class="sign-day sign-button">
                                    立即签到
                                </div>
                                <!--我的礼包弹窗开始-->
                                <div class="my-gift" style="display:none">
                                    <div class="popup-title">
                                        我获得的礼包
                                        <div class="close">
                                            <img src="/static/img/award/close.png" id="closeLayer" @click="layerHidden('.my-gift')">
                                        </div>
                                    </div>
                                    <div class="popup-content">
                                        <!--礼包tab导航-->
                                       <ul class="tab clearfix">
                                           <li>礼包名称</li>
                                           <li>礼包内容</li>
                                           <li>获得时间</li>
                                           <li>领取礼包</li>
                                       </ul>
                                        <!--获得礼包的具体内容-->
                                        <ul class="content clearfix">
                                            <li>笔记本</li>
                                            <li>笔记本</li>
                                            <li>2018-9-19</li>
                                            <li @click="myGift()">领取</li>
                                        </ul>
                                    </div>
                                </div>
                                <!--我的礼包弹窗结束-->
                                <!--领取礼包弹窗开始-->
                                <div class="gift-popup" style="display:none">
                                   <img src="/static/img/award/gift-close.png" @click="layerHidden('.gift-popup')">
                                   <div class="description">
                                       恭喜您获得
                                   </div>
                                    <div class="gift1">
                                        联想电视机
                                    </div>
                                    <div class="code">
                                        <div class="copy">复制</div>
                                    </div>
                                    <div class="rule">
                                        进入游戏后，体验十分钟，点击右上角福利大厅，输入卡码可激活
                                    </div>
                                    <div class="exchange-button">立即兑换</div>
                                </div>
                                <!--领取礼包弹窗结束-->
                                <div class="gift sign-button" @click="layerShow('.my-gift')">
                                    我的礼包
                                </div>
                            </div>
                            <!--签到规则-->
                            <div class="sign-rules">
                                <div class="rules-title">
                                    签到规则
                                </div>
                                <div class="rules-content">
                                    <ul>
                                        <li>
                                            1.   每次签到可获得10积分，每天可签到1次
                                        </li>
                                        <li>
                                            2.   连续签到2、3、7、14、30天可获得额外奖励，连签天数越多奖励越多
                                        </li>
                                        <li>
                                            3.   通过连续签到获得的签到礼包奖励可在“我的礼包”中查看详情
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!--奖品展示-->
                    <div class="award-show">
                        <!--连签两天-->
                        <div class="award-one">
                            <div class="days">
                                连签2天
                            </div>
                            <div class="award1">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award2">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包2</div>
                            </div>
                            <div class="award3">
                                <img src="/static/img/award/award3.png">
                            </div>
                        </div>
                        <div class="award-one">
                            <div class="days">
                                连签3天
                            </div>
                            <div class="award1">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award2">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award3">
                                <img src="/static/img/award/score100.png">
                            </div>
                        </div>
                        <div class="award-one">
                            <div class="days">
                                连签7天
                            </div>
                            <div class="award1">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award2">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award3">
                                <img src="/static/img/award/score200.png">
                            </div>
                            <div class="award4">
                                <img src="/static/img/award/lucky1.png">
                            </div>
                        </div>
                        <div class="award-one">
                            <div class="days">
                                连签14天
                            </div>
                            <div class="award1">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award2">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award3">
                                <img src="/static/img/award/score500.png">
                            </div>
                            <div class="award4">
                                <img src="/static/img/award/lucky2.png">
                            </div>
                        </div>
                        <div class="award-one">
                            <div class="days">
                                全签30天
                            </div>
                            <div class="award1">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award2">
                                <img src="/static/img/award/award1.png">
                                <div class="txt">游戏礼包1</div>
                            </div>
                            <div class="award3">
                                <img src="/static/img/award/score1000.png">
                            </div>
                            <div class="award4">
                                <img src="/static/img/award/lucky3.png">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="lucky-award">
            <prize></prize>
        </div>
        <div class="luxury">
           <div class="winners">
               <div class="winner-title">
                     获奖名单
               </div>
               <div class="lucky-member">
                   <div class="title">
                       <span>账号</span>
                       <span style="padding-left:0.7rem">获得奖励</span>
                   </div>
                   <div class="number">
                       <ul>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                           <li>恭喜136****0339</li>
                       </ul>
                   </div>
                   <div class="awards">
                       <ul>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                           <li>获得200元红包</li>
                       </ul>
                   </div>
               </div>
           </div>
            <div style="height:5.05rem;width:4.5rem;float:right;">
               <!--  豪华抽奖 -->
                <superPrize></superPrize>
            </div>
            <div class="exchange clearfix">
                <!--收货地址弹窗开始-->
                <div class="address-container" style="display:none">
                   <div class="address-title">
                       我的收货地址
                   </div>
                    <div class="address-content">
                       <div class="address-container">
                           <div class="place">

                           </div>
                           <div class="code">
                               <span>邮政编码 :</span><span style="color:red"> * </span>&nbsp;
                               <input type="text">
                           </div>
                       </div>
                    </div>
                </div>
                <!--收货地址弹窗结束-->
                <!--豪华抽奖奖品兑换开始-->
                <div class="gift-popup" style="display:none" id="gift-luxury">
                    <img src="/static/img/award/gift-close.png" @click="layerHidden('#gift-luxury')">
                    <div class="description">
                        恭喜您获得
                    </div>
                    <div class="gift1">
                        联想电视机
                    </div>
                    <div class="tips">
                        请填写收货地址
                    </div>
                    <div class="exchange-button" style="margin-top:0.4rem;background:#f8d84e;color:#e49a47" @click="layerShow()">确定</div>
                </div>
                <!--豪华抽奖奖品兑换结束-->
                <div class="exchange1">
                    <div class="wrapper">
                          <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button" @click="layerShow('.gift-popup')">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
                <div class="exchange1">
                    <div class="wrapper">
                        <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
                <div class="exchange1">
                    <div class="wrapper">
                        <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
                <div class="exchange1">
                    <div class="wrapper">
                        <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
                <div class="exchange1">
                    <div class="wrapper">
                        <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
                <div class="exchange1">
                    <div class="wrapper">
                        <img src="/static/img/award/example.png">
                    </div>
                    <div class="exchange-button">
                        立即兑换
                    </div>
                    <div class="balance">
                        剩余:1个
                    </div>
                </div>
            </div>
        </div>
        <div class="activity-rules">
            <div class="title">
                活动规则
            </div>
            <div class="activity-content">
                <ul>
                    <li>
                        1.    所有游戏礼包，在游戏中体验十分钟左右，右上角出现福利大厅，输入卡码后激活！
                    </li>
                    <li>
                        2.    获得实物奖励的玩家，请认真填写收货地址，我们将在活动结束后20个工作日内发货，请注意查收！
                    </li>
                    <li>
                        3.    小伙伴们要认真填写个人信息哦，因收货地址错误造成的损失，我们将不再进行补发。
                    </li>
                    <li>
                        4.    在活动结束后所有剩余积分将全部清零，请小伙伴们注意活动时间及时参与活动兑换奖品，以免活
                        动结束积分重置所造成的不必要损失。
                    </li>
                    <li>
                        5.    一经发现作弊将取消中奖资格，情节严重者将以法律手段处理；
                    </li>
                    <li>
                        6.    本活动最终解释权归联想所有。
                    </li>
                </ul>
            </div>
        </div>
        <div class="layer" style="display:none"></div>
        <div class="dome">
            
        </div>
    </div>
</template>
<style scoped src="./style.less" lang="less"></style>
<script src="./script.js"></script>