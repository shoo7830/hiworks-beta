<template>
	
	<div>
		<div class="beta-wrap-main">
			<div class="beta-header">
				<div class="main">
					<h1 class="title"><router-link to="/"><img src="https://www.hiworks.com/static/images/logo.png" alt=""></router-link></h1>
					<h2>전자결재 개편 소개</h2>
				</div>
			</div>
			<ul class="service-list">
				<li v-for="item in items">
					<router-link :to="{path:item.link}">
						<p :class="item.link">
							<span class="spr-icon"></span>
						</p>
						<p class="title">{{ item.title }}</p>
						<p class="text">{{ item.text }}</p>
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
					text: '보안 등급 추가와 클릭 후 입력으로 새로워진 결재 문서 작성'

				},
				{
					link: 'list-approve',
					title: '결재 문서 목록',
					text: '문서 상태별로 일괄 결재를 할 수 있는 결재 문서 목록'

				}, 
				{
					link: 'docu-approve',
					title: '문서함',
					text: '결재 완료된 문서를 행위에 따라 구분한 문서함 분리'

				}, 
				{
					link: 'view-approve',
					title: '결재 문서 보기',
					text: '원하는 항목을 바로 변경할 수 있는 결재 문서 보기'

				}, 
				{
					link: 'format-approve',
					title: '네 가지 결재 포맷',
					text: '문서를 작성하는 상황에 따라 설정할 수 있는 결재 포맷'

				}, 
				{
					link: 'print-approve',
					title: '인쇄 레이아웃',
					text: '결재 포맷에 따라 통일된 형태로 출력되는 인쇄'

				}, 
				{
					link: 'new-approve',
					title: '새로운 결재',
					text: '후결, 대결 등의 결재 방식과 협의 요청 추가로 새로워진 결재'

				}, 
				{
					link: 'default-approve',
					title: '문서 양식 관리',
					text: '자동 결재선과 지정 결재자로 똑똑해진 문서 양식 관리'

				}, 
				{
					link: 'admin-approve',
					title: '관리자 설정',
					text: '회사에서 맞는 전자결재로 만들어주는 관리자 설정'

				}

			 
			]
		}
	}
}
</script>

<style scope>
	.spr-icon {display: inline-block;background:url('~assets/images/spr-icon.png') 0 0 no-repeat;}
	.service-list li a:hover .title {color:#0197e4;}
	.write-approve .spr-icon {width:94px;height:107px;background-position:-1px -1px;}
	a:hover .write-approve .spr-icon {background-position: 0 -109px;}
	.list-approve .spr-icon {width: 89px;height: 107px;background-position: -92px -1px;}
	a:hover .list-approve .spr-icon {background-position: -91px -108px;}
	.docu-approve .spr-icon {width: 98px;height: 107px;background-position: -181px -1px;}
	a:hover .docu-approve .spr-icon {background-position: -181px -108px;}
	.view-approve .spr-icon {width: 81px;height: 107px;background-position: -280px -1px;}
	a:hover .view-approve .spr-icon {background-position: -280px -108px;}
	.format-approve .spr-icon {width: 111px;height: 107px;background-position:-363px -1px;}
	a:hover .format-approve .spr-icon {background-position:-363px -108px;}
	.print-approve .spr-icon {width: 96px;height: 107px;background-position:-474px -1px;}
	a:hover .print-approve .spr-icon {background-position: -474px -108px;}
	.new-approve .spr-icon {width: 79px;height: 107px;background-position:-570px -1px;}
	a:hover .new-approve .spr-icon {background-position: -570px -108px}
	.default-approve .spr-icon {width: 96px;height: 107px;background-position:-649px -1px;}
	a:hover .default-approve .spr-icon {background-position: -649px -108px}
	.admin-approve .spr-icon {width: 86px;height: 107px;background-position:-745px -1px;}
	a:hover .admin-approve .spr-icon {background-position: -745px -108px;}

	
</style>