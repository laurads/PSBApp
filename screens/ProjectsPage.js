import React from 'react';
import { View, Dimensions } from 'react-native';
import styles from '../styles/main';
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
        <View 
          style={{
            flex: 1, 
            flexDirection: 'column', 
            backgroundColor: "white",
            alignItems: 'center', 
            width: '100%'}} 
        >
        {/*<HeaderSearchBar /> */}
        <Projects/>
        </View>
      </View>);
    }

}

export default ProjectsPage;
