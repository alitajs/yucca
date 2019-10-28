import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.less';

const EditStage: React.FC = () => {
  const rootRef = useRef(null);

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
      className={classNames(styles.editStage)}
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

      </div>
    </div>
  )
};

export default EditStage;
