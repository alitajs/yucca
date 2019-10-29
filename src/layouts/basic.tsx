import React, { FC } from 'react';
import { connect } from 'dva';
import EditStage from '@/components/EditStage';
import NavController from '@/components/NavController';
import EditInfluence from '@/components/EditInfluence';
import SideMenu from '@/components/SideMenu';
import { ConnectProps, ConnectState, GlobalModelState } from '@/models/connect';
import styles from './basic.module.less';

interface BasicLayoutProps extends ConnectProps {
  global: GlobalModelState
}

const BasicLayout: FC<BasicLayoutProps> = (props) => {
  const { dispatch, global, location } = props;

  const handleMediaChange = (type) => {
    dispatch({
      type: 'global/changeMedia',
      payload: type
    })
  };

  return (
    <div className={styles.editWrapper} key="2">
      <div className={styles.editLeftView}>
        <NavController location={location} />
        <div className={styles.editContentWrapper}>
          <SideMenu />
          <div className={styles.editStageWrapper}>
            {/** 切换编译器视图显示 */}
            <EditInfluence
              media={global.media}
              onChange={handleMediaChange}
            />
            <EditStage
              media={global.media}
              {...props}
            />
          </div>
        </div>
      </div>
      <div className={styles.editRightView}>

      </div>
    </div>
  )
};

export default connect(({
  global
}: ConnectState) => ({
  global
}))(BasicLayout);
