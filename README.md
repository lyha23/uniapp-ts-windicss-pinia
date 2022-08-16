# uniapp(Vue3)-ts-vite-windicss 快速开发模板
利用`uniapp` + `windicss` + `ts` + `vite` 搭建的一套基础模板

1. windicss以及flex布局的css工具拓展
2. pinia + localStorage 持久化处理，记录用户信息
4. 统一的request api请求处理


>背景：windicss真的爽，不接受反驳

### 安装：
命令行执行` yarn `或者`npm i`，安装所需依赖


### 启动

#### h5
```bash
yarn dev:h5
```
#### 小程序
```bash
yarn dev:mp-weixin
```
然后打开微信开发者工具选择`/dist/dev/mp-weixin`文件夹

### Build
```bash
yarn build:mp-weixin
```
然后打开微信开发者工具选择`/dist/build/mp-weixin`文件夹

### 预览（h5 build 的时候，会出现样式丢失问题，因而与图片不符）
[live demo](http://uniapp-template.demo.qqoc.co/#/)
<img src="https://user-images.githubusercontent.com/75962592/184828613-e11f3d35-7288-4706-91fe-a1d26da994ee.PNG" width=320 style="margin-right=30px;border:solid 5px"/>
<img src="https://user-images.githubusercontent.com/75962592/184828651-17200da9-251f-4c17-a0fb-ecd811b75f2c.PNG" width=320 />


### 项目地址
[github](https://github.com/sjtuli/uniapp-ts-windicss-pinia)

### 已知问题
h5 build 的时候，会出现样式丢失问题（不会吧，真的有人用uniapp开发h5）。
如下
[live demo](http://uniapp-template.demo.qqoc.co/#/)

### 感谢
dcasia/mini-program-tailwind 超好用的windicss转译插件
🔗 链接：[github](https://github.com/dcasia/mini-program-tailwind)
tobe-fe-dalao/fast-vue3  本项目大量借鉴了该项目
🔗 链接：[github](https://github.com/tobe-fe-dalao/fast-vue3)
