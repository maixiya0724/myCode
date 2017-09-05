(function () {
    //window.interface = "https://xcx.caizhanbao.cn";// 配置域名
    window.interface = "http://101.201.108.106:8088";// 配置域名
    (function () {
        function Alert(param) {// alert 函数
            this.title = param.title || '';
            this.content = param.content || '';
            this.alert = null;
            this.init();
            setTimeout(this.destroy.bind(this), param.time || 500);
        }
        Alert.prototype.init = function () {
            this.alert = document.createElement("div");
            this.alert.style.position = "absolute";
            this.alert.style.top = 0;
            this.alert.style.bottom = 0;
            this.alert.style.left = 0;
            this.alert.style.right = 0;
            this.alert.style.zIndex = 9999;
            var alert = document.createElement("div");
            alert.style.position = "absolute";
            alert.style.width = "250px";
            alert.style.height = "50px";
            alert.style.background = "grey";
            alert.style.zIndex = "9999";
            alert.style.top = "100px";
            alert.style.bottom = 0;
            alert.style.left = 0;
            alert.style.right = 0;
            alert.style.margin = "auto";
            alert.style.opacity = 0.8;
            alert.style.textAlign = "center";
            alert.style.color = "#fff";
            alert.style.borderRadius = "5px";
            var title = document.createElement("div");
            title.style.position = "absolute";
            title.style.height = "15px";
            title.style.top = 0;
            title.innerHTML = this.title;
            var content = document.createElement("div");
            content.style.position = "absolute";
            content.style.width = alert.style.width;
            content.style.top = title.style.height;
            content.style.bottom = 0;
            content.style.textAlign = "center";
            content.style.fontSize = "16px";
            content.innerHTML = this.content;

            alert.appendChild(title);
            alert.appendChild(content);
            this.alert.appendChild(alert);

            document.body.appendChild(this.alert)
        };

        Alert.prototype.destroy = function () {
            document.body.removeChild(this.alert);
        };

        window.Alert = function (param) {
            return new Alert(param);
        }
    })();


    // 微信分享
    (function () {
        function weixinShareConfig(shareConfig) {
            // var shareTitle = shareConfig.shareTitle;
            var shareLink = shareConfig.shareLink;
            var shareImgUrl = shareConfig.shareImgUrl;
            var shareDesc = shareConfig.shareDesc;
            var success = success;
            var cancle = cancle;

            $.ajax({
                url: "http://60.205.138.173:8080/others/share/signature",
                type: 'post',
                data: {
                    url: location.href.split('#')[0]
                },

                success: function (data) {
                    var values = data.value;
                    var timestamp = values.timestamp;
                    var nonceStr = values.noncestr;
                    var signature = values.signature;
                    
                    wx.config({
                        debug: false,
                        appId: 'wx8df662bef1a3a461', // 必填，公众号的唯一标识
                        timestamp: timestamp, // 必填，生成签名的时间戳
                        nonceStr: nonceStr, // 必填，生成签名的随机串
                        signature: signature, // 必填，签名，见附录1
                        // 必填，需要使用的JS接口列表，所有JS接口列表见附录
                        jsApiList: [
                            "onMenuShareAppMessage",
                            "onMenuShareTimeline",
                            "onMenuShareQQ",
                            "onMenuShareWeibo",
                            "onMenuShareQZone"
                        ]
                    });
                }
            });

            wx.ready(function () {
                // 分享给朋友
                wx.onMenuShareAppMessage({
                    title: document.title,
                    desc: shareDesc,
                    link: shareLink,
                    imgUrl: shareImgUrl,
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        success && success();
                    },
                    cancel: function () {
                        cancle && cancle();
                    }
                });

                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: document.title,
                    link: shareLink,
                    imgUrl: shareImgUrl,
                    success: function () {
                        success && success();
                    },
                    cancel: function () {
                        cancle && cancle();
                    }
                });

                // 分享到QQ
                wx.onMenuShareQQ({
                    title: document.title,
                    desc: shareDesc,
                    link: shareLink,
                    imgUrl: shareImgUrl,
                    success: function () {
                        success && success();
                    },
                    cancel: function () {
                        cancle && cancle();
                    }
                });

                // 分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: document.title,
                    desc: shareDesc,
                    link: shareLink,
                    imgUrl: shareImgUrl,
                    success: function () {
                        success && success();
                    },
                    cancel: function () {
                        cancle && cancle();
                    }
                });

                // 分享到QQ空间
                wx.onMenuShareQZone({
                    title: document.title,
                    desc: shareDesc,
                    link: shareLink,
                    imgUrl: shareImgUrl,
                    success: function () {
                        success && success();
                    },
                    cancel: function () {
                        cancle && cancle();
                    }
                });
            })
        }

        window.weixinShareConfig = weixinShareConfig;
    })()


})();