import {
  saveTemplate,
  pushToHistory,
  getCurrentData,
  saveCurrentData,
  getUserTemplateIds,
  removeHistoryAfter,
  unShiftToUserTemplateIds
} from './localStorage';

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

export function saveTemplateToLocalStorage(uid, template) {
  const { id, attributes } = template;

  saveTemplate({ id, attributes });

  const templateIdsInLocalStorage = getUserTemplateIds(uid);

  if (!templateIdsInLocalStorage.some(anId => anId === id)) {
    unShiftToUserTemplateIds(uid, id);
  }

  updateHistory(template);
}
