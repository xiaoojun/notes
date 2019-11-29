
# 安装Flutter

此教程仅针对对Mac平台下的开发者
由于Flutter会同时构建Android和iOS两个平台的发布包，所以Flutter同时依赖Android SDK和iOS SDK，在安装Flutter时也需要安装相应平台的构建工具和SDK

# 使用镜像

由于在国内访问Flutter有时可能会受到限制，Flutter官方为中国开发者搭建了临时镜像，大家可以将下面变量添加到用户环境变量中

```ruby
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

# 获取Flutter SDK

1. 去Flutter官网下载最新的安装包 [官网地址](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos#macos)

2. 解压安装包到你想要安装的目录 如：

   ```ruby
   cd ~/development
   unzip ~/Downloads/flutter_macos_v0.5.1-beta.zip
   ```

3. 添加Flutter相关工具到path中：

   ```ruby
   export PATH=`pwd`/flutter/bin:$PATH
   ```

   此代码只能暂时针对当前命令行窗口设置PATH环境变量，要永久添加参考下面的更新环境变量部分

4. 运行Flutter doctor命令:

   ```ruby
   flutter doctor
   ```

   第一次运行 `flutter doctor`时，会自动下载相应的依赖并自行编译，后面运行就会快很多。缺失的依赖需要安装一下。安装完成后再运行`flutter doctor`命令验证是否安装成功![image-20191126141209208](https://tva1.sinaimg.cn/large/006y8mN6gy1g9bewav3nij31000eeq5j.jpg)

# 更新环境变量

1. 确定Flutter SDK的目录
2. 打开`$HOME/.bash_profile`
3. 添加环境变量![image-20191126141506903](https://tva1.sinaimg.cn/large/006y8mN6gy1g9bezbjmpjj30su03saal.jpg)
4. 保存并关闭配置文件 运行`source $HOME/.bash_profile`刷新当前终端窗口
5. 运行`Flutter --version`检查是否生效

# 安装xcode和Android Studio

# 升级Flutter SDK和依赖包

```ruby
flutter upgrade
```

# 在Android Studio上安装Flutter和Dart插件

# 连接iOS真机设备

```ruby
brew update
brew install --HEAD libimobiledevice
brew install ideviceinstaller ios-deploy cocoapods
pod setup
```

# 附加费附加费
