<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>후열</h2>
			<p>후열은 말 그대로 나중에 확인하도록 만드는 것인데, 두 가지 방법이 있습니다. <br>
			상위 결재자가 선결을 통해 자동으로 하위 결재자를 후열로 만들거나, 하위 결재자가 상위 결재자가<br>
			부재중일 경우 다음 결재를 받기 위해 후열 처리하는 것입니다.</p>
			<img src="~assets/images/last.png" alt="">
			<router-link to="/new-approve"><span class="prev"></span></router-link>
			<router-link to="/new-approve/last2"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve-last2',
	head: {
		title: '하이웍스 - 후열'
	}
}
</script>