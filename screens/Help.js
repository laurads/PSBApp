import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 		styles 			from '../styles/main';

export default class Help extends React.Component {
  constructor ( props ) {
		super 	( props );
  }


  render() {
    const appearance 	= styles ()
    return (
      <View style={appearance.container}>
        <Text>Participer ! </Text>
      </View>
    );
  }
}
