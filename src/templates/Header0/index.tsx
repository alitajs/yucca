import React, { FC, useState } from 'react';
import classNames from 'classnames';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

interface HeaderProps {
  isMobile: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const { isMobile } = props;
  const [visible, setvVisible] = useState<boolean>(false);

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
    >
      123
    </TweenOne>
  )
};

export default Header;
