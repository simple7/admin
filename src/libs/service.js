/**
 * API接口,axios配置
 */

import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3000';

const debug = true;

/**
 * 服务接口
 * @param   {String}  url
 * @param   {String}  method  get | post
 * @param   {Object}  data   parameters data
 * @returns  {Promise}  result
 */
export const $http = function (url, method, data) {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + url,
      method: method,
      data: data
    }).then((response) => {
      if (debug)
        console.log(response);
      if (response)
        resolve(response);
      else
        reject(response);
    }).catch((error) => {
      if (error) {
        console.error("API request error!", error);
        reject(error);
      } else
        reject('Network Error');
    });
  });
}






