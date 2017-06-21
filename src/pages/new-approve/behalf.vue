<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>대결</h2>
			<p>대결은 대신 결재한다는 의미인데, 그 중에서도 최종 결재자가 부재중일 때 직전 결재자가 공동 책임을<br>지고 대신 결재하는 것입니다.
원칙적으로는 최종 결재자의 직전 결재자에만 허용되지만 관리자 설정에<br>따라 후열 처리를 통해 하위 결재자들도 대결할 수 있습니다.
</p>
			<img src="~assets/images/behalf.png" alt="">
			<router-link to="/new-approve/last2"><span class="prev"></span></router-link>
			<router-link to="/new-approve/behalf2"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve-behalf',
	head: {
		title: '하이웍스 - 대결'
	}
}
</script>
<style scoped>
	.beta-body {border-left: 1px solid #ecf0f3}
</style>