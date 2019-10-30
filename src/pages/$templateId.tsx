import React from 'react';
import Helmet from '@/components/Helmet';
import BasicLayout from "@/layouts/basic";

const IndexPage: React.FC = (props) => {
  return (
    <BasicLayout {...props}>
      <Helmet title="页面编辑器" />
    </BasicLayout>
  )
};

export default IndexPage;
