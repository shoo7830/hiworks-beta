<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>결재 포맷 중 '결재 후 송신' 보기</h2>
			<p>‘결재 후 송신’ 포맷 문서에서 결재자들은 ‘결재’ 포맷 문서와 같이 결재하며, 수신자들은 결재가 완료된 후에 문서를 확인할 수 있습니다.<br>
수신자들은 결재 관련 내용을 알 수 없으며, 해당 내용을 다른 사람에게 공유하거나 송신자들에게 답장할 수 있습니다. 수신 내용을 다른 사람들에게 공유할 수 있지만, 수신자들 중에서 같은 부서 사람이 있다면 선택하여 같은 문서를 회람하지 않도록 해주세요.
</p>
			<img src="~assets/images/sendview.png" alt="">
			<router-link to="/format-approve/send"><span class="prev"></span></router-link>
			<router-link to="/format-approve/apply"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'format-approve-send-view',
	head: {
		title: '하이웍스 - 결재 후 송신 보기'
	}
}
</script>