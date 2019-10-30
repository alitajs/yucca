import { Effect } from 'dva';
import { Reducer } from 'redux';
import { resetHistory } from '@/utils/localStorage';
import { getCurrentTemplateId } from '@/utils/utils';

export interface UserModelState {
  templateData: {
    id?: string
  }
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchUserData: Effect;
  };
  reducers: {
    changeMedia: Reducer<UserModelState>;
  };
}

const UserModal: UserModelType = {
  namespace: 'user',
  state: {
    templateData: {}
  },
  effects: {
    *fetchUserData({ payload }, { call, put }) {
      // 重置操作历史记录
      resetHistory();

    }
  },
  reducers: {
    changeMedia(state, { payload }): UserModelState {
      return {
        ...state,
        templateData: payload || {}
      };
    },
  }
};

export default UserModal;
