import React from 'react';
import NavController from '@/components/NavController';
import styles from './basic.module.less';

const BasicLayout: React.FC = () => {
  return (
    <div className={styles.editWrapper} key="2">
      <div className={styles.editLeftView}>
        <NavController />
      </div>
      <div className={styles.editRightView}>

      </div>
    </div>
  )
};

export default BasicLayout;
