import React, { FC, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { MediaType } from '@/models/global';
import { ConnectProps } from '@/models/connect';
import {  } from '@/config/template';
import styles from './index.module.less';

interface Data {
  [key: string]: {
    comp: any;
    dataId: string;
  }
}

interface EditStageProps extends ConnectProps {
  media: MediaType;
}

const EditStage: FC<EditStageProps> = (props) => {
  const { media, dispatch } = props;
  const rootRef = useRef(null);
  const [data, setData] = useState<Data>(null);

  useEffect(() => {

  }, []);

  const handleOverlayScroll = () => {

  };

  const handleMouseLeave = () => {

  };

  const handleMouseMove = () => {

  };

  const handleClick = () => {

  };

  const handleDoubleClick = () => {

  };

  return (
    <div
      ref={rootRef}
      className={classNames(styles.editStage, {
        [`${styles.mobile}`]: media === 'mobile'
      })}
      onScroll={handleOverlayScroll}
      onMouseLeave={handleMouseLeave}
    >
      <div
        data-key="wrapper"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseMove}
        onClick={handleClick}
        className={styles.overlay}
        onDoubleClick={handleDoubleClick}
      >
        123
      </div>
    </div>
  )
};

export default EditStage;
