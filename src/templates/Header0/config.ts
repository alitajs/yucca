import component from './index';
import { TemplateConfig } from '@/templates/interface';
import less from './index.less';
import templateStr from './index';

const templateConfig: TemplateConfig = {
  component,
  dataSource: {
    wrapper: {
      className: 'header0 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header1-logo',
      children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    menu: {
      className: 'header1-menu',
      children: [
        {
          name: 'item0',
          a: {
            children: '导航一',
            href: '',
          },
        },
        {
          name: 'item1',
          a: {
            children: '导航二',
            href: '',
          },
        },
        {
          name: 'item2',
          a: {
            children: '导航三',
            href: '',
          },
        },
        {
          name: 'item3',
          a: {
            children: '导航四',
            href: '',
          },
        },
      ],
    },
    mobileMenu: {
      className: 'header1-mobile-menu',
    },
    help: {
      className: 'help',
      children: '帮助',
    }
  },
};

export default templateConfig;
