<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>후결</h2>
			<p>최종 결재자의 직전 결재자가 후결 요청한 경우는 위처럼 보이지만, 하위 결재자가 후열 처리를 통해<br>후결 요청한 경우에는 아래처럼 보입니다.
</p>
			<img src="~assets/images/after2.png" alt="">
			<router-link to="/new-approve/after"><span class="prev"></span></router-link>
			<router-link to="/default-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve-after2',
	head: {
		title: '하이웍스 - 후결'
	}
}
</script>
<style scoped>
	.beta-body {border-left: 1px solid #ecf0f3}
</style>