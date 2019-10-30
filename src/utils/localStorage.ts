import store from 'store';
import { objectEqual } from '@/utils';
import {
  LOCAL_STORAGE_HISTORY_KEY,
  LOCAL_STORAGE_CURRENT_DATA_KEY
} from '@/config';

/**
 * 获取指定ID的模板数据
 * @param tid
 */
export function getTemplate(tid) {
  return store.get(tid, undefined);
}

/**
 * 保存模板数据
 * @param template
 */
export function saveTemplate(template) {
  store.set(template.id, template);
}

/**
 * 删除指定的模板数据
 * @param tid
 */
export function removeTemplate(tid) {
  store.remove(tid);
}

/**
 * 获取指定用户的所有模板的ID
 * @param userId
 */
export function getUserTemplateIds(userId) {
  const value = store.get(userId, []);
  return typeof value === 'string' ? value.split(',').filter(c => c) : value;
}

/**
 * 删除指定用户的所有模板的ID
 * @param userId
 */
export function removeUserTemplateIds(userId) {
  store.remove(userId);
}

/**
 * 向指定用户的模板ID集合首部插入新的模板ID
 * @param userId
 * @param tid
 */
export function unShiftToUserTemplateIds(userId, tid) {
  const ids = getUserTemplateIds(userId);
  store.set(userId, [tid, ...ids]);
}

export function removeUserTemplate(userId, tid) {
  const ids = getUserTemplateIds(userId);
  store.set(userId, ids.filter(id => id !== tid));
}

export const getHistory = () => store.get(LOCAL_STORAGE_HISTORY_KEY, []);

/**
 * 重置历史记录
 */
export const resetHistory = () => {
  store.set(LOCAL_STORAGE_HISTORY_KEY, []);
};

export const removeHistoryAfter = (data) => {
  const history = getHistory();

  const index = history.findIndex(c => objectEqual(c, data));
  if (index === -1) {
    return;
  }

  store.set(LOCAL_STORAGE_HISTORY_KEY, history.slice(0, index + 1));
};

export const pushToHistory = (data) => {
  const history = getHistory();
  if (history.length >= 30) {
    history.shift();
  }
  history.push(data);

  store.set(LOCAL_STORAGE_HISTORY_KEY, history);
};

export const saveCurrentData = (data) => {
  store.set(LOCAL_STORAGE_CURRENT_DATA_KEY, data);
};

export const getCurrentData = () => store.get(LOCAL_STORAGE_CURRENT_DATA_KEY, {});
