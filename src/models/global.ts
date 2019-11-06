import { DvaModelBuilder } from 'dva-model-creator';
import { changeMedia } from '@/actions/global';
import { AppGlobalStore } from '@/common/types';

const initState: AppGlobalStore['global'] = {
  media: 'desktop'
};

const model = new DvaModelBuilder(initState, 'global')
  .case(changeMedia, (state, payload) => {
    return {
      media: payload,
    };
  })
  .build();

export default model;
