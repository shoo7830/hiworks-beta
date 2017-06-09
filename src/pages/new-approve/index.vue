<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>협의 요청</h2>
			<p>협의 요청은 승인 또는 반려 외에 보류하거나 기안자에게 문서 내용 수정을 요청하는 의사 표현입니다.<br>
			협의 요청을 하면 기안자와 요청자의 대기 문서함으로 돌아가며, 다른 결재자들에게는 위와 같이 보입니다.<br>
			하위 결재자가 협의 요청을 했다 하더라도 상위 결재자는 결재를 진행할 수 있습니다.</p>
			<img src="~assets/images/write.png" alt="">
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve',
	head: {
		title: '하이웍스 - 협의 요청'
	}
}
</script>