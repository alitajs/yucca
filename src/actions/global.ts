import { actionCreatorFactory } from 'dva-model-creator';
import { MediaType } from '@/common/types';

const actionCreator = actionCreatorFactory('global');
export const changeMedia = actionCreator<MediaType>('changeMedia');
