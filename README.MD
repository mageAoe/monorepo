
## 创建硬链接

> 共享地址

1. 创建一个ying.js

2. mklink /H ying.js index.js 

将ying.js链接到index.js上，当ying.js改变的时候,index.js也会跟着改

## 创建软链接

> 相当于快捷键

```
mklink ruan.js index.js 
```

## monorepo 架构

1. pnpm init

2. 在最外层创建 ```pnpm-workspace.yaml``` 并配置下面

```shell

packages:
  # all packages in direct subdirs of packages/
  - 'main'
  # all packages in subdirs of components/
  - 'web/**'

```

3. 在```pnpm-workspace.yaml```目录下 ```pnpm install```


**注释：可以在 monorepo 目录下 执行react-demo项目 ```pnpm -F react-demo dev```**



## common 子模块复用

1. 创建 common 文件 是一个公共文件，可以再 react-demo使用也可以在vue-demo使用

2. 在common里面创建index.ts

3. 然后在main项目下 ```pnpm -F main add common``` 链接 ，react-demo、vue-demo使用也可以使用


## 无界使用

1. ```pnpm i wujie```

```js
import {setupApp} from "wujie";

setupApp({ name: "唯一id", url: "子应用地址", exec: true, el: "容器", sync: true })

```

### 更简单的使用

> 如何应用是vue2、vue3项目的话，那么可以直接使用已经封装好的库
> 这样就可以直接当成组件使用了

```shell
# vue2 框架
npm i wujie-vue2 -S
# vue3 框架
npm i wujie-vue3 -S
# react
npm i wujie-react -S
```

### 预加载

```js
preloadApp({name: 'vue3', url: 'http://localhost:3001/', exec: true})
preloadApp({name: 'react', url: 'http://localhost:3000/', exec: true})
```

### 传参

#### 方法一

主应用定义一个全局变量

```js
var a = 'xiaoman'

```
子应用通过 window.parent.a 就可以访问到

```js
const send = () => {
  console.log(alert(window.parent.a))
}

```

#### 方法二

> 通过props给子应用注入参数

```js
<WujieVue :props="{name:'hahaha',age:18}"  url="http://127.0.0.1:5174/" name="vue3"></WujieVue> <!--子应用vue3-->

```

> 子应用可以通过$wujie来获取：

```js
window.$wujie.props
```
> 如果报错$wujie 可以添加声明文件

```ts
declare global {
    interface Window {
        $wujie:{
            props:Record<string,any>
        }
    }
}

```

#### 方法三 event bus

> 主应用通过bus 监听

```js
import {bus} from 'wujie'
bus.$on('vue3', (data: any) => {
    console.log(data)
})

```

> 子应用通过emit触发事件（反之也可以 主应用emit触发子应用on监听）

```js
 window.$wujie.bus.$emit('vue3', {name:'hahaha',age:18})

```




