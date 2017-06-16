<template>
	<div class="beta-body">
		<div >
			<h2>관리자 설정</h2>
			<img src="~assets/images/admin.png" alt="">
			<router-link to="/default-approve/public"><span class="prev"></span></router-link>
			<router-link to="/go-beta"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'admin-approve',
	head: {
		title: '하이웍스 - 관리자 설정'
	}
}
</script>