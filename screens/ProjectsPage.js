import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar,Image, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import Projects from './Projects';
import PageHeader from '../components/PageHeader';
import HeaderSearchBar from '../components/HeaderSearchBar';

const height = Dimensions.height;

class ProjectsPage extends React.Component {

  constructor () {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <PageHeader/>
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: "white",
              alignItems: 'center', width: '100%'}} >
            {/*<HeaderSearchBar /> */}
            <Projects/>
        </View>
      </View>);
    }

}

export default ProjectsPage;
