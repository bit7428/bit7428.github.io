---
title: Numpy基本语法
published: 2026-03-22
description: '依旧是仅供参考的Numpy基础语法，主要作用是提醒'
image: ''
tags: [Python,机器学习,数据分析,Numpy]
category: '基础人们'
draft: false 
lang: ''
---
# NUMPY 入门笔记

跟着视频做的，依旧不具备任何学习价值，只是提醒一下

## Ndarray

 - 支持0-2以及更高维的数组，但一般只用1-2维，一般配合Pandas库进行数据分析
 - 内存数据类型必须一致，如果创建时数据类型不同，则会强制转换
 - 基于连续的内存块存储

## Ndarray的属性

1. arr.shape    形状
2. arr.ndim     维度数
3. arr.size     总元素数目
4. arr.dtype    数组类型
5. arr.T        转置
6. arr.itemsize 每个元素占用的内存字节数
7. arr.nbytes   数组总内存占用量
8. arr.flags    内存储存方式是否为连续

## Ndarray的创建

1. np.array()   基础创建
2. np.copy(arr) 复制一个数组

3. np.zeros(shape)  预定义形状，全0
4. np.ones(shape)   全1
5. np.empty(shape)  全空（随机填）
     - .zeros_like(arr)
     - .ones_like(arr)
     - .empty_like(arr)
6. np.full(shape,var)   预定义形状和值，无值报错

7. np.arange(start, end, step)  默认生成 1 维
8. np.linspace(start, end, num) 同上
9. np.logspace(start, end, step, base=10)   生成一列对数间隔数列，依次取不同幂数

10. np.eye(边长/行,列 axis=0)   生成单位矩阵
11. np.diag([主对角线上的数字])  生成对角矩阵

12. np.random.rand(行,列)   0-1的随机数组
13. np.random.uniform(a, b, shape)  指定范围内的随机数组
14. np.random.randint(a, b, shape)  指定范围内的随机整数组
15. np.random.randn(shape)   正态分布概率随机数组
16. np.random.seed()    设置种子

## Ndarray的数据类型

 - bool，int8-64，unint8-64，float16-64，complex64-128

## Ndarray的索引和切片

1. arr[:][:] 和 arr[: , :]
2. arr[expression] 布尔索引
      - 通过表达式来索引，针对全数组，返回一个一维数组
      - 支持& |等逻辑运算符

## Ndarray运算

1. shape相同的arr支持所有算术运算，结果是对应位置的数字进行计算
2. arr和标量支持所有算术运算，结果是所有位置的数字与标量进行计算

### 广播机制

把要运算的数组的shape列出来，每一维度如果满足下面两个条件之一
 - 两个数组该维度的大小相等
 - 某个数组在该维度的大小为 1 
就可以触发广播机制，即使shape不同，也可支持算术运算
（广播机制实际上涵盖了shape相同的情况）

## Ndarray常用函数

### 基本数学函数

1. np.sqrt(arr)     返回平方根计算后的数组
2. np.exp(arr)      返回e^x计算后的数组
3. np.log()         返回ln计算后的数组（类似还有log10，log2）
4. np.sin()         返回sin计算后的数组（类似还有cos，tan）
5. np.abs()         返回取绝对值之后的数组
6. np.power(a,b)
      - 数组+标量，可以直接计算
      - 数组+数组，满足广播机制才可以
7. np.round(arr,n)  返回四舍五入n位后的数组

### 统计函数

1. np.sum(arr)      求和，全体
2. np.mean()        同上，但求平均值
3. np.median(arr)   求中位数   
4. np.std(arr)      求标准差         
5. np.var(arr)      求方差
6. np.min(arr)      求最小
7. np.max(arr)      求最大
8. np.percentile()  求分位数
      - 以上函数都有axis参数
      - axis = 0按列进行操作，= 1按行进行操作

### 比较函数

1. np.greater(arr,b)          返回 值 是 是否大于num的数组
      - np.less()np.equql()同上用法
      - b 可以为数组，但要满足广播机制
3. np.logical_and(arr,b)      返回逻辑计算后的数组（机制同上）
      - np.logical_or() 用法同上
      - b 机制也同上
      - np.logical_not(arr) 也是逻辑计算后，单只要一个数组

4. np.where(expression,T,F)
      - expression为真，则从T里边取值，反之从F中取值
      - 基本用法是，令T为arr，取arr中相应位置的值，F为0，表示不符合
      - 可嵌套
5. np.select([exp1,exp2...],[val1,val2...])
      - 效果类似上边，只不过只定义了为真的情况，所以尽量把条件覆盖全面

### 排序函数

1. arr.sort() 在原数组上排序 / np.sort(arr) 返回排序后的数组
2. np.argsort(arr)  返回 值为排序后的索引 的数组
3. np.unique(arr)   返回 去重后排序的 数组
4. np.split(arr,n)  返回 n 个由 arr 分割出来的数组，一定要整除
      - n 可以为 [n1,n2...] 表示切割处的索引，在该索引前隔开
5. np.reshape(arr,shape)    重新塑形