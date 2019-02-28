# Guide

它是由我开发前端一点一滴衍生出来的产物, 几乎所有项目都在使用着, 无时无刻、无微不至的给我提供帮助, 
不由自主的想起了我家蕾姆, 于是我决定取名为Rem, 这就是它名字的由来, 希望它也能帮助到您~

Rem基于UMI-BLOCK, 提供一系列的支持, 让你在开发的过程中, 更加得心应手!

## Features

* **兼容多端** , 提供多端兼容, 让你不管在哪一端,都能使用Rem
* **网络封装** , 通过NetComponent、CommonModal, 让每一个界面都能统一管理网络请求
* **表单处理** , 通过WebForm/MobileForm可以快速完成表单设计
* **常用工具** , 提供一系列常用的自封装库及工具, 让项目更快捷, 高效的实现

## Getting Started

 ```bash
    $ mkdir myapp && cd myapp
    $ yarn create umi
    $ yarn install
    $ umi block add https://github.com/xoptimal/rem
```
    
::: tip
**接下来请移步至[Config](/config/)模块完成配置后就可以正常的使用Rem啦~**
:::
  
   
## Catalogue

Rem会在根目录下的SRC目录初始化以下文件:

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

