import React from 'react';
import { StyleSheet, View, WebView, Platform, Text } from 'react-native';
import 		styles 			from '../styles/main';
import {API} from 'aws-amplify';

export default class Donation extends React.Component {


  render() {
      const uri = "https://www.paypal.com/donate/?token=Iupgy5Al-7hql4l09l0Y-ArTMQrlt3bbO_XDn7qvXdvOPiRGT4jxdt8NXOCumUohAKxMR0&country.x=FR&locale.x=FR";
    return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', backgroundColor: 'white'}}>
        <Text
            style={{margin: 20}}
        > 
            En construction </Text>
      </View>
    );
  }
}
