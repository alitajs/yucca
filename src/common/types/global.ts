// 当前操作编译器的界面类型
// desktop: 桌面端 mobile: 移动端
export type MediaType = 'desktop' | 'mobile';

export interface GlobalStore {
  media: MediaType;
}
