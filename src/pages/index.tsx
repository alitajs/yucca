import React from 'react';
import BasicLayout from '@/layouts/basic';
import Helmet from '@/components/Helmet';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Helmet title="页面编辑器" />
      <BasicLayout />
    </div>
  )
};

export default IndexPage;
