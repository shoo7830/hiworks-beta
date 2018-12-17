<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 ‘결재’ 작성</h2>
			<p>‘결재’는 재무 검토가 필요하지 않은 문서를 작성할 때 사용합니다.</p>
			<img src="~assets/images/format.png" alt="">
			<router-link to="/view-approve/progress"><span class="prev"></span></router-link>
			<router-link to="/format-approve/view"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve',
	head: {
		title: '하이웍스 - 결재'
	}	
}
</script>