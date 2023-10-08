# 性能数据埋点框架

## 使用说明

安装依赖
```
pnpm install
```

打包
```
pnpm run b:all
```

使用platformize link到当前工程打包
```
pnpm link $pwd
```

## 项目结构

```
framework
└── src
  ├── Stats
    ├── StatsInfo.ts
  ├── workflow
    ├── index.ts
    └── Process.ts
  ├── Program.ts
  └── index.ts
```

StatsInfo提供主要的性能数据，暂时没写，通过继承自定义实现。

Program提供框架的入口，包含一个stats对象获取性能数据。
main函数传递Process，框架逻辑暂定，暂时需要自己实现，stats对象在main函数中初始化。
uploadStats实现上传性能数据的逻辑。

Process提供了一个接口注册函数，用于注册各个阶段的函数。
start中实现业务逻辑
