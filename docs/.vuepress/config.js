const pluginConf = require('../../config/pluginConf.js')
const headConf = require('../../config/headConf.js')
const navConf = require('../../config/navConf.js')
const sidebarConf = require('../../config/sideBarConf/sidebarConf.js')

module.exports = {
    title: "xiaojun's blog",
    description: "这是相当于HTML中meta的描述信息 SEO会用到",
    head: headConf, //头部信息
    plugins: pluginConf, //插件
    dest: './dist', //动态生成文件路径
    themeConfig: { //主题配置
        lastUpdated: '最后更新',
        logo: '/logo.png', //导航栏的logo public文件下
        repo: 'xiaoojun/notes',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        nav: navConf, //导航栏配置
        sidebar: sidebarConf, //侧边栏配置
        sidebarDepth: 2, //侧边栏显示2级
    },
    locales: { //多语言
    '/': {
        lang: 'zh-CN'
       }
    },
}