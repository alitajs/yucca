export interface ITemplateItem {
  name: string;
  order: number;
  data: ITemplateDataItem[];
}

export interface ITemplateDataItem {
  uid: number;
  src: string;
  text: string;
  isVideo?: boolean;
  disabled?: boolean;
}

export interface ITemplate {
  [key: string]: ITemplateItem;
}


const template: ITemplate = {
  Nav: {
    name: 'Nav',
    order: 0,
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: '普通型(暗色)',
        uid: 0,
      },
      {
        src: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*luthRonCYuQAAAAAAAAAAABkARQnAQ',
        text: '普通型(浅色)',
        uid: 3,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: 'Link 页面滚动',
        uid: 2,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/UTHsfGMNXXbpEoL.jpg',
        text: '带用户型',
        uid: 1,
        disabled: true,
      },
    ]
  }
};

export default template;
