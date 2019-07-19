const config = {};

const wciDefault = () => {
  // 代码目录
  config.src = 'app';
  // 本地域名
  config.hostname = '127.0.0.1';
  // 本地端口
  config.port = '8032';
  // 入口文件
  config.index = `${config.src}/index.js`;
  // 项目名称
  config.name = '☁️ 辅易云 ☁️';
  // 请求接口
  config.apis = {
    saasApi: {
      host: 'http://127.0.0.1:7002/fl-saas-bin',
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

module.exports = wciDefault;
