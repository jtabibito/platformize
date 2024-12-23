# platformize-playcanvas-taobao 淘宝小程序 DEMO

[platformize](https://github.com/deepkolos/platformize)

淘宝小程序网络限制较严格, 涉及网络的均需要跑需要走云存储或者域名白名单, 所以目前只有无网络例子能跑起来

<div>
  <img src="https://raw.githubusercontent.com/deepkolos/three-platformize-demo-taobao/master/demo.gif" width="250" alt="" style="display:inline-block;"/>
</div>

# 运行

```sh
# 全局依赖(若未安装)
pnpm i -g @microsoft/rush concurrently @swc/cli @swc/core

# 安装/更新依赖
> rush update

# dev 进入到本目录后
> pnpm dev

# 淘宝小程序开发工具打开本目录即可

# prod 进入到本目录后
> pnpm build
```

## 模拟器预览

需要把 `canvas` `type` 设置为 `2d`，模拟器才能获取节点

## 模型存储

由于淘宝小程序有十分严格 URL 管控，且难申请域名白名单，推荐使用云存储存放模型，
DEMO 里只有 GLTFLoader 是使用淘宝的域名，所以其他 Loader 的 Demo 真机无法预览

```js
try {
  const [{ url }] = await cloud.file.getTempFileURL({
    fileId: ['cloud://C0893B9B822D3F4671F69A3EE9D519BF//RobotExpressive.glb'],
  });
  console.log(url);
  // my.showToast({ content: 'got gltf url:' + url });
  const gltf = await gltfLoader.loadAsync(url);
  gltf.scene.position.y = 0.5;
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  scene.add(gltf.scene);
  my.alert({ content: 'got gltf ' + Object.keys(gltf).join('-') });
} catch (error) {
  my.alert({ content: 'error:' + error });
}
```

## 讨论

可通过`飞书`群里 DeepKolos 联系我, ~~QQ群广告太多了~~

<img width="250" src="https://raw.githubusercontent.com/deepkolos/platformize/main/docs/lark-group.jpeg" />
# 赞助

如果项目对您有帮助或者有适配需求，欢迎打赏

<img src="https://upload-images.jianshu.io/upload_images/252050-d3d6bfdb1bb06ddd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="赞赏码" width="300">

感谢各位支持~~
