<template>
	<div class="beta-body">
		<div >
			<h2>양식함 관리</h2>
			<img src="~assets/images/default.png" alt="">
			<router-link to="/new-approve/after2"><span class="prev"></span></router-link>
			<router-link to="/default-approve/create"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'default-approve',
	head: {
		title: '하이웍스 - 양식함 관리'
	}
}
</script>