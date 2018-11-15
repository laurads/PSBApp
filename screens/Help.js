import React from 'react';
import { StyleSheet, Text, View, Image, WebView, Platform } from 'react-native';
import { ListItem } from 'react-native-elements'
import 		styles 			from '../styles/main';
import {API} from 'aws-amplify';
import Members from'../screens/Members';
import { withNavigation } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Help extends React.Component {
  constructor ( props ) {
    super 	( props );
    this.state = {
      loading: false,
      welcomeText: ""
    }
  }

  componentDidMount(){
    this.fetchWelcomeContent();
  }

  fetchWelcomeContent = async () => {
    this.setState(() => {
        return {
            loading: true
        }
    });
    console.log("Call DESCRIPTIONCRUD API");
    API.get('DESCRIPTIONCRUD','/DESCRIPTION/WELCOME_TEXT')
        .then(data => {
          console.log('DESCRIPTIONCRUD data:' + data)
          this.setState({
                welcomeText: data[0].CONTENT,
                loading: false
            });
        })
        .catch ( err => console.log('DESCRIPTIONCRUD error:' + err))
  }


  render() {
    const appearance 	= styles ();
    const list = [
      {
        title: 'Faire un don',
        icon: 'euro-symbol',
        screen: 'Donation'
      },
      {
        title: 'Devenir membre ou bénévole',
        icon: 'pan-tool',
        screen: 'Members'
      },
      {
        title: 'Espace entreprise',
        icon: 'business',
        screen: 'Companies'
      },
      {
        title: 'Nous contacter',
        icon: 'sms',
        screen: 'Contacts'
      }
    ];
    return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%', marginTop: 20, backgroundColor: 'white'}}>
        <WebView 
          source={{html: this.state.welcomeText}}
          scalesPageToFit={(Platform.OS === 'ios')?false:true}
          style={{margin: 20}}
        />
        <View>
          {
            list.map((item,i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={()=> this.props.navigation.navigate(item.screen)}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

export default withNavigation(Help);
