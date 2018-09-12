import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar, Image } from 'react-native';
import { List, ListItem} from 'react-native-elements';
import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderSearchBar from './HeaderSearchBar';
import 		styles 			from '../styles/main';

export default class PageHeader extends React.Component {

  updateSearchContent(){

  }

  render() {
    return (
      <View>
        <View
          style={{
            height: 30,
            backgroundColor: "white",
          }}/>
        </View>);
    }

}
