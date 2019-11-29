# Flutter**的基本介绍**

Flutter是Google推出并开源的移动应用开发框架 主打跨平台、高保真、高性能。通过Dart语言开发，Flutter本身也提供了丰富的组件、接口，开发者也可以为Flutter添加native扩展，此外Flutter还使用native引擎渲染视图

## 跨平台自绘引擎

- Flutter不使用webView 也不使用操作系统的原生控件
- 使用自己的高性能渲染引擎绘制widget, 在保证Android和iOS上UI一致性的同时避免了对原生控件依赖带来的维护成本
- 使用skia作为其2D渲染引擎，Skia是Google的一个2D图形处理函数库，跨平台，目前Google Chrome和Android均采用Skia作为其绘图引擎
- 目前Flutter默认支持iOS、Android、Fuchsia(Google新的自研操作系统)三个移动平台，但是Flutter也支持web开发和PC开

## 高性能

- Flutter采用Dart语言开发 Dart在JIT(即时编译)模式下，速度与JavaScript基本持平。但是Dart支持AOT，当以AOT模式运行时，JavaScript便远远追不上了
- Flutter使用自己的渲染引擎绘制UI, 布局数据等由Dart语言直接控制，相较于RN需要在JavaScript和native之间通信，在滑动和拖动场景下具有明显的优势

## 采用Dart语言开发	

目前程序运行主要有两种方式: 静态编译和动态解。静态编译的程序在执行前全部被翻译为机器码。通常将这种类型称为AOT(Ahead of time -- 提前编译，典型代表：C/C++开发的应用)；而解释执行则是一句一句边翻译边执行，通常将这种类型称为JIT(Just- in - time -- 即时编译， 典型代表：JavaScript、Python等)

- JIT和AOT指的是程序运行方式 和编程语言并非强关联，区分使用为AOT的标准是看代码在执行前是否需要编译，只要需要编译，无论编译产物是字节码还是机器码，都属于AOT
- 基于JIT的快速开发周期+基于AOT的发布包的特性 ==》提高开发效率，另外JavaScript不具备这个能力
- 为了提供流程、高保真的UI体验，Flutter需要能够在每个动画帧中运行大量的代码，意味着需要一种既能提供高性能的语言又不会出现丢帧的周期性暂停，Dart满足需求并比JavaScript做得更好
- Dart具有快速内存分配的特性
- 类型安全，支持静态类型检测，可以在编译前发现一些类型的错误

## Flutter框架结构

![image-20191126115554548](https://tva1.sinaimg.cn/large/006y8mN6gy1g9baypgu7bj31680lkq70.jpg)

## Flutter Framework

一个纯Dart实现的SDK, 实现了一套基础库，自底向上。

- 底下两层(Foundation、Animation、Painting、Gesture)在Google的一些视频中被合并为一个Dart UI层，对应的Flutter中国的`dart:ui`包，是Flutter引擎暴露的底层UI库，提供动画、手势、绘制能力
- Rendering层，是一个抽象的布局层，依赖于dartUI层，Rendering层会构建一个UI树，当UI树有变化时，会计算出变化的部分，然后更新UI树。Rendering层可以说是Flutter UI框架最核心的部分，它除了确定每个UI元素的位置、大小之外还要进行坐标变换、绘制(调用底层dart:ui)
- Widgets层是Flutter提供的的一套基础组件库，在基础组件库之上，Flutter还提供了 Material 和Cupertino两种视觉风格的组件库。而Flutter开发的大多数场景，只是和这两层打交道。

## Flutter Engine

这是一个纯 C++实现的 SDK，其中包括了 Skia引擎、Dart运行时、文字排版引擎等。在代码调用 `dart:ui`库时，调用最终会走到Engine层，然后实现真正的绘制逻辑。

参考链接： 《Flutter实战电子书》[](https://book.flutterchina.club)
