# water

vue2 + webapp

# 安装依赖

 >npm install

# 测试

 >node config/dev-server.js

# 打包

 >npm run build

# 技术栈

  + 1 vue2  核心
  + 2 vue-router 路由
  + 3 vuex 管理状态
  + 4 vue-resource ajax获取数据
  + 5 cube-ui 
  + 6 http://vue.ydui.org 使用部分组件做界面框架

# 开发前准备，请自行百度
  + 1 安装 node.js
  + 2 安装 cnpm
  + 3 vs code 开发工具
  + 4 github 桌面版

# 开发日志

### _2019-1-3 至 2019-1-4_ 
 + 1 新环境搭建



 ### _2018-5-29
 + 1 角色权限 meta:{auth:true,role:'a,b,c'} √

# 目录
 
+ --config
+   ----dev-server.js 开发测试
+ --src
+   ----components vue 组件
+   ----libs 第三方的 js 依赖
+   ----store 
+     --- api 接口的前缀
+     --- modules 每个页面的实际动作
+   ----views 每个功能页面
+   ----main.js 路由规则及全局变量的注入
+ --statics 自己的css 或 下载css
+   ---- css 
+   ---- images
+   ---- fonts
+ ----index.html 用于注入的index模板
+ ----package.json 依赖信息
+ ----webpack.config.js 打包信息

# 待研究的内容
  + 1 拍照上传 （已完成）
  + 2 app 增量打包


# 页面详细说明

### _App.vue_
      所有切换的路由都在这里展示


