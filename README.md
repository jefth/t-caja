## 简介
[caja](https://code.google.com/p/google-caja/) 是一个让第三方html,css,js嵌入到我们站点的工具，由google 团队完成
本工程来源于caja的3000版本号, 并在此基础上进行了一些改造,以更加适合阿里来使用.

#### 为什么使用的是caja 3000版本号?
caja这个版本支持对低版本的ie浏览器支持的稍微好一点(并不完全支持), 因为国内ie版本浏览器还是非常之多，尤其是ie6-ie8,
而最新目前的caja版本(5400+)甚至连ie8都不支持，这对于我们是不可接受的, 所以我们基于3000版本号并进行了优化，bugfix等改造。


## 基于caja的改变
主要的改动包括
1. 大量的bugfix，浏览器兼容问题的解决。 目前支持ie6+，chrome,firefox等
2. 新特性的增加, 增加了css3的支持等
3. 去掉不需要的功能模块，优化了模块的功能，减少最终文件的大小


## 系统要求
JDK1.7+

## 兼容
* 目前经过测试，可以运行在ie6+，chrome，ff等目前的主浏览器中。


## 如何使用?
```javascript
git clone git@github.com:lorrylockie/caja.git caja
cd caja
ant jars
ant runserver
//windows
build.bat jars
build.bat runserver
```


## 阅读相关资料

* WIKI应该是你了解工程的第一站 [WIKI](https://github.com/lorrylockie/caja/wiki)
* [提问](https://github.com/lorrylockie/caja/issues/new)


