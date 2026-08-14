export const name = 'tool-vina'
export const inject = ['tools']
export type Config = Record<string, never>

/**
 * 骨架插件：分子对接工具开发中，当前不注册任何工具。
 * 规划：vina_version（可用性探测）、vina_dock（对接执行 + 打分表解析）。
 * 设计要点见 README.md；安装本插件不会影响 DSH 启动。
 */
export function apply(_ctx: unknown, _config: Config = {}): void {
  /* 规划中的工具在此注册 */
}
