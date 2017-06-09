<template>
	<div class="beta-body">
		<div >
			<h2>결재 문서 목록</h2>
			<img src="~assets/images/list.png" alt="">
			<router-link to="/write-approve"><span class="prev"></span></router-link>
			<router-link to="/docu-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>

export default {
	layout: 'hiworks',
	name: 'list-approve',
	head: {
		title: '하이웍스 - 결재 문서 목록'
	},

	data() {
		return {
			
		}
	}
	
}
</script>