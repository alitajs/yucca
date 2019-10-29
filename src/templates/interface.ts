import { FunctionComponent, ComponentType } from 'react';

export interface DataSource {
  wrapper: {
    className: string;
  };
  page: {
    className: string;
  };
  logo: {
    className: string;
    children: string;
  };
  menu: {
    className: string;
    children: {
      name: string;
      a: {
        children: string;
        href: string;
      }
    }[];
  };
  mobileMenu: {
    className: string;
  };
  help: {
    className: string;
    children: string
  };
}

export interface TemplateConfig {
  component: ComponentType;
  templateStr?: string;
  less?: string;
  dataSource: DataSource;
}
