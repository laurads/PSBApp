import React from 'react';
import { ScrollView, Text, WebView } from 'react-native';
import 		styles 			from '../styles/main';

export default class ProjectDetail extends React.Component {
  render() {
    const project = this.props.navigation.state.params.project;
    {/*scalesPageToFit={(Platform.OS === 'ios') ? false : true} */}

    return (
      <ScrollView
      style={{flex:1,backgroundColor: 'white', width: '100%', height: '100%'}}>
          <WebView
          style={{height : 200, width: 350, marginTop: 20, backgroundColor: 'red'}}
          source={{html: project.DESCRIPTION}}
          />
      </ScrollView>
    );
  }
}
