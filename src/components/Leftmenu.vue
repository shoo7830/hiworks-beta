<template>
	<div class="beta-nav">
		<h1 class="title"><router-link to="/"><img src="https://www.hiworks.com/static/images/logo.png" alt=""></router-link></h1>
		<ul class="sub-menu">
			<router-link tag="li" to="/write-approve"><a>결재 문서 작성</a></router-link>
			<router-link tag="li" to="/list-approve"><a>결재 문서 목록</a></router-link>
			<router-link tag="li" to="/docu-approve"><a>문서함</a></router-link>
			<router-link tag="li" to="/view-approve"><a>결재 문서 보기</a>
				<ul class="menu-branch">
					<li><router-link to="/view-approve">결재 대기 문서</router-link></li>
					<li><router-link to="/view-approve/progress">결재 진행 문서</router-link></li>
				</ul>
			</router-link>
			<router-link tag="li" to="/format-approve"><a>네 가지 결재 포맷</a>
				<ul class="menu-branch" v-if="active === 'format-approve'">
					<li :class="active"><router-link to="/format-approve">결재</router-link></li>
					<li><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else-if="active === 'format-approve-view'">
					<li :class="active"><router-link to="/format-approve">결재</router-link></li>
					<li><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else-if="active === 'format-approve-send'">
					<li><router-link to="/format-approve">결재</router-link></li>
					<li :class="active"><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else-if="active === 'format-approve-sendview'">
					<li><router-link to="/format-approve">결재</router-link></li>
					<li :class="active"><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else-if="active === 'format-approve-apply'">
					<li><router-link to="/format-approve">결재</router-link></li>
					<li><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li :class="active"><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else-if="active === 'format-approve-applyview'">
					<li><router-link to="/format-approve">결재</router-link></li>
					<li><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li :class="active"><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				<ul class="menu-branch" v-else="active === 'format-approve-reply'">
					<li><router-link to="/format-approve">결재</router-link></li>
					<li><router-link to="/format-approve/send">결재 후 송신</router-link></li>
					<li><router-link to="/format-approve/apply">신청</router-link></li>
					<li><router-link to="/format-approve/reply">회람</router-link></li>
				</ul>
				
			</router-link>
			<router-link tag="li" to="/print-approve"><a>인쇄 레이아웃</a></router-link>
			<router-link tag="li" to="/new-approve"><a>새로운 결재</a>
				<ul class="menu-branch"  :class="active">
					<li><router-link to="/new-approve">협의 요청</router-link></li>
					<li><router-link to="/new-approve/last">후열</router-link></li>
					<li><router-link to="/new-approve/behalf">대결</router-link></li>
					<li><router-link to="/new-approve/after">후결</router-link></li>
				</ul>
			</router-link>
			<router-link tag="li" to="/default-approve"><a>문서 양식 관리</a>
				<ul class="menu-branch">
					<li><router-link to="/default-approve">양식함 관리</router-link></li>
					<li><router-link to="/default-approve/create">양식 생성</router-link></li>
					<li><router-link to="/default-approve/public">공용 양식함</router-link></li>
				</ul>
			</router-link>
			<router-link tag="li" to="/admin-approve"><a>관리자 설정</a></router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Leftmenu',
	
	computed: {
    // 계산된 getter
	    active: function () {
	      // `this` 는 vm 인스턴스를 가리킵니다.
	      return this.$route.name
	    }
  	}
  
}
</script>

<style>
	.sub-menu li.nuxt-link-active a { color: #0197e4;font-weight: bold;border-bottom: 3px solid #0197e4;padding-bottom: 2px;}
	.sub-menu li .menu-branch {display: none;}
	.sub-menu li.nuxt-link-active .menu-branch {display: block;}
	.sub-menu li.nuxt-link-active .menu-branch > li > a {font-weight: normal;border-bottom: 0;padding-bottom: 0;color: #333;}
	.sub-menu li.nuxt-link-active .menu-branch > li > a.router-link-exact-active {color: #0197e4;} 
	.sub-menu li.nuxt-link-active .menu-branch > li.format-approve-view > a,
	.sub-menu li.nuxt-link-active .menu-branch > li.format-approve-sendview > a , 
	.sub-menu li.nuxt-link-active .menu-branch > li.format-approve-applyview > a,
	.sub-menu li.nuxt-link-active .menu-branch > li.new-approve-last2 > a,
	.sub-menu li.nuxt-link-active .menu-branch > li.new-approve-behalf2 > a , 
	.sub-menu li.nuxt-link-active .menu-branch > li.new-approve-applyview > a,
	.sub-menu li.nuxt-link-active .menu-branch.new-approve-last2 li:nth-of-type(2) a, 
	.sub-menu li.nuxt-link-active .menu-branch.new-approve-behalf2 li:nth-of-type(3) a,
	.sub-menu li.nuxt-link-active .menu-branch.new-approve-after2 li:nth-of-type(4) a  {color: #0197e4;}
</style>