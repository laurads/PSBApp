import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root, Tabs } from './config/router';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

const infoRequest = new GraphRequest(
  '/assocpsb',
  null,
  this._responseInfoCallback,
);
      
export default class App extends React.Component {

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + JSON.stringify(error));
    } else {
      alert('Success fetching data: ' + JSON.stringify(result));
    }
  }

  testRequestGraphAPI(){    
    const infoRequest = new GraphRequest(
      '/assocpsb',
      {
        parameters: {
          fields: {
            string: 'posts' // what you want to get
          },
          access_token: {
            string: '1213195135447643|ZuJ5SU0YmplfsgWKZsrB6Sg7FPs' //'AA|1213195135447643|b72895de2aafaf21b8688c1220c7e163' // put your accessToken here
          }
        }
      },
      this._responseInfoCallback // make sure you define _responseInfoCallback in same class
    );
new GraphRequestManager().addRequest(infoRequest).start();
}
  
  render() {
    this.testRequestGraphAPI();
    return (
      <Root />
    );
  }
}
