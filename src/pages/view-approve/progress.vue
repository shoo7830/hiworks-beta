<template>
	<div class="beta-body">
		<div >
			<h2>결재 진행 문서 보기</h2>
			<img src="~assets/images/progress.png" alt="">
			<router-link to="/view-approve"><span class="prev"></span></router-link>
			<router-link to="/format-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'progress-approve',
	props: {
		pagename: {
			type: String,
			default() {
				return 'progress-approve'
			}
		}
	},
	head: {
		title: '하이웍스 - 결재 진행 문서 보기'
	}
}
</script>