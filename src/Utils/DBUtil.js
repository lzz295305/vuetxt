let DBUtil = {
  setLocalStorage: function (key, value) {
    if (typeof (value) === 'string') {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getLocalStorage: function (key, ifJson) {
    let value = window.localStorage.getItem(key);
    if (ifJson) {
      return JSON.parse(value);
    }
    return value;
  },
  setSessionStorage: function (key, value) {
    if (typeof (value) === 'string') {
      window.sessionStorage.setItem(key, value);
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getSessionStorage: function (key, ifJson) {
    let value = window.sessionStorage.getItem(key);
    if (ifJson) {
      return JSON.parse(value);
    }
    return value;
  }
};

export default DBUtil;
