export interface TemplateItem {
  name: string;
  order: number;
  data: TemplateDataItem[];
}

export interface TemplateDataItem {
  uid: number;
  src: string;
  text: string;
  isVideo?: boolean;
  disabled?: boolean;
}

export interface Template {
  [key: string]: TemplateItem;
}


const template: Template = {
  Nav: {
    name: 'Header',
    order: 0,
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: '普通型(暗色)',
        uid: 0,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/UTHsfGMNXXbpEoL.jpg',
        text: '带用户型',
        uid: 1
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: 'Link 页面滚动',
        uid: 2,
      },
      {
        src: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*luthRonCYuQAAAAAAAAAAABkARQnAQ',
        text: '普通型(浅色)',
        uid: 3,
      }
    ]
  }
};

export default template;
