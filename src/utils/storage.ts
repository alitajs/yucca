import store from 'store';
import { isString } from '@alitajs/autils';
import { LOCAL_STORAGE_HISTORY_KEY, LOCAL_STORAGE_CURRENT_DATA_KEY } from '@/config';

/**
 * 获取某个用户模所有的模板ID
 * @param userId 用户ID
 */
export function getUserTemplateIds(userId: string) {
  const value = store.get(userId, []);

  if (isString(value)) {
    return value.split(',').filter(c => c);
  } else {
    return value;
  }
}

export const getHistory = () => store.get(LOCAL_STORAGE_HISTORY_KEY, []);

export const saveCurrentData = (data: any) => {
  store.set(LOCAL_STORAGE_CURRENT_DATA_KEY, data);
};

export const getCurrentData = () => store.get(LOCAL_STORAGE_CURRENT_DATA_KEY, {});
