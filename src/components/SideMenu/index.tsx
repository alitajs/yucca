import React, { useState, Fragment } from 'react';
import { Icon, Tooltip, Modal, Form, Drawer } from 'antd';
import DrawerMenu from 'rc-drawer';
import templateData, { ITemplateDataItem, ITemplateItem } from '@/config/template';
import styles from './index.module.less';

const SideMenu: React.FC = () => {
  const [editMenuOpen, setEditMenuOpen] = useState<boolean>(false);

  const showMenu = () => {
    setEditMenuOpen(true);
  };

  const hideMenu = () => {
    setEditMenuOpen(false);
  };

  const pushData = (
    child: ITemplateDataItem,
    i: number,
    key: string,
    item: ITemplateItem
  ) => {
    if (child.disabled) {
      return null;
    }
    const img = child.isVideo
      ? (
        <video src={child.src} width="100%" height="100%" autoPlay loop>
          <track kind="captions" />
        </video>
      )
      : <img src={child.src} width="100%" alt="img" />;

    return (
      <div
        className={styles.imgWrapper}
        key={`${key}${'uid' in child ? child.uid : i}`}
        data-key={`${key}${'uid' in child ? child.uid : i}`}
      >
        <Tooltip
          placement="right"
          title={(
            <div style={{ width: 500 }}>
              {img}
            </div>
          )}
          overlayStyle={{ maxWidth: 'none' }}
        >
          <div className={styles.img}>
            {img}
          </div>
        </Tooltip>
        <p>
          {item.name}
          {child.uid}
          {' '}
          -
          {' '}
          {child.text}
        </p>
      </div>
    );
  };

  const isLock = true;

  return (
    <div
      className={styles.editSideMenuWrapper}
      onMouseLeave={hideMenu}
    >
      <DrawerMenu
        level={null}
        getContainer={null}
        handler={null}
        open={editMenuOpen}
        wrapperClassName={styles.editSideDrawer}
      >
        <div className={styles.imgContentWrapper}>
          {
            Object.keys(templateData)
            .sort((a, b) => (templateData[a].order - templateData[b].order))
            .map((key) => {
              if (key !== 'Other') {
                const item = templateData[key];
                return (
                  <Fragment key={key}>
                    <div className={styles.title} key={key}>
                      {item.name}
                    </div>
                    {item.data.map((child, i) => {
                      return pushData(child, i, key, item);
                    })}
                  </Fragment>
                )
              }
            })
          }
        </div>
      </DrawerMenu>
      <div className={styles.editSideMenu}>
        <div
          className={styles.add}
          onMouseEnter={showMenu}
        >
          <Icon type="plus-circle-o" /> 添加内容
        </div>
        <ul
          className={styles.other}
          onMouseEnter={hideMenu}
        >
          <Tooltip
            title={isLock ? '编辑加密' : '取消加密' }
            placement="right"
          >
            <li>
              <Icon type={isLock ? 'lock' : 'unlock'} />
            </li>
          </Tooltip>
          <Tooltip title="查看帮助" placement="right">
            <li>
              <a target="_blank">
                <Icon type="exclamation-circle-o" />
              </a>
            </li>
          </Tooltip>
        </ul>
      </div>
    </div>
  )
};

export default SideMenu;
