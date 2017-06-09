<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 '결재' 보기</h2>
			<p>‘결재’ 포맷 문서는 결재가 완료되어야 합의가, 합의가 완료되어야 재무합의가 의사 표현을 할 수 있습니다. 
만약 합의의 승인이 먼저 필요하다면, 사전 합의를 요청할 수 있습니다. 사전 합의를 요청하면 다른 결재자는 결재할 수 없으며, 요청한 사람만 결재를 재개할 수 있습니다. 
</p>
			<img src="~assets/images/write.png" alt="">
			<router-link to="/format-approve"><span class="prev"></span></router-link>
			<router-link to="/format-approve/send"><span class="next"></span></router-link>
		</div>
		
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve-view',
	head: {
		title: '하이웍스 - 결재 포맷 중 결재 보기'
	}
}
</script>