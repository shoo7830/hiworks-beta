<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 ‘신청’ 보기</h2>
			<p>'신청’ 포맷 문서는 신청 내에서 결재가 끝나야 처리에 포함된 결재자가 결재할 수 있습니다. <br>
처리 결재자는 신청 결재선을 변경할 수 없습니다.</p>
			<img src="~assets/images/applyview.png" alt="">
			<router-link to="/format-approve/apply"><span class="prev"></span></router-link>
			<router-link to="/format-approve/reply"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve',
	head: {
		title: '결재 포맷 중 ‘신청’ 보기'
	}
}
</script>