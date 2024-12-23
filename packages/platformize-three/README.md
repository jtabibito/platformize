# platformize-three

一个让 THREE 平台化的项目, 从[three-platformize](https://github.com/deepkolos/three-platformize)迁移过来

## DEMO

> 注：运行 DEMO 时记得开启调试模式，取消域名验证，使用**最新版本**微信开发工具打开

> 具体 Loader 使用方法的 Demo 在这个仓库下[tests-three](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/tests-three/index.ts)

<table>
  <tbody>
    <tr>
      <th>
        <a href="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat/README.md">微信小程序 DEMO</a><br />
        <a href="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat-simple/README.md">微信小程序基础版 DEMO</a><br />
        <a href="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat-game/README.md">微信小游戏 DEMO</a>
      </th>
      <th>
        <a href="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-taobao">淘宝小程序 DEMO</a>
      </th>
      <th>
        <a href="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-byte">字节小程序 DEMO</a>
      </th>
    </tr>
    <tr>
      <td>
        <img
          src="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat/demo.gif"
          width="250"
          alt=""
        />
        <div>
          <img
            src="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat/qrcode.jpg"
            width="150"
            alt=""
          />
        </div>
      </td>
      <td>
        <img
          src="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-taobao/demo.gif"
          width="250"
          alt=""
        />
      </td>
      <td>
        <img
          src="https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-byte/demo.gif"
          width="250"
          alt=""
        />
      </td>
    </tr>
  </tbody>
</table>

## 已测试模块

#### Features

0. VSMShadow (r131 以及之前的版本可以, 见[Loop index cannot be compared with non-constant expression](https://techbrood.com/zh/news/webgl/webgl-glsl%E7%A8%8B%E5%BA%8F%E5%87%BA%E9%94%99_-loop-index-cannot-be-compared-with-non-constant-expression.html))

#### Loader

1. GLTFLoader (支持带纹理的 GLB) && (EXT_meshopt_compression 安卓可用 WASM，ios 可用 ASM 版，见 tools) && (KHR_mesh_quantization，小程序可用) [【网格压缩测评】MeshQuan、MeshOpt、Draco ](https://juejin.cn/post/6931954784018628621) (微信 8.0 后 WebAssembly API 已无法使用需要使用 WXWebAssembly, 且只支持包内 wasm, 已新增 meshopt_decoder.wasm.module, [使用见](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/tests-three/MeshOpt.ts#L8))
2. TextureLoader
3. RGBELoader & PMREMGenerator (小程序部分机型可能偶现[生成 envMap 错误](https://juejin.cn/post/6922829073920032775)，可用[HDRPrefilter](https://github.com/deepkolos/hdr-prefilter-texture)避免 )
4. SVGLoader
5. OBJLoader
6. EXRLoader (需支持 OES_texture_float_linear 扩展，部分移动端 GPU 不支持)
7. MTLLoader (小程序使用 JPG 纹理即可)
8. DDSLoader (需支持 WEBGL_compressed_texture_s3tc 扩展，移动端 GPU 不支持)
9. LWOLoader (需支持 EXT_blend_minmax 扩展，小程序一半效果绘制出错)
10. FBXLoader
11. BVHLoader
12. ColladaLoader (DOMParser querySelector 未适配)
13. TTFLoader
14. STLLoader
15. PDBLoader
16. TGALoader (改用 DataTextureLoader [PR](https://github.com/mrdoob/three.js/pull/21377) 已合并，r127 可用)
17. VTKLoader

#### Controls

0. OrbitControls & MapControls
1. DeviceOrientationControls (微信、淘宝小程序下 onDeviceMotionChange，安卓下返回数据质量极其低下，基本不可用，社区 bug 反馈 3 年多了，官方无修复意愿)

### 不支持模块

0. ImageBitmapLoader(微信小程序未开放 ImageBitmap)

#### Tools(/src/base)

0. dispose-three（销毁节点
1. flip（截屏需要 flipY
2. screenshot
3. worker-pool.module（暂未适配微信小程序
4. zstddec.worker.module（暂未适配微信小程序
5. zstddec.module（暂未适配微信小程序
6. toEnvMap（用于 hdr prefilter
7. meshopt_decoder.asm.module（微信小程序可用
8. meshopt_decoder.wasm.module（微信小程序可用

## 使用

```text
pnpm i -S platformize-three@0.133.1 three@0.133.0
```

`rollup.config.js`注入特定配置

```javascript
import { mergeRollupOptions } from 'platformize-three/dist-plugin';

export default mergeRollupOptions(
  {
    input: ['./miniprogram/pages/index/index.ts'],
    output: {
      format: 'cjs',
      dir: 'miniprogram/',
      entryFileNames: 'pages/[name]/[name].js',
    },
  },
  { minify: process.env.BUILD === 'production' },
);
```

自行组装版本见[这里](../platformize/README.md#原始方式)

> threejs+tensorflow需要禁止global的polyfill见[这里](../platformize/README.md#原始方式)

```js
import { PlatformManager, WechatPlatform } from 'platformize-three';

const width = canvasClientWidth;
const height = canvasClientHeight;
const wechatPlatform = new WechatPlatform(canvas, width, height);
PlatformManager.set(wechatPlatform);

window.innerWidth
window.innerHeight
window.devicePixelRatio
requestAnimationFrame();
cancelAnimationFrame();
const xhr = new XMLHttpRequest();
...等等
// 使用完毕后销毁资源
wechatPlatform.dispose();
```

### 详细例子

- [three-wechat](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat/README.md)
- [three-wechat-simple](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat-simple/README.md)
- [three-wechat-game](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat-game/README.md)
- [three-taobao](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-taobao/README.md)
- [three-byte](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-byte/README.md)

### 经验

0. 微信小程序不支持 2048 以上的纹理图片
1. 淘宝小程序显示 RGB 格式纹理 (JPG) 有问题，通过 TextureLoader 加载纹理后，把 texture.format 设置为 RGBAFromat 即可(淘宝版本 9.20.0)，原因可能是服务端对图片大图片优化，把图片压缩导致格式改变 RGB 变 RGBA
2. r126 不能设置全 pixelRatio，可以设置为一半，或者 2，不能是 3
3. 虽然支持加载 GLB，但图片是使用 js 版的 ArrayBuffer 转 base64，耗时且占用内存，虽可用 wasm 的 encoder 缓解 (https://github.com/marcosc90/encoding-wasm)，但wasm对字符串处理性能不如js，用AssemblyScript编译的wasm测试
4. IOS 前后进入退出页面崩可以降低 pixelRatio 缓解
5. IOS 微信 readPixels 不支持抗锯齿，如果直接 canvas 的 buffer 需要关闭抗锯齿（antialias: false）, 另一种方式是 WebglRenderTarget，同时也可以开启抗锯齿，但是纹理大小受限（小米 8 下纹理宽/高不能超过 4096，需要注意先 setSize，再 setPixelRatio）（截图 Demo 见[微信小程序 DEMO](https://raw.githubusercontent.com/deepkolos/platformize/main/examples/three-wechat/README.md)）
6. 淘宝小程序有严格的域名验证，可使用云存储放模型，但是如果模型和纹理分开则需要手动关联，推荐 GLB
7. URL 的 polyfill 可以使用 fileSystemManager 来获取临时文件的方式避免 arraybuffer 转 base64, 但是需要手动管理临时文件

### 如何更新/降级 Three 的版本？

与 web 一样, 把 three 替换为特定的版本,或者定制后的 three 即可, 不过目前只有 r133 版本测试过

### 如何编写自定义平台？

可参考`src/wechat`或者`src/taobao`编写

## TODO

0. 更彻底 dispose，减少内存泄漏，Web 测试用例已增加，微信小程序已增加，IOS 仍有内存问题，多次切页面仍会崩溃，3mb 模型 iphone7 打开 30 次
1. 适配头条小程序 done
2. 生成微信插件，通过插件实现 three 的代码跨小程序、跨小程序插件复用 done [platformize-three-plugin-wechat](https://github.com/deepkolos/platformize-three-plugin-wechat)
3. 适配微信小游戏 done
4. 适配 ReactNative

## 讨论

可通过`飞书`群里 DeepKolos 联系我, ~~QQ群广告太多了~~

<img width="250" src="https://raw.githubusercontent.com/deepkolos/platformize/main/docs/lark-group.jpeg" />
### [CHANGELOG](https://github.com/deepkolos/platformize-three/blob/master/CHANGELOG.md)

# 赞助

如果项目对您有帮助或者有适配需求，欢迎打赏

<img src="https://upload-images.jianshu.io/upload_images/252050-d3d6bfdb1bb06ddd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="赞赏码" width="300">

感谢各位支持~~

| 时间       | 大佬                                       |
| ---------- | ------------------------------------------ |
| 2021/11/10 | 神神                                       |
| 2021/09/27 | 阿不                                       |
| 2021/08/10 | 奥本未来                                   |
| 2021/07/28 | Noth1ng                                    |
| 2021/07/09 | 匿名                                       |
| 2021/07/07 | [云图 CAD-刘鑫](https://www.yuntucad.com/) |
| 2021/06/23 | Fong                                       |
| 2021/06/23 | 刘子弃                                     |
| 2021/06/23 | Joson                                      |
| 2021/06/03 | 仿生伏尔泰                                 |
| 2021/04/28 | Noth1ng                                    |
