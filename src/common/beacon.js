import BeaconAction from '@tencent/beacon-web-sdk';

const success = (e) => {
  console.log(`onReportSuccess: ${e}`);
};
const fail = (e) => {
  console.log(`onReportFail: ${e}`);
};
const beacon = new BeaconAction({
  appkey: '0WEB043FW44V9LVE', // 系统或项目id, 必填
  // versionCode: '2.11.1', //项目版本,选填
  // channelID: 'channel', //渠道,选填
  // openid: 'openid', // 用户id, 选填
  // isDebug: false, // 是否开启实时联调, 默认关闭,选填
  strictMode: false, // 严苛模式开关, 打开严苛模式会主动抛出异常, 上线请务必关闭!!!
  delay: 3000, // 普通事件延迟上报时间(单位毫秒), 默认3000(3秒),选填
  sessionDuration: 60 * 1000, // session变更的时间间隔, 一个用户持续30分钟(默认值)没有任何上报则算另一次 session,每变更一次session上报一次启动事件(rqd_applaunched),使用毫秒(ms),最小值30秒,选填
  onReportSuccess: success, // 上报成功回调,选填
  onReportFail: fail, // 上报失败回调,选填
});

export default beacon;
