<template>
	<div class="beta-body">
		<div >
			<h2>문서함</h2>
			<img src="~assets/images/docu.png" alt="">
			<router-link to="/list-approve"><span class="prev"></span></router-link>
			<router-link to="/view-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'docu-approve',
	head: {
		title: '하이웍스 - 문서함'
	}
}
</script>