import React, { useState, useEffect } from 'react';
import { Menu, Button, Icon, Dropdown, message } from 'antd';
import { getUserTemplateIds } from '@/utils/storage';
import { DEFAULT_USER_NAME } from '@/config';
import styles from './nav-controller.module.less';

const { Item, ItemGroup } = Menu;

const NewFileButton: React.FC = (props) => {
  const { children } = props;
  const [templateIds, setTemplateIds] = useState<string[]>([]);

  useEffect(() => {
    setTemplateIds(getUserTemplateIds(DEFAULT_USER_NAME));
  }, []);

  const handleNew = () => {

  };

  const newIcon = (
    <a
      className={styles.newFileButton}
      onClick={handleNew}
    >
      {children || <Icon type="file-add" />}
    </a>
  );

  return (
    <div>
      {newIcon}
    </div>
  )
};

export default NewFileButton;
