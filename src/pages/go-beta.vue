<template>
	<div class="beta-body">
		<div >
			<h2>새롭게 바뀐 전자결재를 체험해보세요!</h2>
			<div class="trigger">
				<div class="text">
					<span class="beta">beta</span>
					<a href="#"><h1>전자결재 개편 체험하기</h1></a>
				</div>
				<router-link to="/admin-approve"><span class="prev"></span></router-link>
				
				<img src="~assets/images/gobeta_off.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'go-beta',
	head: {
		title: '하이웍스 - 베타 체험하기'
	}
}
</script>

<style scoped>
	.trigger {position: relative;}
	.trigger .text {position: absolute;top:50%;left:50%;margin:-45px 0 0 -116px;height: 58px;width: 244px;}
	.trigger .text h1 {margin-top: 7px;font-weight: normal;font-size: 24px;letter-spacing: -2px;}
	.trigger .text a {color: #fff;}
	.trigger .text a:hover {text-decoration: underline;}
	.trigger .beta {display: inline-block;padding: 1px 10px 2px;color: #fff;background: #2985dc;font-size: 15px;}
</style>