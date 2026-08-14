export const name = 'tool-pymol'
export const inject = ['tools']
export type Config = Record<string, never>

/**
 * 骨架插件：PyMOL 无头脚本工具开发中，当前不注册任何工具。
 * 规划：pymol_version（可用性探测）、pymol_cmd（-cq 模式执行命令串：加载/测量/渲染）。
 * 安装本插件不会影响 DSH 启动。
 */
export function apply(_ctx: unknown, _config: Config = {}): void {
  /* 规划中的工具在此注册 */
}
