<template>
	<div class="beta-body">
		<div class="with-comment">
			<h2>후열</h2>
			<p>후열은 만드는 방법과 같이 의사 표현 방법도 두 가지인데, 모든 결재가 마무리되기 전에는 일반적인 결재와 같이 의사를 표현할 수 있지만 결재가 끝난 후 확인하면 결재 결과에 영향을 미칠 수 없습니다.</p>
			<img src="~assets/images/last2.png" alt="">
			<router-link to="/new-approve/last"><span class="prev"></span></router-link>
			<router-link to="/new-approve/behalf"><span class="next"></span></router-link>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'hiworks',
	name: 'new-approve',
	head: {
		title: '하이웍스 - 후열'
	}
}
</script>