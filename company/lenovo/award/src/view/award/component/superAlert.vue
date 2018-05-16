<template>
	<div class="superAlert">
		<div class="main">
			<div class="info">
				<p class="textInfo">恭喜您获得</p>
				<div class="prize">- {{alertPrize}} -</div>
			</div>
			<div class="inputDiv">
				<input class="text" placeholder="请填写收货地址" type="text">
			</div>
			
			<div class="btn">确定</div>
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
				alertPrize:''
			}
		},
		mounted(){
			this.alertPrize=window.sessionStorage.getItem("superPrize");
			
		},
		methods:{

		}
	}

</script>