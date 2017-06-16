<template>
	<div class="beta-body">
		<div >
			<h2>공용 양식함</h2>
			<img src="~assets/images/public.png" alt="">
			<router-link to="/default-approve/create"><span class="prev"></span></router-link>
			<router-link to="/admin-approve"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'default-approve',
	head: {
		title: '하이웍스 - 공용 양식함'
	}
}
</script>