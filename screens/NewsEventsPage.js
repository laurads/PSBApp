import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar,Image, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import { events } from '../config/data';
import News from './News';
import Events from './Events';
import HeaderButtonGroup from '../components/HeaderButtonGroup';
import HeaderSearchBar from '../components/HeaderSearchBar';

const height = Dimensions.height;

class NewsEventsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
  }

  updateIndexCallback = (selectedIndex) => {
    this.setState({selectedIndex: selectedIndex})
  }

  updateSearchContent(){

  }

  getBody(){
    if(this.state.selectedIndex == 0){
      return <News/>
    }else{
      return <Events/>
    }
  }

  render() {
    const component1 = () => <Text>Journal</Text>
    const component2 = () => <Text>Agenda</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    const { selectedIndex } = this.state
    var body = this.getBody();
    return (
      <View style={{flex: 1, flexDirection: 'column'}} >
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
            callbackFunction={this.updateIndexCallback}
            leftTitle="Journal"
            rightTitle="Agenda"/>
            <HeaderSearchBar />
          </View>
          <View style={{flex: 6}}>
          {body}
          </View>
      </View>);
    }

}

export default NewsEventsPage;
