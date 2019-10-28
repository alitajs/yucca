import React from 'react';
import NavController from '@/components/NavController';
import EditInfluence from '@/components/EditInfluence';
import SideMenu from '@/components/SideMenu';
import styles from './basic.module.less';

const BasicLayout: React.FC = () => {
  return (
    <div className={styles.editWrapper} key="2">
      <div className={styles.editLeftView}>
        <NavController />
        <div className={styles.editContentWrapper}>
          <SideMenu />
          <div className={styles.editStageWrapper}>
            <EditInfluence />
          </div>
        </div>
      </div>
      <div className={styles.editRightView}>

      </div>
    </div>
  )
};

export default BasicLayout;
