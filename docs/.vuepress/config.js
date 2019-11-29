
const pluginConf = require('../config/pluginConf.js')
const headConf = require('../config/headConf.js')

module.exports = {
    // theme: 'yubisaki',
    title: "xiaojun's blog",
    description: "这是相当于HTML中meta的描述信息 SEO会用到",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/logo.png
        ['link', { rel: 'icon', href: '/logo.png'}],
    ],

    base: '/notes/', //路由的路径
    dest: './dist',
    markdowm: {
        lineNumbers: false, //代码块是否显示行号
        anchor: { permalink: true },
    },

    //主题配置
    themeConfig: {
        background: '/logo.png',
        accentColor: '#ac3e40',
        lastUpdated: '最后更新',
        
        tags: true,
        smoothScroll: true,
        logo: '/logo.png', //导航栏的logo public文件下
        repo: 'xiaoojun/notes',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '编辑文档',
        
        //导航栏配置
        nav: [
            //单项的
            {text: '开发知识', link: '/technology/'},
            {text: '标签', link: '/tags/', tags: true},
            {text: '生活随笔', link: '/life/'},

            //多项的(可以下拉)
            {
                text: '其他',
                items: [
                    { text : '微博', link: 'https://www.weibo.com'},
                    { text : '知乎', link: 'https://www.zhihu.com'},
                    { text: 'vuepress官网', link: 'https://www.vuepress.cn'}
                ]
            },
        ],

        //侧边栏配置
        sidebar: {
            // 打开technology主页链接时生成下面这个菜单
            '/technology/': [
                {
                    title: 'iOS',
                    children: [
                        // ['路径', '标题']
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/technology/ios/Flutter-Widget简介.md' , 'Flutter-Widget简介'],
                        ['/technology/ios/Flutter安装教程.md' , 'Flutter安装教程'],
                        ['/technology/ios/Flutter入门教程.md' , 'Flutter入门教程'],
                        ['/technology/ios/GCD知识点整理.md' , 'GCD知识点整理'],

                    ]
                },

                {
                    title: 'Mac',
                    children: [
                        // ['路径', '标题']
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/technology/mac/' , 'Mac小技巧']
                    ]
                },
                ['/others/', '其他']
            ]
        },

        sidebarDepth: 2, //侧边栏显示2级

        //插件
        plugins: pluginConf,
        head: headConf,

        //多语言
        locales: {
            '/': {
              lang: 'zh-CN'
            }
          }
    }
    






}