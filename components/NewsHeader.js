import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar, Image } from 'react-native';
import { List, ListItem} from 'react-native-elements';
import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderSearchBar from './HeaderSearchBar';
import 		styles 			from '../styles/main';

export default class NewsHeader extends React.Component {

  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  updateSearchContent(){

  }

  render() {
    const component1 = () => <Text>Journal</Text>
    const component2 = () => <Text>Agenda</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    const { selectedIndex } = this.state
    return (
      <View>
        <View
        style={{
          height: 20,
          backgroundColor: "black",
        }}/>
        <StatusBar
              hidden = {false}
              barStyle="light-content"
              backgroundColor="rgba(0, 0, 0, 0.20)"
        />
        <View
        style={{
          height: 40,
          backgroundColor: "green",
        }}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../img/psbLogo.jpg')}
        />
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            flex: 1, flexDirection: 'column',
            alignItems: 'center',
          }}>
          <HeaderButtonGroup
          leftTitle="Journal"
          rightTitle="Agenda"/>
          <HeaderSearchBar />
        </View>
      </View>);
    }

}
