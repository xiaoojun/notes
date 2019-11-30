# GCD知识的整理(swift)

### 1、GCD简介

> [百度百科](https://baike.baidu.com/item/GCD)
>
> GCD为Grand Central Dispatch的缩写。
> Grand Central Dispatch (GCD)是Apple开发的一个多核编程的较新的解决方法。它主要用于优化应用程序以支持多核处理器以及其他对称多处理系统。它是一个在线程池模式的基础上执行的并行任务。在Mac OS X 10.6雪豹中首次推出，也可在IOS 4及以上版本使用。

### 2、 为什么使用GCD

- 可用于多核的并行运算
- 会自动利用更多的CPU内核
- 会自动管理线程的生命周期(创建线程、调度任务、销毁线程)

### 3、GCD的任务和队列

学习之前 有两个非常重要的概念：

**任务**：就是执行操作的意思，也就是你在线程中执行的那段代码。执行任务有两种方式：【同步执行】、【异步执行】。两者的区别在于**是否等待队列的任务执行结束，以及是否具备开辟新的线程的能力。**

- 同步执行(sync)：
  - 同步添加任务到指定的队列中，在添加的任务结束之前，会一直等待，直到队列里面的任务完成后再继续执行。
  - 只能在当前线程中执行任务，不具备开启新的线程的能力。

- 异步执行(async):
  - 异步添加任务到指定的队列中，不会作任何等待，可以继续执行任务
  - 可以在新的线程中执行任务，具备开启新的线程的能力

##### 举个例子

**「同步执行」**：你打电话给小明的时候，不能同时打给小白。只有等到给小明打完了，才能打给小白（等待任务执行结束）。而且只能用当前的电话（不具备开启新线程的能力）。

**『异步执行』**：你打电话给小明的时候，不用等着和小明通话结束（不用等待任务执行结束），还能同时给小白打电话。而且除了当前电话，你还可以使用其他一个或多个电话（具备开启新线程的能力）。

> 注意：**异步执行**虽然具有开启新的线程的能力，但并不一定会开启新的线程。这和任务所指定的队列类型有关

**队列(Dispatch Queue)**：这里的队列指执行任务的等待队列，队列是一种特殊的线性表，采用FIFO(先进先出)的原则，新的任务插入到末尾，读取任务总是从头部开始，每读取一个任务，则从队列中释放一个任务

![image-20191127141549528](https://tva1.sinaimg.cn/large/006y8mN6gy1g9ckmf196vj30z40bgjt0.jpg)

##### 队列的分类

两者都符合FIFO原则，主要区别在于：**执行顺序的不同，以及开启线程数不同**

**「串行队列」(Serial Dispatch Queue)**：

- 每次只要一个任务被执行，让任务一个接着一个执行(只开启一个线程，一个任务执行完毕后，再执行下一个任务)
  

**「并发队列」(Concurrent Dispatch Queue)**：

- 可以让多个任务并发(同时执行), 可以开启多个线程，并且同时执行任务

> 注意：并发队列 的并发功能只有在异步的方法下才有效

### 4、GCD的使用步骤

1、创建一个队列(串行队列或并发队列)
2、将任务追加到任务的等待队列中，然后系统会根据任务类型执行任务

#### 4.1、队列的创建方法

- 自定义创建队列![image-20191127144810585](https://tva1.sinaimg.cn/large/006y8mN6gy1g9clk1bv9fj318a0n6dm2.jpg)

- 默认的并发队列：![image-20191127145143812](https://tva1.sinaimg.cn/large/006y8mN6gy1g9clnpwrnvj30km02wweu.jpg)

- 默认的串行队列：![image-20191127145219194](https://tva1.sinaimg.cn/large/006y8mN6gy1g9clobs1dtj30e203aaa8.jpg)

#### 任务的创建方法![image-20191127150028593](https://tva1.sinaimg.cn/large/006y8mN6gy1g9clwtu6vvj30k207ot9p.jpg)

##### 4.2、两种队列 + 两种执行方式的组合

> 1、同步执行 + 并发队列
> 2、异步执行 + 并发队列
> 3、同步执行 + 串行队列
> 4、异步执行 + 串行队列
> 因为当前代码默认放在主队列中 有必要研究下
> 5、同步执行 + 主队列
> 6、异步执行 + 主队列

#### 【主线程中】 【不同队列】 + 【不同任务】的简单组合区别![image-20191127151910745](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cmga3xolj313o0ci0ut.jpg)

#### 关于死锁问题![image-20191127154241354](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cn4rc6ymj30vw0g6416.jpg)

#### 【不同队列】+【不同任务】 组合，以及 【队列中嵌套队列】 使用的区别

![image-20191127154550096](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cn80b8pxj31380fi0va.jpg)

#### 1、同步执行 + 并发队列

[image-20191127160032712](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnnbxf5tj315o0hsmzv.jpg)

![image-20191127160056227](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnnq5gvzj30rs0degpi.jpg)

#### 2、异步执行 + 并发队列

[image-20191127160726735](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnuidxeej31760hyjua.jpg)

![image-20191127160739412](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnuppj55j30ws0c4439.jpg)

#### 3、同步执行 + 串行队列

[image-20191127161206322](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnzcocppj30wg0i6wgv.jpg)

![image-20191127161222620](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cnzmrp47j30u20bwjvs.jpg)

#### 4、异步执行 + 串行队列

![image-20191127161446773](https://tva1.sinaimg.cn/large/006y8mN6gy1g9co24ostzj30xq0i0tb7.jpg)

![image-20191127161457790](https://tva1.sinaimg.cn/large/006y8mN6gy1g9co2bmrxlj30tq0c2aeb.jpg)

##### 主队列： GCD默认提供的串行队列

- 默认情况下 平常所写的代码是直接放在主队列中的
- 所有放在主队列中的任务，都会放在主线程中执行

#### 5、同步执行 + 主队列

- 在主线程中执行![image-20191127162416928](https://tva1.sinaimg.cn/large/006y8mN6gy1g9coc0n3zzj312a0hogo0.jpg)

- 在其他线程执行![image-20191127163030769](https://tva1.sinaimg.cn/large/006y8mN6gy1g9coiia5vsj31420nsgoz.jpg)

  ![image-20191127163138888](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cojowda1j30ss0c2q7i.jpg)

#### 6、异步执行 + 主队列![image-20191127163308926](https://tva1.sinaimg.cn/large/006y8mN6gy1g9col8j970j30te0ikjtq.jpg)

![image-20191127163318915](https://tva1.sinaimg.cn/large/006y8mN6gy1g9coley1luj30ro0c4431.jpg)

### 5、GCD 线程间的通信

```swift
func communication() {
    print("begin===========")
    DispatchQueue.global().async {
        print("当前线程: \(Thread.current)")
        sleep(2)
        DispatchQueue.main.async {
            print("当前线程：\(Thread.current)")
        }
    }
    print("end===========")
}

结果：
begin===========
end===========
当前线程: <NSThread: 0x28347acc0>{number = 3, name = (null)}
当前线程：<NSThread: 0x2834276c0>{number = 1, name = main}
```

### 6、GCD的其他方法

1、barrier方法![image-20191127165416884](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cp78u946j30z50u0q9e.jpg)

2、GCD延时执行的方法![image-20191127165852147](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cpc08wyej30ts0ea76y.jpg)
> 需要注意的是：dispatch_after 方法并不是在指定时间之后才开始执行处理，而是在指定时间之后将任务追加到主队列中。严格来说，这个时间并不是绝对准确的

3、Group + notify![image-20191127171413088](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cprznnwbj30vi0qqn0u.jpg)

4、Group + Wait

![image-20191127172018205](https://tva1.sinaimg.cn/large/006y8mN6gy1g9cpyaxyavj30ra0x80xj.jpg)

5、Semaphore![image-20191127183050576](https://tva1.sinaimg.cn/large/006y8mN6gy1g9crzpp670j314e0jo77d.jpg)

[参考链接](https://www.jianshu.com/p/2d57c72016c6)


<Valine></Valine>
