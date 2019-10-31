import * as r from 'ramda';
import {DEFAULT_USER_NAME, DEFAULT_TEMPLATE_DATA, DEFAULT_FILE_NAME} from '@/config';
import {
  saveTemplate,
  pushToHistory,
  getCurrentData,
  saveCurrentData,
  getUserTemplateIds,
  removeHistoryAfter,
  unShiftToUserTemplateIds
} from './localStorage';
import AV from "@/utils/leanCloud";

export function updateHistory(template) {
  const { noHistory } = template;
  if (!noHistory || noHistory === 'handle') {
    template.date = template.date || Date.now();
    delete template.noHistory;
    if (!noHistory) {
      removeHistoryAfter(getCurrentData());
      pushToHistory(template);
    }

    saveCurrentData(template);
  }
}

export function getCurrentTemplateId(hash, data) {
  if (hash) return hash;
  if (data) return undefined;

  return r.compose(r.last, getUserTemplateIds)(DEFAULT_USER_NAME);
}

export function saveTemplateToLocalStorage(uid, template) {
  const { id, attributes } = template;

  saveTemplate({ id, attributes });

  const templateIdsInLocalStorage = getUserTemplateIds(uid);

  if (!templateIdsInLocalStorage.some(anId => anId === id)) {
    unShiftToUserTemplateIds(uid, id);
  }

  updateHistory(template);
}

/**
 * 创建一个新模板
 * @param uid
 * @param data
 */
export function newTemplate(uid, data = DEFAULT_TEMPLATE_DATA) {
  return new Promise(async (resolve, reject) => {
    const ProjectObject = AV.Object.extend(DEFAULT_FILE_NAME);

    const templateRecord = new ProjectObject();

    templateRecord.set('template', DEFAULT_TEMPLATE_DATA.template);
    templateRecord.set('config', DEFAULT_TEMPLATE_DATA.config);
    templateRecord.set('style', DEFAULT_TEMPLATE_DATA.style);
    templateRecord.set('other', DEFAULT_TEMPLATE_DATA.other);
    templateRecord.set('page', DEFAULT_TEMPLATE_DATA.page);

    try {
      const template = await templateRecord.save();

      saveTemplateToLocalStorage(DEFAULT_USER_NAME, template);

      resolve(template);
    } catch (error) {
      reject(error);
    }
  })
}
