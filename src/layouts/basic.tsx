import React, { FC, useEffect, useState } from 'react';
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
  const { dispatch, global, children, match } = props;
  const [currentTemplateId, setCurrentTemplateId] = useState<string>('');

  useEffect(() => {
    if (match.params['templateId']) {
      setCurrentTemplateId(match.params['templateId'])
    } else {
      setCurrentTemplateId('');
    }
  }, [props.location]);

  const handleMediaChange = (type) => {
    dispatch({
      type: 'global/changeMedia',
      payload: type
    })
  };

  return (
    <div className={styles.editWrapper} key="2">
      <div className={styles.editLeftView}>
        <NavController
          currentTemplateId={currentTemplateId}
        />
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
      {children}
    </div>
  )
};

export default connect(({
  global
}: ConnectState) => ({
  global
}))(BasicLayout);
