import React, { FC } from 'react';
import classNames from 'classnames';
import { Icon, Tooltip } from 'antd';
import { MediaType } from '@/models/global';
import styles from './index.module.less';

interface EditInfluenceProps {
  media?: MediaType;
  onChange?: (type: MediaType) => void;
}

const EditInfluence: FC<EditInfluenceProps> = (props) => {
  const { media, onChange } = props;

  const handleChange = (type: MediaType) => {
    onChange && onChange(type);
  };

  return (
    <div className={styles.editInfluence}>
      <div>
        <Tooltip title="Desktop">
          <Icon
            type="laptop"
            className={classNames({
              [styles.active]: media === 'desktop'
            })}
            onClick={() => { handleChange('desktop') }}
          />
        </Tooltip>
        <Tooltip title="Mobile">
          <Icon
            type="mobile"
            className={classNames({
              [styles.active]: media === 'mobile'
            })}
            onClick={() => { handleChange('mobile') }}
          />
        </Tooltip>
      </div>
    </div>
  )
};

EditInfluence.defaultProps = {
  media: 'desktop'
};

export default EditInfluence;
