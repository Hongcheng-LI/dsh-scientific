# 插件开发指南

本仓库的插件遵循 DSH 插件规范（参考 dsh-email / dsh-at-file 等社区插件）。最小可用插件需要四个文件：

## 1. `package.json`

- `name`：`dsh-<名>`；`main`/`exports` 指向 `lib/index.js`（tsc 构建产物）
- `dsh` 字段声明注入方式：`{ "bundle": { "patch": "./cordis.patch.yml" } }`
- `files` 数组包含：`lib`、`cordis.patch.yml`、`dsh.plugin.json`、`README.md`
- `prepare: tsc` 保证安装时自动构建

## 2. `cordis.patch.yml`

向 DSH 运行时插入一行插件（空配置，装上不弄崩启动）：

```yaml
- insert:
    - id: tool-<名>      # 必须与入口文件的 export const name 一致
      name: dsh-<名>
      config: {}
```

需要配置项时在注释里写示例，用户在 profile 里覆盖。

## 3. `src/index.ts` 入口

```ts
export const name = 'tool-<名>'     // 对应 cordis.patch.yml 的 id
export const inject = ['tools']
export type Config = { /* 可配置项 */ }

export function apply(ctx: any, config: Config = {}): void {
  ctx.tools.register({
    name: '<名>_<动作>',
    description: '英文描述，给模型看的，要写清何时用、参数含义',
    parameters: { type: 'object', properties: { /* JSON Schema */ }, required: [...] },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (args, value) => [{ type: 'text', text: '中文展示' }],
    },
    async execute(args, exec) {
      // exec?.agent?.session?.header?.cwd 是会话工作区
      return result
    },
  })
}
```

要点：

- `parameters` 必须是原生 JSON Schema（对象类型），不要用 DSL
- 错误信息用中文写清"怎么修"（缺依赖/没装软件/网络受限分别给指引）
- 启动期探测失败只 `ctx.logger.warn`，不抛错
- 外部二进制用 `execFile`（参数数组、无 shell、带 timeout）

## 4. `dsh.plugin.json`

```json
{ "name": "dsh-<名>", "description": "...", "version": "0.1.0", "entry": { "name": "dsh-<名>", "inject": [] } }
```

## 测试与发布

- 单元测试放 `test/`，离线（mock/fixture），`npm test` 跑
- 真实环境联调放 `test/live.mjs`，`npm run test:live` 显式跑
- 发布：在插件目录 `npm pack` → tarball 安装；或从插件目录发 npm（monorepo 根目录不是插件包，不能整仓安装）

## 本仓库约定

- 新插件放 `plugins/<名>/`，加入 workspace（已由 `plugins/*` 通配）
- 工具名前缀 `<名>_`（如 `zotero_search`），与插件名一致避免冲突
- 骨架插件：结构齐全 + `apply` 空实现 + README 写规划，参考 `plugins/vina`
