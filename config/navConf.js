module.exports = [
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
]