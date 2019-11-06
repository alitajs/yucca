import { DvaModelBuilder } from 'dva-model-creator';
import { fetchUserData } from '@/actions/user';
import { AppGlobalStore } from '@/common/types';
import { resetHistory } from '@/utils/localStorage';

const initState: AppGlobalStore['user'] = {
  templateData: {}
};

const model = new DvaModelBuilder(initState, 'user')
  .subscript(({ dispatch }) => {
    dispatch(fetchUserData());
  })
  .takeEvery(fetchUserData, function *(payload, { call, put }) {
    // 重置操作历史记录
    resetHistory();
  })
  .build();

export default model;
