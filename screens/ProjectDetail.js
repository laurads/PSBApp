import React from 'react';
import { View, Text, WebView, Platform } from 'react-native';
import 		styles 			from '../styles/main';

export default class ProjectDetail extends React.Component {
  render() {
    const project = this.props.navigation.state.params.project;
    {/*scalesPageToFit={(Platform.OS === 'ios') ? false : true} */}

    return (
      <View 
      style={{flex:1, alignContent: 'center', backgroundColor: 'white'}}>
          <WebView 
          style={{flex: 8, marginTop: 20}}
          scalesPageToFit={(Platform.OS === 'ios')?false:true}
          source={{html: project.DESCRIPTION}}
          />
      </View>
    );
  }
}
