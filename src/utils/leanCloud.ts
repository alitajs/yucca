import AV from 'leancloud-storage';

export const appId = '2JUiXYxqAvQrVMQPWqNlaydv-gzGzoHsz';
export const appKey = 'cFqi9pEVV0qTPGfsBA9WyFAK';

AV.init({
  appId,
  appKey,
  serverURLs: 'https://avoscloud.com'
});

export default AV;
