import React from 'react';
import BasicLayout from '@/layouts/basic';
import Helmet from '@/components/Helmet';

const IndexPage: React.FC = (props) => {
  return (
    <div>
      <Helmet title="页面编辑器" />
      <BasicLayout {...props} />
    </div>
  )
};

export default IndexPage;
