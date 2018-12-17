<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 ‘결재’ 보기</h2>
			<p>‘결재’ 포맷 문서는 재무합의를 제외하고 ‘결재’와 같은 방식으로 결재를 진행할 수 있습니다.
</p>
			<img src="~assets/images/formatview.png" alt="">
			<router-link to="/format-approve"><span class="prev"></span></router-link>
			<router-link to="/format-approve/finance"><span class="next"></span></router-link>
		</div>
		
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve-view',
	head: {
		title: '하이웍스 - 결재'
	}
}
</script>
<style scoped>
	
</style>