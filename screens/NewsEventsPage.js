import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { List} from 'react-native-elements';
import styles from '../styles/main';
import { events } from '../config/data';
import News from './News';
import Events from './Events';
import HeaderButtonGroup from '../components/HeaderButtonGroup';
import HeaderSearchBar from '../components/HeaderSearchBar';
import PageHeader from '../components/PageHeader';

const height = Dimensions.height;

class NewsEventsPage extends React.Component {

  static navigationOptions= {
    title: '',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };

  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  updateIndexCallback = (selectedIndex) => {
    this.setState({selectedIndex: selectedIndex})
  }

  updateSearchContent(){

  }

  render() {
    const component1 = () => <Text>Journal</Text>
    const component2 = () => <Text>Agenda</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    const { selectedIndex } = this.state
    return (
      <View style={{flex: 1, flexDirection: 'column'}} >
          <PageHeader/>
          <View
            style={{
              backgroundColor: "white",
              flex: 1, flexDirection: 'column',
              alignItems: 'center',
            }}>
            <HeaderButtonGroup
              callbackFunction={this.updateIndexCallback}
              leftTitle="Journal"
              rightTitle="Agenda"
            />
         {/*   <HeaderSearchBar /> */}
          </View>
          <View 
            style={{flex: 6}}
          >
            {selectedIndex==0? <News/>: null}
            {selectedIndex==1? <Events/>: null}
          </View>
      </View>);
    }

}

export default NewsEventsPage;
