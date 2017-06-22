<template>
	<div class="beta-body">
		<div >
			<h2>결재 문서 작성</h2>
			<img src="~assets/images/write.png" alt="">
			<router-link to="/list-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>

export default {
	layout: 'hiworks',
	
	name: 'write-approve',
	head: {
		title: '하이웍스 - 결재 문서 작성'
	}

}
</script>

<style scoped>
	
</style>