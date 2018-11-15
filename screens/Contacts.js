import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import 		styles 			from '../styles/main';
import {API} from 'aws-amplify';

export default class Contacts extends React.Component {


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', backgroundColor: 'white'}}>
        <View style ={{margin: 20}}>
            <Text>Email : admin@assos-psb.org</Text>
            <Text>Adresse : Route de Cannes, 06130 Grasse</Text>
            <Text>Telephone : 06.27.30.11.03</Text>
        </View>
      </View>
    );
  }
}
