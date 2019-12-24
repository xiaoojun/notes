(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装flutter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装flutter"}},[t._v("#")]),t._v(" 安装Flutter")]),t._v(" "),s("p",[t._v("此教程仅针对对Mac平台下的开发者\n由于Flutter会同时构建Android和iOS两个平台的发布包，所以Flutter同时依赖Android SDK和iOS SDK，在安装Flutter时也需要安装相应平台的构建工具和SDK")]),t._v(" "),s("h1",{attrs:{id:"使用镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用镜像"}},[t._v("#")]),t._v(" 使用镜像")]),t._v(" "),s("p",[t._v("由于在国内访问Flutter有时可能会受到限制，Flutter官方为中国开发者搭建了临时镜像，大家可以将下面变量添加到用户环境变量中")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUB_HOSTED_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flutter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn\nexport "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FLUTTER_STORAGE_BASE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flutter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn\n")])])]),s("h1",{attrs:{id:"获取flutter-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取flutter-sdk"}},[t._v("#")]),t._v(" 获取Flutter SDK")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("去Flutter官网下载最新的安装包 "),s("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/releases?tab=macos#macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("解压安装包到你想要安装的目录 如：")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("cd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("development\nunzip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Downloads")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flutter_macos_v0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("beta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n")])])])]),t._v(" "),s("li",[s("p",[t._v("添加Flutter相关工具到path中：")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("`pwd`"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flutter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATH")]),t._v("\n")])])]),s("p",[t._v("此代码只能暂时针对当前命令行窗口设置PATH环境变量，要永久添加参考下面的更新环境变量部分")])]),t._v(" "),s("li",[s("p",[t._v("运行Flutter doctor命令:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("flutter doctor\n")])])]),s("p",[t._v("第一次运行 "),s("code",[t._v("flutter doctor")]),t._v("时，会自动下载相应的依赖并自行编译，后面运行就会快很多。缺失的依赖需要安装一下。安装完成后再运行"),s("code",[t._v("flutter doctor")]),t._v("命令验证是否安装成功"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g9bewav3nij31000eeq5j.jpg",alt:"image-20191126141209208"}})])])]),t._v(" "),s("h1",{attrs:{id:"更新环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新环境变量"}},[t._v("#")]),t._v(" 更新环境变量")]),t._v(" "),s("ol",[s("li",[t._v("确定Flutter SDK的目录")]),t._v(" "),s("li",[t._v("打开"),s("code",[t._v("$HOME/.bash_profile")])]),t._v(" "),s("li",[t._v("添加环境变量"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g9bezbjmpjj30su03saal.jpg",alt:"image-20191126141506903"}})]),t._v(" "),s("li",[t._v("保存并关闭配置文件 运行"),s("code",[t._v("source $HOME/.bash_profile")]),t._v("刷新当前终端窗口")]),t._v(" "),s("li",[t._v("运行"),s("code",[t._v("Flutter --version")]),t._v("检查是否生效")])]),t._v(" "),s("h1",{attrs:{id:"安装xcode和android-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装xcode和android-studio"}},[t._v("#")]),t._v(" 安装xcode和Android Studio")]),t._v(" "),s("h1",{attrs:{id:"升级flutter-sdk和依赖包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级flutter-sdk和依赖包"}},[t._v("#")]),t._v(" 升级Flutter SDK和依赖包")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("flutter upgrade\n")])])]),s("h1",{attrs:{id:"在android-studio上安装flutter和dart插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在android-studio上安装flutter和dart插件"}},[t._v("#")]),t._v(" 在Android Studio上安装Flutter和Dart插件")]),t._v(" "),s("h1",{attrs:{id:"连接ios真机设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接ios真机设备"}},[t._v("#")]),t._v(" 连接iOS真机设备")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("brew update\nbrew install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" libimobiledevice\nbrew install ideviceinstaller ios"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("deploy cocoapods\npod setup\n")])])]),s("h1",{attrs:{id:"附加费附加费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附加费附加费"}},[t._v("#")]),t._v(" 附加费附加费")])])}),[],!1,null,null,null);a.default=e.exports}}]);