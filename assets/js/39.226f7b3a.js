(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{322:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"博客的起步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#博客的起步"}},[s._v("#")]),s._v(" 博客的起步")]),s._v(" "),n("p",[s._v("date: 2022-05-10")]),s._v(" "),n("p",[s._v("author: 西风镭")]),s._v(" "),n("p",[s._v("location: 深圳，华为软件中心")]),s._v(" "),n("p",[s._v("本博客基于VuePress搭建。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("安装node.js")]),s._v(" "),n("p",[s._v("不低于8.6即可，一般10以上")])]),s._v(" "),n("li",[n("p",[s._v("创建你搭建博客的目录并初始化")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   新建文件夹my-vuepress-blog\n   进入文件夹my-vuepress-blog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("创建docs文件夹，并建立首页")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   新建文件夹docs\n   进入文件夹docs\n   新建README.md\n   输入内容 # Hello VuePress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("配置工程脚本和VuePress依赖")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('   打开根目录下的package.json，写入脚本：\n   "scripts": {\n     "docs:dev": "vuepress dev docs",\n     "docs:build": "vuepress build docs"\n   },\n   "devDependencies": {\n     "vuepress": "^1.9.7"\n   }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("npm安装并启动")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   npm init\n   npm install -D vuepress\n   npm run docs:dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("VuePress 会在 http://localhost:8080 启动本地热重载的开发服务器。")]),s._v(" "),n("li",[s._v("博客内容以markdown文件存储在docs及子目录下，仅支持一层子目录。")]),s._v(" "),n("li",[s._v("在doc文件夹下新建.vuepress文件夹，在该文件夹下新建config.js文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  title: '***',\n  description: '***',\n  ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("配置自定义设置项themeConfig")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  ...\n  themeConfig: {\n    //配置顶部导航栏\n    nav: [\n      { text: '首页', link: '/' },\n      { text: '***', link: '***'}\n    ],\n    //配置侧边栏，支持不超过三层目录嵌套\n    sidebar: [\n      {\n        title: '欢迎光临',\n        path: '/',\n        collapsable: false,\n        children: [\n          { title: \"主页\", path: '/' }\n        ]\n      },\n    ]\n    //其他配置可参考文档配置\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("ul",[n("li",[s._v("提交代码到github代码仓（推荐设置私仓）")]),s._v(" "),n("li",[s._v("申请Github Access Token并配置secrets\n"),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages-and-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("在项目根目录下创建.github文件夹")]),s._v(" "),n("li",[s._v("在.github文件夹下创建workflows目录")]),s._v(" "),n("li",[s._v("在该目录下创建vuepress-deploy.yml文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("name: Build and Deploy\non: [push] //在每次推送时部署，可自定义修改成更合适的方式\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v3 //调用三方支持\n      with:\n        token: ${{ secrets.ACCESS_TOKEN }}\n    - name: vuepress-deploy\n      uses: jenkey2011/vuepress-deploy@master //调用三方支持\n      env:\n        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} //调用你配置的secrets\n        TARGET_REPO: username/repo //部署目标仓\n        TARGET_BRANCH: master //部署目标分支\n        BUILD_SCRIPT: npm install && npm run docs:build\n        BUILD_DIR: docs/.vuepress/dist\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("每次运行时自动构建并发布到你指定的代码仓（需要是公共仓）")])]),s._v(" "),n("li",[n("p",[s._v("在公仓的Settings-Pages启用Github Pages功能")])]),s._v(" "),n("li",[n("p",[s._v("恭喜您完成了博客的部署和发布")])]),s._v(" "),n("li",[n("p",[s._v("更新于2023.01：\n因git更新到2.39.0之后启用了一些强制安全措施，导致jenkey2011/vuepress-deploy@master的流水线自动部署出现问题。\n对于其流水线的entrypoint.sh的Prepare to deploy部分做出如下修改：")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('git config --global user.name "${GITHUB_ACTOR}"\ngit config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"\ngit config --global --add safe.directory /github/workspace/$BUILD_DIR\ngit init\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("参考链接：")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);