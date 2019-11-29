# Widget简介

# fjdfjdjf

## 1、概念

Flutter中几乎所有的对象都是一个widget，相比原生开发中的”控件“, widget表示的概念更广泛，不仅可表示UI元素，也可以表示一些功能性的组件。如：手势检测的`GestureDetector`widget、用于APP主题数据传递的`Theme`等等

## 2、Widget和Element

在Flutter中，Widget的功能是“描述一个UI元素的配置数据”，也就是说，Widget其实并不是表示最终绘制在设备屏幕上的显示元素，而它只是描述元素的一个配置数据。

实际上，Flutter中真正代表屏幕上显示元素的类是Element，也就是Widget只是描述Element的配置数据 ==》 **Widget只是UI元素的一个配置数据，并且一个Widget可以对应多个Element。**因为同一个Widget对象可以被添加到UI树的不同部分。真正渲染时，UI树的每一个Element节点都会对应一个Widget对象。总结：

- Widget实际上就是Element的配置数据，Widget树实际上是一个配置树，真正的UI渲染树是由Element构成的；不过由于Element是通过Widget生成的，所以它们之间有对应关系，大多数场景，可以宽泛的认为Widget树就是指UI控件树或UI渲染树
- 一个Widget对象可以对应多个Element对象，很好理解。也就是根据同一份配置，可以创建多个实例

## 3、Widget主要接口

```dart
@immutable
abstract class Widget extends DiagnosticableTree {
  const Widget({ this.key });
  final Key key;

  @protected
  Element createElement();

  @override
  String toStringShort() {
    return key == null ? '$runtimeType' : '$runtimeType-$key';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.dense;
  }

  static bool canUpdate(Widget oldWidget, Widget newWidget) {
    return oldWidget.runtimeType == newWidget.runtimeType
        && oldWidget.key == newWidget.key;
  }
}
```

- widget类继承自DiagnosticableTree，DiagnosticableTree(诊断树)，主要作用是提供调试信息
- Key: 这个key属性类似于React/Vue中的key，主要的作用是决定是否在下一次build时复用旧的Widget，决定的条件在`canUpdate()`方法中。
- `createElement()`：前面说过“一个Widget可以对应多个Element”；在构建UI树时，会先调用此方法生成对应节点的Element对象。此方法是隐式调用，开发中基本不会调用到
- `debugFillProperties(...)` 复写父类的方法，主要是设置诊断树的一些特性。
- `canUpdate(...)`是一个静态方法，它主要用于在Widget树重新`build`时复用旧的widget，其实具体来说，应该是：是否用新的Widget对象去更新旧UI树上所对应的`Element`对象的配置；通过其源码我们可以看到，只要`newWidget`与`oldWidget`的`runtimeType`和`key`同时相等时就会用`newWidget`去更新`Element`对象的配置，否则就会创建新的`Element`。

Widget类本身是一个抽象类，其中最核心的就是定义了`createElement()`接口，在开发中。一般不直接继承Widget类来实现一个新组件，一般通过继承`StatelessWidget`和`StatefulWidget`实现

## 4、StatelessWidget

StatelessWidget相对比较简单，继承自Widget类，重写了createElement()方法：

```dart
 @override
  StatelessElement createElement() => StatelessElement(this);
```

StatelessElement间接继承自Element类，和StatelessElement相对应

StatelessWidget用于不需要维护状态的场景，通常在build方法中通过嵌套其他Widget类构建UI，在构件过程总会递归的构建其嵌套的Widget。

```dart
class Echo extends StatelessWidget {
  //添加构造函数
  const Echo({
    Key key, 
    @required this.text, 
    this.backgroundColor:Colors.grey,
    }) : super(key: key);

  final String text;
  final Color backgroundColor;

  @override
  Widget build(BuildContext context) {
     return Center(
      child: Container(color: backgroundColor, child: Text(text),),
     );
  }
}
```

> 按照惯例，`widget`的构造函数参数应使用命名参数，命名参数中的必要参数要添加 @required 标注，这样有利于静态代码分析器进行检查，
>
> 在继承Widget时，第一个参数通常是Key, 另外如果Widget需要接收子Widget，那么child或children参数通常放最后，Widget熟悉尽可能被声明为final，防止意外改变

### Context

build方法有一个context参数 类型是BuildContext，表示当前Widget在Widget树中的上下文，每一个Widget都会对应一个Context对象(因为每一个Widget都是Widget树上的一个节点)。实际上，Context是当前Widget在Widget树中位置中执行相关操作的一个句柄，比如提供了从当前Widget开始向上遍历Widget树、按照Widget类型查找父级Widget的方法，下面是在子树中获取父级Widget的一个示例

```dart
class NewRoute extends StatelessWidget {
    @override
  Widget build(BuildContext context) {
    // return Echo(text: "大家好",);
     return Scaffold(
       appBar: AppBar(title: Text("这是一个标题"),),
       body: Container(
         child: Builder(builder: (context) {
           Scaffold sc = context.ancestorWidgetOfExactType(Scaffold);
           return (sc.appBar as AppBar).title;
         },),
       ),
     );
  }
}	
```

![image-20191129122314214](/Users/xiaojun/Library/Application Support/typora-user-images/image-20191129122314214.png)

## 5、StatefulWidget

和`StatelessWidget`一样，`StatefulWidget`也是继承自`Widget`类，并重写了`createElement()`方法，不同的是返回的`Element` 对象并不相同；另外`StatefulWidget`类中添加了一个新的接口`createState()`。

```dart
abstract class StatefulWidget extends Widget {
  const StatefulWidget({ Key key }) : super(key: key);

  @override
  StatefulElement createElement() => StatefulElement(this);
  
  @protected
  State createState();
}	
```

- `StatefulElement` 间接继承自`Element`类，与StatefulWidget相对应
- `StatefulElement`中可能会多次调用`createState()`来创建状态(State)对象
- `createState()` 用于创建和Stateful widget相关的状态，它在Stateful widget的生命周期中可能会被多次调用。例如，当一个Stateful widget同时插入到widget树的多个位置时，Flutter framework就会调用该方法为每一个位置生成一个独立的State实例，其实，本质上就是一个`StatefulElement`对应一个State实例

## 6、State

一个StatefulWidget类会对应一个State类，State表示与其对应的StatefulWidget要维护的状态，State中的保存的状态信息可以：

1. 在Widget构建时可以被同步读取
2. 在Widget声明周期中可以被改变，当State被改变时，可以手动调用setState()方法通知Flutter状态发送改变，Flutter收到消息后，会重新调用build方法构建Widget树，从而达到更新UI的目的

State中有两个常用的属性:

1. Widget： 表示与该State示例关联的Widget实例，由Flutter动态设置，但是这种关联并非永久的，因为在应用生命周期中，UI树的某一个节点的Widget实例在重新构建时可能会变化，但State实例只会在第一次插入到树中时被创建，当重新构建时，如果Widget被修改了，Flutter会动态设置State.widget为新的Widget实例
2. Context： StatefulWidget对应的BuildContext，作用同StatelessWidget的BuildContext

## 7、State的生命周期

- initState: 当Widget第一次插入到Widget树时会被调用，对于每一个State对象，Flutter只会调用一次该回调，所以，通常在该回调中做一些一次性操作，如状态初始化，订阅子树的事件通知等，不能在该回调中调用buildContext.inheritFromWidgetOfExactType(该方法用于在Widget树上获取离当前Widget最近的一个父级inheritFromWidget)，原因是在初始化完成后，Widget树中的inheritFromWidget也可能发生变化，正确做法应该是在build()方法或didchangeDependencies中调用它。
- didChangeDependencies(): 当State对象的依赖发生变化时会被调用；例如：在之前`build()` 中包含了一个`InheritedWidget`，然后在之后的`build()` 中`InheritedWidget`发生了变化，那么此时`InheritedWidget`的子widget的`didChangeDependencies()`回调都会被调用。典型的场景是当系统语言Locale或应用主题改变时，Flutter framework会通知widget调用此回调。
- build()： 此回调读者现在应该已经相当熟悉了，它主要是用于构建Widget子树的，会在如下场景被调用：

  1. 在调用initState()之后
  2. 在调用didUpdateWidget()之后
  3. 在调用setState()之后
  4. 在调用`didChangeDependencies()`之后。
  5. 在State对象从树中一个位置移除后（会调用deactivate）又重新插入到树的其它位置之后。
-  `reassemble()`：此回调是专门为了开发调试而提供的，在热重载(hot reload)时会被调用，此回调在Release模式下永远不会被调用。
-  `didUpdateWidget()`：在widget重新构建时，Flutter framework会调用`Widget.canUpdate`来检测Widget树中同一位置的新旧节点，然后决定是否需要更新，如果`Widget.canUpdate`返回`true`则会调用此回调。正如之前所述，`Widget.canUpdate`会在新旧widget的key和runtimeType同时相等时会返回true，也就是说在在新旧widget的key和runtimeType同时相等时`didUpdateWidget()`就会被调用。
-  `deactivate()`：当State对象从树中被移除时，会调用此回调。在一些场景下，Flutter framework会将State对象重新插到树中，如包含此State对象的子树在树的一个位置移动到另一个位置时（可以通过GlobalKey来实现）。如果移除后没有重新插入到树中则紧接着会调用`dispose()`方法
-  `dispose()`：当State对象从树中被永久移除时调用；通常在此回调中释放资源。

> **注意**：在继承`StatefulWidget`重写其方法时，对于包含`@mustCallSuper`标注的父类方法，都要在子类方法中先调用父类方法。

## 8、在Widget中获取State对象

- 通过Context获取

  `context`对象有一个`ancestorStateOfType(TypeMatcher)`方法，该方法可以从当前节点沿着widget树向上查找指定类型的StatefulWidget对应的State对象。

- 通过GlobalKey

  Flutter还有一种通用的获取`State`对象的方法——通过GlobalKey来获取！ 步骤分两步：

  1. 给目标`StatefulWidget`添加`GlobalKey`。

     ```dart
     //定义一个globalKey, 由于GlobalKey要保持全局唯一性，我们使用静态变量存储
     static GlobalKey<ScaffoldState> _globalKey= GlobalKey();
     ...
     Scaffold(
         key: _globalKey , //设置key
         ...  
     )
     ```
     
  2. 通过`GlobalKey`来获取`State`对象
  
     ```dart
     _globalKey.currentState.openDrawer()
     ```
  
  > 注意：使用GlobalKey开销较大，如果有其他可选方案，应尽量避免使用它。另外同一个GlobalKey在整个widget树中必须是唯一的，不能重复。

## 9、Flutter SDK内置组件库介绍

Flutter提供了一套丰富、强大的基础组件，在基础组件库之上Flutter又提供了一套Material风格（Android默认的视觉风格）和一套Cupertino风格（iOS视觉风格）的组件库。要使用基础组件库，需要先导入：

```dart
import 'package:flutter/widgets.dart';		
```

### 基础组件

- Text： 该组件可让您创建一个带格式的文本。
- Row、Column: 这些具有弹性空间的布局类Widget可让您在水平（Row）和垂直（Column）方向上创建灵活的布局。其设计是基于Web开发中的Flexbox布局模型
- Stack: 取代线性布局 (译者语：和Android中的`FrameLayout`相似)，[`Stack`](https://docs.flutter.io/flutter/widgets/Stack-class.html)允许子 widget 堆叠， 你可以使用 [`Positioned`](https://docs.flutter.io/flutter/widgets/Positioned-class.html) 来定位他们相对于`Stack`的上下左右四条边的位置。Stacks是基于Web开发中的绝对定位（absolute positioning )布局模型设计的
- Container: [`Container`](https://docs.flutter.io/flutter/widgets/Container-class.html) 可让您创建矩形视觉元素。container 可以装饰一个[`BoxDecoration`](https://docs.flutter.io/flutter/painting/BoxDecoration-class.html), 如 background、一个边框、或者一个阴影。 [`Container`](https://docs.flutter.io/flutter/widgets/Container-class.html) 也可以具有边距（margins）、填充(padding)和应用于其大小的约束(constraints)。另外， [`Container`](https://docs.flutter.io/flutter/widgets/Container-class.html)可以使用矩阵在三维空间中对其进行变换

#### Material组件

如：Scaffold、AppBar、FlatButton

#### Cupertino组件

目前还没有Material 组件那么丰富

