<template>
	<div class="beta-body">
		<div >
			<h2>결재 대기 문서 보기</h2>
			<img src="~assets/images/view.png" alt="">
			<router-link to="/docu-approve"><span class="prev"></span></router-link>
			<router-link to="/view-approve/progress"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'wait-approve',

	head: {
		title: '하이웍스 - 결재 대기 문서 보기'
	}
}
</script>