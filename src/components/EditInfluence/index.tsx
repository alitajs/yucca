import React from 'react';
import { Select, Icon } from 'antd';
import styles from './index.module.less';

interface IEditInfluenceProps {
  mediaStateSelect?: string;
}

const Option = Select.Option;

const EditInfluence: React.FC<IEditInfluenceProps> = (props) => {
  const { mediaStateSelect } = props;

  const handleChange = () => {

  };

  return (
    <div className={styles.editInfluence}>
      <div>
        <Select
          defaultValue={mediaStateSelect}
          size="small"
          onChange={handleChange}
        >
          <Option value="Desktop">
            <Icon type="laptop" style={{ fontSize: '12px' }} />
            <span style={{ marginLeft: 4 }}>
                Desktop
              </span>
          </Option>
          <Option value="Mobile">
            <Icon type="mobile" style={{ fontSize: '12px' }} />
            <span style={{ marginLeft: 4 }}>
                Mobile
              </span>
          </Option>
        </Select>
      </div>
    </div>
  )
};

EditInfluence.defaultProps = {
  mediaStateSelect: 'Desktop'
};

export default EditInfluence;
