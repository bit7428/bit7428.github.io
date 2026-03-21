---
title: PYTHON入门笔记
published: 2026-03-22
description: 第一篇文章，写点基础的东西吧（好基础啊喂）
tags: [你好世界]
category: [你好世界]
draft: false
---

# PYTHON

跟着菜鸟教程学的

## 基础语法

1. 默认情况下Python的编码时 UTF-8 可以改
2. 单行注释# 多行注释""" """
3. 缩进只能用空格不准用 Tab，且同一代码块的缩进相同
4. 多行语句需要用 \ 连接，一行多句，需要用 ; 间隔
5. from 模块 import 函数 的格式可以从模块中导入某个函数

## 基本数据类型

有 number string tuple list set dictionary
前三是不可变类型，后三是可变类型

1. 支持多变量赋同值 a = b = c = 1
2. 支持多变量同时赋值 a,b = 1,2 可以轻松实现变量交换

### 数字类型Number

1. Number包括 bool int float complex
2. type(class) 返回数据类型
3. isinstance(var, class) 判断var是不是class类型
     - type不会认为子类是父类，isinstance会
4. del 究极无敌删除对象方法

### 字符串String

1. 不允许使用索引和切片改变字符串的值
2. 在字符串值前加 r 表示原始字符串，无视转义字符


### 列表List

1. 也可以使用 + *

### 元组Tuple

1. 元组用()括起来，空元组直接 () 就是
2. 单元素元组时需要在后边加一个 , 否则会被识别错误
3. string list tuple 属于序列，元素有顺序

### 集合Set

1. 空集合需要使用 set() 创建，单独的 {} 会被识别为空字典
2. 集合没有顺序，且会自动去除重复元素

### 字典Dictionnary

1. key唯一，如果创建时出现两个相同的key，那么取后一个的value
2. key必须是不可变类型，但不同的key类型可以不同

### Bytes类型

1. 内置的元素是整数值0-255，一般用来处理二进制数据

## 数据类型转换

1. 隐式数据类型转换方向主要依据精度来定
2. 显式数据类型转换需要依靠类型函数实现

### 类型转换函数

int(x,base=10) float(x) complex(real, imag)
str(x) repr(x) eval(str) tuple(seq) list(seq)
set() dict() 
frozenset() 不可变集合 chr() 字符
ord() 十 hex() 十六 oct() 八

## 数字NUMBER

### import math（math.略）

abs(i) fabs(f) pow(x,y) exp(x) round(x,n)
max() min() log(x,a = e) log10(x) sqrt()
modf(f) = 整数:小数 floor(x)向下取整 ceil(x)向上取整

acos() asin() atan() sin() cos() tan()
degree() 弧度换角度 radians() 角度换弧度
hypot(x,y) = sqrt(x² + y²)

pi e


### import random（random.略）

random() [0,1) uniform(x,y) [x,y] seed() 
shuffle(seq) 随机排序原序列 
choice(seq) 从序列中随机挑选一个元素
randrange(start,stop,step) 在范围内获取一个随机数

## 字符串STRING

1. \n 换行 \t 制表符 \r 回车 \\ \' \"
2. 用 f-string 格式化输出就好了
3. 字符串允许使用''' '''包括成多行字符串

### 字符串内建函数

.capitalize() .upper() .lower() .title()
.rstrip() .lstrip() .strip()
len() max() min() find() .rfind() 
.replace(s1,s2,time) .index() ≈ .find()找不到就报错

.split(str="",num) 截取num+1个字符串
.count(str,start=0,end=len(str)) 返回范围内字串出现次数
.swapcase() 大写转小写，小写转大写

.startswith(substr,start=0,end=len(str)) 检查字符串是否是子串开头
.endswith(...) 检查字符串是否是子串结尾

.rjust(width,fillchar='') 原字符串右对齐，填充<sp>
.center(width,fillchar='') 原字符串居中，填充<sp>

## 列表LIST

### 列表比较（import operator）（eq方法）

### 列表函数&方法

len() max() min() list()

.append() .count(obj) .extend(seq)
.index(obj) .insert(index,obj) .pop(index=-1)
.reverse() .clear() .copy() = list[:] 
.sort(key=None,reverse=False) .remove(obj)

## 元组TUPLE

1. 修改元组是非法的，但可以删除元组
2. 但重新初始化元组（实际上是删除后重建）

### 元组内置函数

len() max() min() tuple()

## 字典DICTIONARY

1. 可以通过 dict[new key] = new value 添加新键值对

### 字典内置函数&方法

len() str() type() dict()

.clear() .copy() .pop() 删除键值对，返回值
.fromkeys(seq,value=None) 以seq为key，返回一个dict，值是默认值
.items() .keys() .values() 返回视图对象 
.get(key,default=None) 返回指定键的值，否则返回默认值
.setdefault(key,default=None) 如果key不存在就添加键，设默认值
.updata(dict) 把后一个字典加到前一个里面
.popitem() 删除并返回最后一对键值对

## 集合SET

len() .clear() .copy()
添加元素 .add() .updata(seq) 
移除元素 .remove() （元素不存在则报错）
.discard() （删除失败不报错） .pop() （随机删除一个元素）

还可以进行集合计算，详细请查文档

## 条件控制

match subject:
     case value1:
          action1
     case value2:
          action2
     case _:
          action3

 _ 可以匹配一切，相当于else

## 循环语句

1. pass语句可以作占位语句
2. 循环的else语句只有在循环正常结束后才能执行，break结束不执行

## 推导式

[表达式 for 变量 in 可迭代 if 条件] 返回值是列表
{key:value for 变量 in 可迭代 if 条件} 返回值是字典
{value for 变量 in 可迭代 if 条件} 返回值是集合
(表达式 for 变量 in 可迭代 if 条件) 返回值是元组

推导式中变量的数量不必须为 1 

## 迭代器

iter(seq) 返回迭代器对象
next(迭代器) 输出迭代器的下一个元素

### 创建一个迭代器

1. 面向对象中，存在__iter__和__next__两个魔法方法，可以用来创建迭代器对象，在__next__里可以设置
2. raise StopIteration触发异常来结束迭代。
3. 使用了yield的函数称为生成器，每次函数运行到yield关键词的一行时，会直接返回其后的表达式的值，再次执行该函数时，会从yield的下一行开始运行

## WITH关键字

1. 调用文件的时候容易忘记关闭资源，所以有了with，自动管理
2. with语句主要使用了__enter__()和__exit__()两个接口
3. 实际应用场景：文件操作，数据库连接，线程锁，临时修改系统状态
4. contextlib模块提供了更简单的方式创建上下文管理器

## 函数

1. 传递不可变类型作参数时，修改参数不会影响原变量
2. 传递可变类型作参数时，修改会影响外部变量
3. 设定参数前加上 * 表示不定长参数
      - 参数的导入形式是 tuple
      - 这种变量不限制传入数量，但不会命名
4. 带 ** 的参数会以字典形式传入
5. * 和 ** 之后的添加的参数只能使用关键词传入

## 修饰器

1. python支持函数接受一个函数作为参数，并返回一个新的参数
2. 因此我们可以通过导入原函数，在原函数的基础上添加功能，这就是修饰器
3. 用def定义修饰器，使用时以一行 @decorator_name 标识，下一行def的函数自动调用，实际上@decorator_name相当于在定义的函数后面加了一行，new_func = decorator_name(new_func)
4. 多个修饰器调用时，从下到上开始调用
5. 类似的存在着类修饰器（待学）

## 模块

1. 每个模块都有一个__name__属性，如果是直接运行，则属性值为__main__，反之为 模块的文件名（不包括.py拓展名）
2. dir(模块) 可以查看模块定义内的所有名称

## 文件方法

1. 读写文件的模式有 r只读 w只写 a追加 b二进制模式 +可读可写（一般就用rwa r+w+a+）

.close() 关闭 
.write(str) 写入（返回字符串长度）
.tell() 返回文件指针的位置
.flush() 立刻把缓存区的数据写入文件
.isatty() 文件是否连接到一个终端设备
.read(n) 读取指定 n 个字节数
.readline 读取整行，包括 \n
.readlines 读取所有行返回列表，每行一个列表元素
.seek() 移动指针，
      - 第一参数为偏移量，前移正，后移负
      - 第二参数为位置，0开头，1当前，2末尾
.writelines() 写入多行/列表（需要自己加换行）

## OS（import os）

os.getcwd() 返回当前工作目录
os.chdir(path) 改变当前工作目录
os.listdir(path) 列出目录内容
os.mkdir(name) 创建一个新目录
os.rmmir(path) 删除一个空目录，目录不空报错
os.system() 执行shell命令
os.getenv(var) 获取指定的环境变量，不存在返回None
os.rename(path,new_path) 重命名/移动文件

...

## 错误处理

1. try: ... except: ... else: ... finally: ...
      - 先执行try，如果没有异常则跳过except，反之运行except
      - 如果有异常，就执行else语句
      - 不管有没有异常都会执行finally，大部分时间没什么用
2. 用户可以通过继承 Exception 类来自定义异常
3. raise Exception 可以抛出异常，和异常描述
4. Exception() 生成时会将括号内的str指定为异常描述 

## 面向对象OOP

1. 在类内部 方法外部的 变量是属于所有类的
2. 在init方法 内部的变量是属于 该类自己的
3. 变量以 __开头，意味着变量私有化

__init__构造函数，生成时调用
__del__析构函数，释放时调用
__len__获得长度 __setitem__按索引赋值 __getitem__按照索引获取值
__call__函数调用(像函数一样被调用时)
__mod__求余运算 __pow__乘方运算
__add__加运算 __sub__减运算 __mul__乘运算 __truediv__除运算
