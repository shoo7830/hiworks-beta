<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>후결</h2>
			<p>후결은 최종 결재자가 나중에 결재한다는 의미인데, 최종 결재자가 부재중일 때 우선 다음 결재를 진행하기<br>위해 요청하며, 복귀 후 의사 표현할 수 있습니다.<br>
			대결과 같이 원칙적으로는 최종 결재자의 직전 결재자에만 요청이 허용되지만 관리자 설정에 따라<br>후열 처리를 통해 하위 결재자들도 후결 요청할 수 있습니다.</p>
			<img src="~assets/images/after.png" alt="">
			<router-link to="/new-approve/behalf"><span class="prev"></span></router-link>
			<router-link to="/new-approve/after2"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve-after',
	head: {
		title: '하이웍스 - 후결'
	}
}
</script>