import beacon from './beacon';

const storageKey = 'deepxray';

export default {
  trackData(eventCode, params) {
    beacon.onDirectUserAction(eventCode, params);
  },
  reportPV() {
    beacon.reportPV();
  },
  getStorage() {
    let ret = {};

    try {
      ret = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (err) {}

    return ret;
  },
  setStorage(key, val) {
    const data = this.getStorage();

    console.log(111, data);

    data[key] = val;
    localStorage.setItem(storageKey, JSON.stringify(data));
  },
};
