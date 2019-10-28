import React from 'react';
import NavController from '@/components/NavController';
import SideMenu from '@/components/SideMenu';
import styles from './basic.module.less';

const BasicLayout: React.FC = () => {
  return (
    <div className={styles.editWrapper} key="2">
      <div className={styles.editLeftView}>
        <NavController />
        <div className={styles.editContentWrapper}>
          <SideMenu />
        </div>
      </div>
      <div className={styles.editRightView}>

      </div>
    </div>
  )
};

export default BasicLayout;
