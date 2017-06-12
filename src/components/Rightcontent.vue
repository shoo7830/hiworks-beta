<template>
	<div>
	<div v-if="$route.name === write-approve">
		<Writeapprove></Writeapprove>
	</div>
	<!-- <div v-if="router.path === list-approve">
		리스트다요
	</div> -->
	</div>
</template>

<script>
import Writeapprove from '~pages/write-approve.vue'

export default {
	name: 'Rightcontent',
	components: {
		Writeapprove
	}
}
</script>

<style scope>
	
</style>