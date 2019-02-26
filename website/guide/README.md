# Rem

> 🐯 基于UMI-BLOCK的开箱即用

## About Rem

    它是由我从开发前端的一点一滴衍生出来的产物, 几乎所有项目都在使用着, 无时无刻、无微不至的给我提供 
    帮助, 不由自主的想起了我家蕾姆, 于是我决定取名为Rem, 这就是它名字的由来, 希望它也能帮助到你们~

    Rem基于UMI-BLOCK, 提供一系列的支持, 让你在开发的过程中, 更加得心应手!

## Features

* **兼容多端** , 提供多端兼容, 让你不管在哪一端,都能使用Rem 
* **网络处理** , 通过NetComponent, CommonModal, 让每一个界面都能统一管理网络请求
* **表单处理** , 通过WebForm/MobileForm可以快速完成表单的设计
* **常用工具** , 提供一系列常用的自封装库及工具, 让项目更快捷, 高效的实现


## Getting Started

 ```bash
    $ mkdir myapp && cd myapp
    $ yarn create umi
    $ yarn install
    & umi block add https://github.com/xoptimal/umi-block-rem
```
    
**接下来请移步[Config]()模块完成配置后就可以正常的使用Rem啦~**
  
   
## Catalogue

根目录下的SRC目录初始化以下文件:

* locales
    * en-US.js
    * zh-CN.js
* models
    * common.js
* support
    * components
        * NetComponent.jsx
        * ListViewComponent.jsx
        * TableComponent.jsx
    * config
        * index.js
        * resource.js
    * forms
        * MobileForm.jsx
        * WebForm.jsx
    * styles
        * common.less
    * utils
        * CommonHelper.js
        * RouterHelper.js
        * ToastHelper.js
        * InputHelper.js
        * FetchHelper.js
    * views
        * ExDrawer
        * ExListView
        * ExModal
        * NavLayout
        * NetLayout
        * ScrollView

