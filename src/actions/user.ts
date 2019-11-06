import { actionCreatorFactory } from 'dva-model-creator';

const actionCreator = actionCreatorFactory('user');
export const fetchUserData = actionCreator('fetchUserData');
