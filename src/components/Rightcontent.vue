<template>
	<div>
		<div v-if="activepage === 'write-approve'">
			<Writeapprove></Writeapprove>
		</div>

		<div v-else-if="activepage === 'list-approve'">
			<Listapprove></Listapprove>
		</div>
		<div v-else-if="activepage === 'docu-approve'">
			<Docuapprove></Docuapprove>
		</div>
	</div>
</template>

<script>
import Writeapprove from '~pages/write-approve.vue'
import Listapprove from '~pages/list-approve.vue'
import Docuapprove from '~pages/docu-approve.vue'

export default {
	name: 'Rightcontent',
	components: {
		Writeapprove,
		Listapprove,
		Docuapprove
	},
	
	computed: {
	    activepage: function () {
	      return this.$route.name
	    }
  	}
}
</script>
