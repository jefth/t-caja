## CAJA 开放JavaScript工程
* 开放JS是一个JavaScript开放的安全框架，由google 团队完成
 https://code.google.com/p/google-caja/

## 背景
* 此工程源于google的caja 3000版本号，目前应用到淘宝的店铺模板开发中，也配合着淘宝的TAE系统，一起作为淘宝开放的安全系统解决方案。
  主要对原工程进行了如下的一些修改
  1. 删除了一些冗余的模块功能。 caja中提供了一些异步api，和服务端编译服务配合动态进行编译，而为了性能考虑，我们采用JS代码由客户端预编译，caja只提供运行环境。故去掉了一些关于异步方面的模块，减少了文件大小。
     事实上，这种方式也应该是一个生产环境所需要具备的
  2. 删除了模块中，可以被系统层面替代的代码。 开放JS目前配合KISSY一起运作，其中的json解析模块，可以被KISSY.JSON代替，从而减少文件大小
  3. 修复了核心代码中的细节bug。

## 兼容
* 目前经过测试，可以运行在ie+，chrome，ff等目前的主浏览器中。

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
