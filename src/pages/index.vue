<template>
	
	<div>
		<div class="beta-wrap-main">
			<div class="beta-header">
				<div class="main">
					<h1 class="title"><router-link to="/"><img src="https://www.hiworks.com/static/images/logo.png" alt=""></router-link></h1>
					<h2>전자결재 개편 소개</h2>
					<a href="#" class="go-beta">개편된 전자결재 바로 체험하기 <img src="~assets/images/bullet.png" alt=""></a>
				</div>
			</div>
			<ul class="service-list">
				<li v-for="item in items">
					<router-link :to="{path:item.link}">
						<p :class="item.link">
							<span class="spr-icon"></span>
						</p>
						<p class="title">{{ item.title }}</p>
						<p class="text">{{ item.text1 }}<br>{{ item.text2 }}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
export default {
	name: 'index',
	head: {
		title: '하이웍스 - 전자결재 개편 홈'
	},
	
	data () {
		return {
			  items: [
				{
					link: 'write-approve',
					title: '결재 문서 작성',
					text1: '보안 등급 추가와 클릭 후 입력으로',
					text2: '새로워진 결재 문서 작성'
				},
				{
					link: 'list-approve',
					title: '결재 문서 목록',
					text1: '문서 상태별로 일괄 결재를 할 수',
					text2: '있는 결재 문서 목록'
				}, 
				{
					link: 'docu-approve',
					title: '문서함',
					text1: '결재 완료된 문서를 행위에 따라',
					text2: '구분한 문서함 분리'
				}, 
				{
					link: 'view-approve',
					title: '결재 문서 보기',
					text1: '원하는 항목을 바로 변경할 수 있는',
					text2: '결재 문서 보기'
				}, 
				{
					link: 'format-approve',
					title: '네 가지 결재 포맷',
					text1: '문서를 작성하는 상황에 따라',
					text2: '설정할 수 있는 결재 포맷'
				}, 
				{
					link: 'print-approve',
					title: '인쇄 레이아웃',
					text1: '결재 포맷에 따라 통일된 형태로',
					text2: '출력되는 인쇄'
				}, 
				{
					link: 'new-approve',
					title: '새로운 결재',
					text1: '후결, 대결 등의 결재 방식과',
					text2: '협의 요청 추가로 새로워진 결재'
				}, 
				{
					link: 'default-approve',
					title: '문서 양식 관리',
					text1: '자동 결재선과 지정 결재자로',
					text2: '똑똑해진 문서 양식 관리'
				}, 
				{
					link: 'admin-approve',
					title: '관리자 설정',
					text1: '회사에서 맞는 전자결재로',
					text2: '만들어주는 관리자 설정'
				}
			]
		}
	}
}
</script>

<style scope>
	.spr-icon {display: inline-block;background:url('~assets/images/spr-icon.png') 0 0 no-repeat;}
	.beta-wrap-main .beta-header {padding: 33px 0 29px;border-bottom: 1px solid #ecf0f3;}
	.beta-wrap-main .main {width: 918px; margin: 0 auto;}
	.beta-wrap-main .main:after{clear: both;display: block;content: ''} 
	.beta-wrap-main .service-list {width: 918px; margin: 22px auto 0;}
	.beta-wrap-main .main .go-beta {float: right;margin-top: 12px;padding: 10px 17px 10px 14px;font-size: 14px;color: #2985db;border: 1px solid #2985db;border-radius:2px;}
	.beta-wrap-main .go-beta img {position: relative;top:1px;margin-left:5px;}
	.service-list:after {clear: both;display: block;content: ''}
	.service-list li {float: left;width: 238px;padding:55px 34px;text-align: center;}
	.service-list li a {display: inline-block;}
	.service-list .title {display:inline-block;padding-bottom: 10px;font-size: 18px;color: #333;}
	.write-approve + .title {padding-top: 28px;}
	.list-approve + .title {padding-top: 18px;}
	.docu-approve + .title {padding-top: 19px;}
	.view-approve + .title {padding-top: 22px;}
	.format-approve + .title {padding-top: 22px;}
	.print-approve + .title {padding-top: 21px;}
	.new-approve + .title {padding-top: 23px;}
	.default-approve + .title {padding-top: 23px;}
	.admin-approve + .title {padding-top: 31px;}
	.service-list .text {font-size: 16px;color: #777;letter-spacing: -1px;line-height: 1.6;}
	.service-list li a:hover .title {color:#0197e4;font-weight: bold;}
	.service-list li a:hover .text {color:#0197e4;}
	.write-approve .spr-icon {width:94px;height:94px;background-position:-1px -1px;}
	a:hover .write-approve .spr-icon {background-position: 0 -109px;}
	.list-approve .spr-icon {width: 89px;height: 104px;background-position: -92px -1px;}
	a:hover .list-approve .spr-icon {background-position: -91px -108px;}
	.docu-approve .spr-icon {margin-top: 25px;width: 98px;height: 78px;background-position: -181px -1px;}
	a:hover .docu-approve .spr-icon {background-position: -181px -108px;}
	.view-approve .spr-icon {width: 81px;height: 88px;background-position: -280px -1px;}
	a:hover .view-approve .spr-icon {background-position: -280px -108px;}
	.format-approve .spr-icon {margin-top: 20px;width: 111px;height: 68px;background-position:-363px -1px;}
	a:hover .format-approve .spr-icon {background-position:-363px -108px;}
	.print-approve .spr-icon {margin-top: 11px;width: 96px;height: 78px;background-position:-474px -1px;}
	a:hover .print-approve .spr-icon {background-position: -474px -108px;}
	.new-approve .spr-icon {width: 79px;height: 98px;background-position:-570px -1px;}
	a:hover .new-approve .spr-icon {background-position: -570px -108px}
	.default-approve .spr-icon {margin-top: 24px;width: 96px;height: 73px;background-position:-649px -1px;}
	a:hover .default-approve .spr-icon {background-position: -649px -108px}
	.admin-approve .spr-icon {margin-top: 8px;width: 86px;height: 82px;background-position:-745px -1px;}
	a:hover .admin-approve .spr-icon {background-position: -745px -108px;}
</style>