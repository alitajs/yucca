import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'react';
import { GlobalStore } from './global';
import { UserStore } from './user';

export * from './global';
export * from './user';

export interface AppGlobalStore {
  global: GlobalStore;
  user: UserStore;
}

export type RouterProps = {
  dispatch: Dispatch<any>;
} & RouteComponentProps;
