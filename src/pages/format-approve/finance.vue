<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 '재무 포함 결재' 작성</h2>
			<p>'재무 포함 결재'는 가장 일반적인 결재 포맷으로, 결재-합의-재무합의의 승인이 필요한 문서를 작성할 때 사용합니다.</p>
			<img src="~assets/images/finance.png" alt="">
			<router-link to="/view-approve/progress"><span class="prev"></span></router-link>
			<router-link to="/format-approve/financeview"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve',
	head: {
		title: '하이웍스 - 재무 포함 결재'
	}	
}
</script>