import React from 'react';
import { StyleSheet, View, WebView, Platform } from 'react-native';
import 		styles 			from '../styles/main';
import {API} from 'aws-amplify';

export default class Members extends React.Component {
  constructor ( props ) {
    super 	( props );
    this.state = {
      loading: false,
      membersText: ""
    }
  }

  componentDidMount(){
    this.fetchMembersContent();
  }

  fetchMembersContent = async () => {
    this.setState(() => {
        return {
            loading: true
        }
    });
    console.log("Call DESCRIPTIONCRUD API");
    API.get('DESCRIPTIONCRUD','/DESCRIPTION/MEMBERS_TEXT')
        .then(data => {
          console.log('DESCRIPTIONCRUD data:' + data)
          this.setState({
                membersText: data[0].CONTENT,
                loading: false
            });
        })
        .catch ( err => console.log('DESCRIPTIONCRUD error:' + err))
  }


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', backgroundColor: 'white'}}>
        <WebView 
          source={{html: this.state.membersText}}
          scalesPageToFit={(Platform.OS === 'ios')?false:true}
          style={{margin: 20}}
        />
      </View>
    );
  }
}
