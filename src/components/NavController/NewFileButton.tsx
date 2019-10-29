import React, { FC, useState, useEffect } from 'react';
import { Location } from 'history';
import { Menu, Button, Icon, Dropdown, message } from 'antd';
import AV from '@/utils/leanCloud';
import { getUserTemplateIds } from '@/utils/storage';
import { saveTemplateToLocalStorage } from '@/utils/utils';
import {
  DEFAULT_USER_NAME,
  DEFAULT_TEMPLATE_DATA,
  DEFAULT_FILE_NAME
} from '@/config';
import styles from './nav-controller.module.less';

const { Item, ItemGroup } = Menu;

export interface NewFileButtonProps {
  location?: Location;
}

const NewFileButton: FC<NewFileButtonProps> = (props) => {
  const { children, location } = props;
  const [templateIds, setTemplateIds] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const query = location['query'];
    if (query && query.uid) {
      setSelectedKeys([query.uid])
    }
    setTemplateIds(getUserTemplateIds(DEFAULT_USER_NAME));
  }, [location]);

  const handleNew = async () => {
    const ProjectObject = AV.Object.extend(DEFAULT_FILE_NAME);

    const templateRecord = new ProjectObject();

    templateRecord.set('template', DEFAULT_TEMPLATE_DATA.template);
    templateRecord.set('config', DEFAULT_TEMPLATE_DATA.config);
    templateRecord.set('style', DEFAULT_TEMPLATE_DATA.style);
    templateRecord.set('other', DEFAULT_TEMPLATE_DATA.other);
    templateRecord.set('page', DEFAULT_TEMPLATE_DATA.page);

    try {
      const template = await templateRecord.save();

      saveTemplateToLocalStorage(DEFAULT_USER_NAME, template);
    } catch (error) {}
  };

  const getNewMenu = () => {
    const localChild = templateIds.map((key) => (
      <Item
        key={key}
        title={key}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          className="bar-list-text"
        >
          {key}
        </span>
      </Item>
    ));

    return localChild.length && (
      <Menu
        style={{ width: 300, textAlign: 'center' }}
        onClick={this.onClickItem}
        selectedKeys={selectedKeys}
      >
        <ItemGroup title="近期所建" key="0">
          {localChild}
        </ItemGroup>
      </Menu>
    );
  };

  const newIcon = (
    <a
      className={styles.newFileButton}
      onClick={handleNew}
    >
      {children || <Icon type="file-add" />}
    </a>
  );

  const menuNewDropDown = getNewMenu();

  return menuNewDropDown ? (
    <Dropdown
      overlay={menuNewDropDown}
      placement="bottomCenter"
    >
      {newIcon}
    </Dropdown>
  ) : newIcon;
};

export default NewFileButton;
