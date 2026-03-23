---
title: 呆瓜的算法笔记-第一册
published: 2026-03-23
description: '刚接触算法没多久，简单做个笔记，使用CPP实现'
image: ''
tags: [Cpp,算法]
category: '基础入门'
draft: false 
lang: ''
---
# ***呆瓜的算法笔记，第一册***

## **基本语法**

1. using namespace std;     请输入文本

2. <cstdio>     继承 C 的意志

3. <stack>      传说中的栈，就是个羽毛球筒
     - stack<int> st;   声明
     - st.push(x)       塞一个羽毛球
     - st.pop()         拿一个羽毛球
     - st.top()         返回筒口元素
     - st.empty()       是否为空
     - st.size()        看看几个羽毛球

4. <queue>      ...口袋破了的羽毛球筒
     - 方法同上，但pop不是从筒口拿出来，而是从破洞里漏下去
     - 因为有两个洞，所以只有 .front() 和 .back()，用.top() 会报错

     - priority_queue<int> q; 队首固定为最大值
     - priority_queue<int, vector<int>, greater<int>> q; 队首固定为最小值
     - vector 和 greater 是自带的，不需要额外导入库
     - 顺便priority_queue有.top()，没有.front() .back()（这玩意为什么不在栈里）

5. <vector>     array我们不要再联系了，我怕vector误会
     - vector<int> v;   声明
     - v.push_back()    尾部添加
     - v.pop_back()     尾部删除
     - v.front()/back() 头和尾 的值！
     - v.begin()/end()  头和尾 的迭代器！
     - v.size()         元素总数
     - v.empty()        是否为空
     - v.clear()        清空元素
     - v.insert(v.begin()+index, val)    插入元素
     - v.erase(v.begin()+index)          删除元素

5. <unordered_map>    是不是应该先写 map?
     - unordered_map<int,string>  um; 声明
     - um[key] = value;             添加/修改元素
     - um.first/um.second           取键/值
     - um.count(key)                是否存在
     - um.find(key)                 返回迭代器
     - um.erase(key)                删除元素
     - um.size()                    元素个数
     - um.clear()                   清空
     - um.empty()                   是否为空
     - for(auto &p:um)              遍历（乱序）
     - um.end()（标识着遍历结束）是一个迭代器
     - um.begin() 也是一个迭代器，当哈希表只有一个元素时可以指定到
          -如果要取begin的值或键，需要 -> 解引用

6. <unordered_set>    ...是不是应该先写 set?
     - unordered_set<int> us;   声明
     - us.insert(x)           插入元素
     - us.erase(x)            删除元素（迭代器和值都可）
     - us.count(x)            是否存在
     - us.size()              元素数量
     - us.empty()             是否为空
     - us.clear()             清空集合

7. <set> / <map>    eee,跟前两个一样，但是多了索引找值的方式
      - 注意cpp的set非常呆板，因为这个set是有序的集合，unorder_set更接近数学上的集合

8. <algorithm>  ...请输入文本
     - sort() find() max() min() reverse() count() swap() binary_search()...

## **——冥——想——**

1.   **关于堆**
      - priority_queue支持键值对的排序，对于键的排序如下（只展示小堆栈）
      - priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

      - 对于值的排序稍微麻烦点，需要自定义比较器
     ```cpp
     struct Cmp {
          bool operator()(pair<int, int>& a, pair<int, int>& b)
          // 注意这是两个括号
          {
               return a.second < b.second;
               // 大堆栈用 <,小堆栈用 >
          }
     };
     priority_queue<pair<int, int>, vector<pair<int, int>>, Cmp>> pq;
     // 以上是大堆栈
     struct cmp {
          bool operator()(pair<int, int>& a, pair<int, int>& b)
          {
               return a.second > b.second;
          }
     };
     priority_queue<pair<int, int>, vector<pair<int, int>>, cmp>> pq;
     // 以上是小堆栈
     ```

2.   **关于活在数组里二叉树**
      - 题目按莫名其妙的顺序给出二叉树的节点值和分叉时，往往很难串联构造出二叉树
      - 所以！可以直接用数组模仿二叉树，例如用 val[100] 储存节点值，l[100] r[100] 分别储存左右节点的序号
      - 如果需要求 子树节点数，则可再加一个 sz[100] 专门用来储存各个节点的子树
      - 关于子树节点计数：
     ```
     void dfs_size(int u) //此处的 u 代表节点序号，正经题换成 TreeNode* 即可
     {
          if (u == -1) return;
          sz[u] = 1;
          dfs_size(l[u]); //顾名思义，l[u]指 u 的左节点，r[u]指 u 的右节点
          dfs_size(r[u]);
          sz[u] += sz[l[u]] + sz[r[u]];
     }
     ```
      - 写入二叉树完成后，运行 dfs_size(1); 就可以填充完 sz[100] 了
      - 另，一般来说，满二叉树的数据储存量非常恐怖，所以一般 递归 的方法不会爆栈
      - 尽管使用！（也不是，最好也学一下二叉树的基本方法的非递归方式）

3.   **关于并查集**
      - 主要用来解决动态连通性问题(我也不明白❓)，大概就是检查两个点是否是连同的
      - 比如亲戚关系，甭管远近，能连上就算亲戚，我和你是亲戚，你和他是亲戚，如何检验我和他是否是亲戚就要用到并查集
      - 以下是一个并查集板子，并查集的结构更像是一个树
     ```cpp
     #include <vector>
     struct DSU
     {
          vector<int> parent;
          vector<int> rank;
          //表示分支的深度，为了防止出现类似链表的单向纵深
          //在合并关系时，需要优化深度，让递归层数少点
          DSU(int n)
          //初始化，普通题目也可以不用vector
          {
               parent.resize(n+1);
               rank.resize(n+1,0);
               //初始化时，每个人的关系深度是 0
               for(int i=1;i<=n;i++)
               {
                    parent[i]=i;
                    //初始时 每个人的祖宗是他自己
               }
          }

          int find(int x)
          //寻找 x 的祖宗
          {
               if(parent[x]!=x)
               {
                    parent[x] = find(parent[x]);
               }
               return parent[x];
          }

          void unite(int x,int y)
          //把 x 和 y 并在一起
          {
               x = find(x);
               y = find(y);
               if(x==y)return;
               if(rank[x]<rank[y])
               {
                    parent[x] = y;
               }else 
               {
                    parent[y] = x;
                    if(rank[x]==rank[y])rank[x]++;
               }
               //if else分支的主要作用是为了优化分支深度
          }
     };
     ```