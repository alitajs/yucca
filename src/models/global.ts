import { Reducer } from 'redux';

// 当前操作编译器的界面类型
// desktop: 桌面端 mobile: 移动端
export type MediaType = 'desktop' | 'mobile';

export interface GlobalModelState {
  media: MediaType;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    changeMedia: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    media: 'desktop'
  },
  reducers: {
    changeMedia(state, { payload }): GlobalModelState {
      return {
        ...state,
        media: payload || 'desktop'
      };
    },
  }
};

export default GlobalModel;
