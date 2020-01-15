import axios from 'axios';

const baseUrl = 'http://192.168.0.9:8080';

let HttpUtil = {
  get: function (url, fn, errFn) {
    axios.get(baseUrl + url).then(result => {
      fn(result.data);
    }).catch(err => { errFn(err); });
  },
  post: function (url, data, fn, errFn) {
    axios.post(baseUrl + url, data).then(result => {
      fn(result.data);
    }).catch(err => { errFn(err); });
  }
};

export default HttpUtil;
