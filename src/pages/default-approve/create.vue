<template>
	<div class="beta-body">
		<div >
			<h2>양식 생성</h2>
			<img src="~assets/images/create.png" alt="">
			<router-link to="/default-approve"><span class="prev"></span></router-link>
			<router-link to="/default-approve/public"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'default-approve-create',
	head: {
		title: '하이웍스 - 양식 생성'
	}
}
</script>