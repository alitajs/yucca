import React, { FC, useState, useEffect } from 'react';
import { Menu, Button, Icon, Dropdown } from 'antd';
import { router } from 'umi';
import IconFont from '@/components/IconFont';
import {
  removeUserTemplate,
  getUserTemplateIds,
  removeTemplate
} from '@/utils/localStorage';
import { DEFAULT_USER_NAME } from '@/config';
import { newTemplate, removeCloudTemplate } from '@/utils/utils';
import styles from './nav-controller.module.less';

const { Item, ItemGroup } = Menu;

export interface NewFileButtonProps {
  currentTemplateId?: string
}

const NewFileButton: FC<NewFileButtonProps> = (props) => {
  const { children, currentTemplateId } = props;
  const [templateIds, setTemplateIds] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setTemplateIds(getUserTemplateIds(DEFAULT_USER_NAME));
  }, []);

  useEffect(() => {
    if (currentTemplateId) {
      setSelectedKeys([currentTemplateId])
    } else {
      setSelectedKeys([])
    }
  }, [props.currentTemplateId]);

  // 创建一个新的模板
  const handleClickNew = () => {
    newTemplate(DEFAULT_USER_NAME)
      .then((data) => {
        router.push(`/${data['id']}`);
        // 重新获取用户模板集合
        const templateIds = getUserTemplateIds(DEFAULT_USER_NAME);
        setTemplateIds(templateIds);
      }).catch((error) => {
        console.error(error);
      });
  };

  /**
   * 删除模板
   * @param key 模板ID
   */
  const handleRemoveTemplate =  (key: string) => {
    if (!key) return;
    // 删除模板ID
    removeUserTemplate(DEFAULT_USER_NAME, key);

    // 重新获取用户模板集合
    const templateIds = getUserTemplateIds(DEFAULT_USER_NAME);
    setTemplateIds(templateIds);

    // 删除模板数据
    removeTemplate(key);

    // 删除云数据
    removeCloudTemplate(key)
      .then(() => {
        console.log('remove success');
      });

    // 删除的是当前模板
    if (currentTemplateId === key) {
      handleClickItem({ key: templateIds[0] })
    }
  };

  /**
   * 切换模板
   * @param e
   */
  const handleClickItem = (e) => {
    if (!e) return;
    const tId = e.key;
    tId && router.push(tId);
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
        <span className="bar-list-remove">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              this.onSyncData(key);
            }}
            size="small"
            shape="circle"
            style={{ margin: '0 8px' }}
          >
            <IconFont type="icon-brush" />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveTemplate(key);
            }}
            size="small"
            shape="circle"
            icon="delete"
          />
        </span>
      </Item>
    ));

    return localChild.length && (
      <Menu
        style={{ width: 300, textAlign: 'center' }}
        onClick={handleClickItem}
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
      onClick={handleClickNew}
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
