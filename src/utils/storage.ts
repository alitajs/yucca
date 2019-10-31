import store from 'store';
import { LOCAL_STORAGE_HISTORY_KEY, LOCAL_STORAGE_CURRENT_DATA_KEY } from '@/config';

export const getHistory = () => store.get(LOCAL_STORAGE_HISTORY_KEY, []);

export const saveCurrentData = (data: any) => {
  store.set(LOCAL_STORAGE_CURRENT_DATA_KEY, data);
};

export const getCurrentData = () => store.get(LOCAL_STORAGE_CURRENT_DATA_KEY, {});
