<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 ‘회람’ 작성 및 보기</h2>
			<p>‘회람’은 결정 사항의 공유나 기록이 필요한 문서를 작성할 때 사용할 수 있습니다. <br>
‘회람’ 포맷 문서는 기안과 동시에 결재 완료되며, 회람자를 추가할 수 있습니다.
</p>
			<img src="~assets/images/reply.png" alt="">
			<router-link to="/format-approve/applyview"><span class="prev"></span></router-link>
			<router-link to="/print-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve',
	head: {
		title: '하이웍스 - 결재 포맷 중 ‘회람’ 작성 및 보기'
	}
}
</script>
<style scoped>
	.beta-body {border-left: 1px solid #ecf0f3}
</style>