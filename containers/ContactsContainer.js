import React from 'react';
import { View} from 'react-native';
import 		styles 			from '../styles/main';
import Contacts from '../screens/Contacts'

export default class ContactsContainer extends React.Component {


  render() {
    return (
      <View>
          <Contacts/>
      </View>
    );
  }
}
