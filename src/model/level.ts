export enum ELevelIcon {
  'l1' = 'level_1_folder',
  'l2' = 'level_2_folder',
  'f' = 'file',
}

export type TLevel = 1 | 2 | 3;

export const typeMap: Record<keyof typeof ELevelIcon, TLevel> = {
  l1: 1,
  l2: 2,
  f: 3,
};