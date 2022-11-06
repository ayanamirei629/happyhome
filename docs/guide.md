# 操作手册

## **第一章节,本地部署、安装**

1. 全局安装VuePress: **npm install -g vuepress**

2. 文件结构:

```
     > docs

        >> README.md

        >> .vuepress
            >>> public 
            >>> config.js

     > package.json
```

3. 在 config.js 文件中配置网站标题、描述、主题等信息。

::: warning 注意
这是一个操作手册只需在README.md文件中书写，在本地部署后可以直接看到
:::

5. 启动命令在package.json中
    ```
    "scripts": 
    {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
    }
    ```

6. 就绪，本地部署测试： **npm run dev**

## **第二章节, MD书写方式、类别说明**

### 1.标题大小

* #对应第一标题，

* ##对应第二标题，以此类推
    
### 2.换行

* 文本尾部加两个空格 

* 空一行

### 3.文本字体

* *斜体*

* **粗体**

* ***斜体加粗***

### 4.分割线，删除线，下划线

* :smiley: 加***并且行中没有别的元素
***
* :smile: ↑分隔效果↑

* ~~:laughing:MD超简单~~

* <u>这里是下划线</u>

### 5.列表

* 单个*可以作为标记

    * Tab加*可以作为第二标记:smile:

        * 可以套娃哦:laughing: 

### 6.区块嵌套

* 区块

    * > 这里是第一层(>)

        >> 第二层(>>)

* 区块中使用列表

    * > 1. 第一项
        > 2. 第二项

* 列表中使用区块

    * 第一项
        > :smiley:
        > :laughing:
    
    * 第二项
        > :persevere:
        > :cry:

### 7.函数

* `printf("Hello World!");`

* ```
    void function hello(void)
    {
        System.out.print("Hello World");
    }
    ```

### 8.链接、图片

* 这是一个无聊的[链接](www.baidu.com)

* 这是一个赋值在末尾的无聊[链接][非常无聊] 

* 直接上html : <img src = 'https://p.qqan.com/up/2021-2/16137992359659254.jpg' width='200px' height= '50%'>
* 同上链接,赋值[末尾][头像]

### 9.表格

|开心|难过|憨憨|
|:----:|:----:|:----:|
|:smiley:|:confounded:|:open_mouth:|
|:relieved:|:sob:|:sunglasses:|

### 10.按钮，注意提示

* 按钮: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 任务管理器

::: tip 提示
这是一个提示标识
:::

::: warning 注意
这是一个主意标识
:::

::: danger 警告
这是一个警告标识
:::

### 11.表情
[表情大全][emoji] :smiley:


&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:tada:

&emsp;&emsp;&emsp;:tada::tada::tada:

&emsp;&nbsp;&nbsp;:tada::tada::tada::tada::tada:

:tada::tada::tada::tada::tada::tada::tada:


## **第三章节,页面设置**

### 1.路由、导航
* 路由及导航栏设置在 => config.js => module.export => **nav**中，已有相关显示例子在文件中

* 外部网站地址示例：
    ```
    nav: 
    [
      { text: "常见问题", link: "https://www.baidu.com/", icon: "question" }
    ]
    ```

* 路由导航设置完毕后在docs根目录下可创建md文件进行编写。如: 
    ```
    //路由导航设置
    nav: 
    [
      { text: "指南", link: "/guide/", icon: "creative" }
    [
    ```
    相关编写md文件位置：
    ```
     > docs

        >> README.md    //README.md默认为主页，主页在这里编写
        >> guide.md     //<=文件位置在这里
        >> .vuepress
            >>> public 
            >>> config.js

     > package.json
    ```

### 2.目录栏
* 页面左侧的目录栏会自动更换根据页面，如不需要，可以把config.js中 => **sidebar: 'auto', // 侧边栏配置**删除，如果一部分页面不需要，可以自行添加路由，举个栗子：
    ```
    sidebar: 
    [
      '/',
      '/guide',
    ]  
    ```







[非常无聊]: http://www.baidu.com/  
[头像]: https://p.qqan.com/up/2021-2/16137992359659254.jpg
[emoji]: https://www.webfx.com/tools/emoji-cheat-sheet/