# My Notes - 使用说明

这个文件夹用于存放你的日常课程笔记，之后可以整理到网站中。

## 文件夹结构

```
my-notes/
├── notes/
│   ├── course-name/         # 每门课程一个文件夹
│   │   ├── lecture-1.md     # 课程笔记
│   │   ├── lecture-2.md
│   │   └── images/          # 这门课的图片
│   │       └── .gitkeep
│   └── another-course/      # 另一门课
│       ├── notes.md
│       └── images/
└── README.md
```

## 如何使用

### 1. 新建课程文件夹
为每门课程在 `notes/` 下创建一个文件夹：
```
my-notes/notes/你的课程名/images/
```

### 2. 写笔记
- 将 `.md` 笔记文件放入对应的课程文件夹
- 将图片放入该课程的 `images/` 文件夹
- 在笔记中使用相对路径引用图片：`![图片描述](./images/你的图片.png)`

### 3. 整理到网站
当你准备好将某门课程发布到网站时，告诉我课程名称，我会：
1. 在 `docs/` 下创建课程文件夹
2. 移动笔记和图片
3. 更新网站导航配置
4. 更新首页和索引页面

## 示例

假设你有一门 "Machine Learning" 课程：

```
my-notes/notes/machine-learning/
├── lecture-1.md
├── lecture-2.md
└── images/
    ├── diagram.png
    └── formula.png
```

在 `lecture-1.md` 中引用图片：
```markdown
![示意图](./images/diagram.png)
```
