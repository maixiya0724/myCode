<template>
	<div class="alert">
		<div class="main">
			<div class="info">
				<p class="textInfo">恭喜您获得</p>
				<div class="prize">- {{alertPrize}} -</div>
			</div>
			<div class="inputDiv">
				<div class="text" id="text">{{prizeCode}}</div>
				<a class="btn" @click="copyUrl">复制</a>
			</div>
			<p class="textColor">进入游戏后，体验 <span>十分钟</span>，点击右上角 </p>
			<p class="textColor"><span>福利大厅</span>，输入卡码即可激活</p>
			<div class="btn">立即兑换</div>
		</div>
		<div class="close"></div>
	</div>
</template>

<style scoped lang="less" src="./less.less"></style>

<script>
	export default {
		components:{

		},
		data(){
			return {
				alertPrize:'',
				prizeCode:'',
			}
		},
		mounted(){
			this.alertPrize=window.sessionStorage.getItem("prize");
			this.prizeCode = window.sessionStorage.getItem("prizeCode")
			
		},
		methods:{

			// 复制内容到粘贴板
			copyUrl(){
			        var Url2=document.getElementById("text").innerText;

			        var oInput = document.createElement('input');
			        oInput.value = Url2;
			        document.body.appendChild(oInput);
			        oInput.select(); // 选择对象
			        document.execCommand("Copy"); // 执行浏览器复制命令
			        oInput.className = 'oInput';
			        oInput.style.display='none';
			        alert('复制成功');
			    }

		}
	}

</script>