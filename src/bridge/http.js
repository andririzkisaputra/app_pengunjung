import React, { Component } from 'react';
import { Alert } from 'react-native';
import { API_KEY, DEFAULT_REQUEST, DEFAULT_TIMEOUT, DEFAULT_PAGE, DEFAULT_PERPAGE, DEFAULT_DB_CONNECTION, BASE_URL, KEY_LOGIN, KEY_PROCESS ,IV_LOGIN ,IV_PROCESS ,AUTH_LOGIN ,AUTH_PROCESS } from '../config';
import { get } from './storage';
import Toast from 'react-native-simple-toast';
import t from '../lang';
/* error code
  301 : waktu habis
  302 : error koneksi client
  303 : masalah server | tidak spesifik
  304 : respon json tidak valid
  305 : status server error header : 500 / 404 / 403
*/

const request = (params) => {

    const request     = (params.data ? JSON.stringify(params.data) : '');
    const base_url    = BASE_URL+params.url;
    const method      = (params.method) ? params.method : DEFAULT_REQUEST;
    const timeout     = (params.timeout) ? params.timeout : DEFAULT_TIMEOUT;
    let didResponse   = false;

    return _fetch(fetch_promise(), timeout);

    async function _fetch(fetch_promise, timeout) {
      var abort_fn      = null;
      var timeout_fun   = null;
      var abort_promise = new Promise((resolve, reject) => {
          abort_fn = function() {
            if (!didResponse) {
              Toast.show(t('aError', {ercode : 'ERR_301'}),Toast.SHORT);

              if (timeout_fun) {
                clearTimeout(timeout_fun);
              }
            }
            reject('abort promise');
          };
      });
      var abortable_promise = Promise.race([
          fetch_promise,
          abort_promise
      ]);
      timeout_fun = setTimeout(function(){
          abort_fn();
      }, timeout);

      return abortable_promise;
  }

  async function fetch_promise() {
    // JSON.stringify
      return new Promise((resolve, reject) => {
          fetch(base_url, {
            method : method,
            headers : {
              'Content-Type': 'application/json',
              'Authorization' : API_KEY
            },
            body: request
          }).then((response) => {
              return response.json();
          }).then((jsonData) => {
              didResponse = true;
              resolve(jsonData);
          }).catch((err) => {
              reject(err);
              didResponse = true;
              let msg     = t('aError', {ercode : ''});
              if (err.message === 'Network request failed'){
                msg = t('aError', {ercode : 'ERR_302'});
              } else if (err === 'abort promise'){
                msg = t('aError', {ercode : 'ERR_303'});
              }else {
                msg = t('aError', {ercode : 'ERR_304'});
              }

              get({table : DEFAULT_DB_CONNECTION}).then((r) => {
                if (!r) {
                  Toast.show(msg,Toast.SHORT);
                }
              })
          })
      })
  }

  async function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
      return res;
    } else {
      get({table : DEFAULT_DB_CONNECTION}).then((r) => {
        if (!r) {
          Toast.show(t('aError', {ercode : 'ERR_305'}),Toast.SHORT);
        }
      })
    }
  }

}

export default request;
