import React, { FC, useState } from 'react';
import { Tooltip, Popconfirm, Icon } from 'antd';
import IconFont from '@/components/IconFont';
import NewFileButton, { NewFileButtonProps } from './NewFileButton';
import HistoryButton from './HistoryButton';
import styles from './nav-controller.module.less';

export interface NavControllerProps extends NewFileButtonProps {

}

const NavController: FC<NavControllerProps> = (props) => {
  const { location } = props;
  const [saveLoad, setSaveLoad] = useState<boolean>(false);
  const [publishLoad, setPublishLoad] = useState<boolean>(false);
  const [downloadLoad, setDownloadLoad] = useState<boolean>(false);

  const handleSave = (e: MouseEvent, type: string) => {

  };

  const handlePreview = () => {

  };

  const handleUploadCloud = () => {

  };

  const handleChangeDataOpenModal = () => {

  };

  const handleRemoveAllLocalStorage = () => {

  };

  const handleSaveCode = () => {

  };

  const menuChild = [
    {
      name: '保存',
      icon: saveLoad ? 'loading' : 'save',
      onClick: saveLoad ? null : (e: any) => handleSave(e, 'menu'),
    },
    {
      name: '预览',
      icon: 'eye-o',
      onClick: handlePreview,
    },
    {
      name: '下载',
      icon: downloadLoad ? 'loading' : 'code-o',
      onClick: downloadLoad ? null : handleSaveCode,
    },
    {
      name: '发布',
      icon: publishLoad ? 'loading' : 'cloud-upload',
      onClick: handleUploadCloud,
    },
    {
      name: '编辑数据',
      icon: 'tool',
      onClick: handleChangeDataOpenModal
    },
    {
      name: '清理缓存',
      icon: 'icon-brush',
      onClick: handleRemoveAllLocalStorage,
      tooltip: '清除全部的缓存，重新从服务器读取最后保存的数据；单个缓存请在新建文件的下拉菜单里清除。',
    },
  ].map((item, i) => {
    const iconProps = { type: item.icon };
    let children = (
      <Tooltip title={item.name}>
        <a onClick={item.tooltip ? null : item.onClick}>
          {iconProps.type.startsWith('icon-')
            ? (<IconFont {...iconProps} key="icon" />)
            : (<Icon {...iconProps} key="icon" />)}
        </a>
      </Tooltip>
    );

    if (item.tooltip) {
      children = (
        <Popconfirm
          title={item.tooltip}
          onConfirm={item.onClick}
          okText="确定"
          cancelText="取消"
          overlayStyle={{ width: 320 }}
        >
          {children}
        </Popconfirm>
      );
    }
    return (
      <li key={i.toString()}>
        {children}
      </li>
    );
  });

  return (
    <div className={styles.editNav}>
      <div className={styles.logo}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" alt="logo" />
      </div>
      <ul className={styles.menu}>
        {menuChild}
      </ul>
      <NewFileButton location={location} />
      <HistoryButton />
    </div>
  )
};

export default NavController;
