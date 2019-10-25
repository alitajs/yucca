import React from 'react';
import classNames from 'classnames';
import { Tooltip, Icon } from 'antd';
import { objectEqual } from '@/utils';
import { getHistory, getCurrentData } from '@/utils/storage';
import styles from './nav-controller.module.less';

const HistoryButton: React.FC = () => {
  const handleHistoryClick = (type: number, e: any) => {

  };

  const getCurrentDataIndex = (data: object[]) => {
    return data.findIndex((item) => {
      return objectEqual(item, getCurrentData());
    });
  };

  const history = getHistory();
  const undoBool = history.length > 1 && getCurrentDataIndex(history) > 0;
  const redoBool = history.length > 1 && history.length - 1 - getCurrentDataIndex(history) > 0;

  return (
    <ul className={styles.historyButtonWrapper}>
      <li
        className={classNames(styles.undo, {
          [styles.disabled]: !undoBool
        })}
      >
        <Tooltip title="撤消">
          <a onClick={(e) => { handleHistoryClick(-1, e); }}>
            <Icon type="rollback" />
          </a>
        </Tooltip>
      </li>
      <li
        className={classNames(styles.redo, {
          [styles.disabled]: !redoBool
        })}
      >
        <Tooltip title="重做">
          <a onClick={(e) => { handleHistoryClick(1, e); }}>
            <Icon type="rollback" />
          </a>
        </Tooltip>
      </li>
    </ul>
  )
};

export default HistoryButton;
