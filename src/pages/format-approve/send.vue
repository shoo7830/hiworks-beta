<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 '결재 후 송신' 작성</h2>
			<p>'결재 후 송신'은 내부 결재가 완료된 후 외부 부서나 지사에 내용 공유가 필요한 문서를 작성할 때 사용합니다.</p>
			<img src="~assets/images/send.png" alt="">
			<router-link to="/format-approve/view"><span class="prev"></span></router-link>
			<router-link to="/format-approve/sendview"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve-send',
	head: {
		title: '하이웍스 - 결재 후 송신 작성'
	}
}
</script>