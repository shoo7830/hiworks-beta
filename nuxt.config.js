module.exports = {

loading: 'components/main.vue',

head:{
	link: [
      { rel: 'shortcut icon', href: 'https://www.hiworks.com/static/images/favicon/favicon.ico' }
    ],
    meta: [
      { charset: 'utf-8' },
      { property: 'og:url', content: 'https://www.hiworks.com'},
      { property: 'og:title', content: '나의 업무파트너 하이웍스'}, 
      { property: 'og:image', content: 'https://www.hiworks.com/static/images/fbook_share.png'}, 
      { property: 'og:description', content: '다기능 그룹웨어를 통해 업무 효율성을 높이세요.'}
    ],
	script: [
      { src: '//cdn.polyfill.io/v1/polyfill.min.js' }
    ]
},

  css: [
    '~assets/css/main.css'
  ], 

  srcDir: 'src/',

  router: {
    base: '/hiworks-beta/'
  },

  generate: {
    dir: 'hiworks-beta/'
  }
}