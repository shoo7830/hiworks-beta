<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 '신청' 작성</h2>
			<p>'신청'은 신청하는 부서와 처리하는 부서가 다른 문서를 작성할 때 사용합니다.<br>
			결재선 설정 방법은 신청과 처리 내에서 결재 설성과 같습니다.</p>
			<img src="~assets/images/apply.png" alt="">
			<router-link to="/format-approve/sendview"><span class="prev"></span></router-link>
			<router-link to="/format-approve/applyview"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve',
	head: {
		title: '하이웍스 - 결재 포맷 중 신청 작성'
	}
}
</script>