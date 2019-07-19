const config = {};

const wciDev = () => {
  // 代码目录
  config.output = 'dev';
  // eslint校验
  config.eslint = true;
  // 请求接口
  config.apis = {
    saasApi: {
      host: 'http://192.168.1.246:7002/fl-saas-bin',
      path: '',
    },
    redirect: {
      host: 'http://127.0.0.1:8032',
      path: '',
    },
  };
  return {
    ...config,
  };
};

module.exports = wciDev;
