<template>	
	<div class="beta-wrap">
		<left-menu></left-menu>
		<!-- <Rightcontent></Rightcontent> -->
		<nuxt />
	</div>
	
</template>

<script>
	import LeftMenu from '~/components/Leftmenu.vue';
	
	export default {
		components: {
			LeftMenu//,
			//Rightcontent
		}
	}
	
</script>

<style>
	.beta-wrap {background: url('~assets/images/line.png') 0 0 repeat-y;}
	.beta-body {float: right;width: 730px;padding: 70px 0 70px 50px;}
	.beta-body h2 {padding:2px 0 25px 0;font-size: 28px;font-size: 28px;color: #333;font-weight: normal;letter-spacing: -2px}
	.beta-body .with-comment h2 {padding-bottom: 10px;} 
	.beta-body .with-comment p {font-size: 15px;padding-bottom: 25px;line-height: 1.6;}
	.beta-body>div {position: relative;}
	.beta-body .prev, .beta-body .next {margin-top:-23px;display:inline-block;width:45px;height: 45px;position: absolute;opacity: .5;cursor: pointer;}
	.beta-body .prev {background:url('~assets/images/arrow.png') 0 0 no-repeat;top:50%;left:0;}
	.beta-body .next {background:url('~assets/images/arrow.png') 0 0 no-repeat;top:50%;right:0;transform: rotate(180deg);}
</style>

