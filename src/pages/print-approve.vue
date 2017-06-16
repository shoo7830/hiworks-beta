<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>인쇄 레이아웃</h2>
			<p>네 가지 결재 포맷에 따라 인쇄 레이아웃이 통일된 형태로 출력됩니다.</p>
			<img src="~assets/images/print.png" alt="">
			<router-link to="/format-approve/reply"><span class="prev"></span></router-link>
			<router-link to="/new-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'print-approve',
	head: {
		title: '하이웍스 - 인쇄 레이아웃'
	}
}
</script>