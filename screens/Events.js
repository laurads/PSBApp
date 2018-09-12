import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import { events } from '../config/data';
import Event from '../components/Event.js';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class Events extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      events: [],
    };
  }
  responseEventsCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + JSON.stringify(error));
    } else {
      result.events.data.map((event) => {
        console.log('fetch event wih id ' + event.id )        
        this.fetchEvent(event.id)
      });
    }
  }

  getEventCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching post from event id: ' + JSON.stringify(error));
    } else {
      var events = JSON.parse(JSON.stringify(this.state.events))
      console.log('adding event to events ' + JSON.stringify(result) )
      events.push(result)
      this.setState({events:events});
      //Sort by ascending start_time
      events.sort(function(a, b) {
        return new Date(b.start_time) - new Date(a.start_time);
      });
    }
  }

  componentDidMount(){
    this.fetchFbEvents();
  }

  fetchFbEvents() {    
    const infoRequest = new GraphRequest(
      '/assocpsb',
      {
        parameters: {
          fields: {
            string: 'events' 
          },
          access_token: {
            string: '1213195135447643|ZuJ5SU0YmplfsgWKZsrB6Sg7FPs' 
          }
        }
      },
      this.responseEventsCallback.bind(this)
    );
    new GraphRequestManager().addRequest(infoRequest).start();
}

fetchEvent(id) {    
  const infoRequest = new GraphRequest(
    '/'+id,
    {
      parameters: {
        fields: {
          string: 'cover,name, start_time,place,description'
        },
        access_token: {
          string: '1213195135447643|ZuJ5SU0YmplfsgWKZsrB6Sg7FPs' 
        }
      }
    },
    this.getEventCallback.bind(this)
  );
  new GraphRequestManager().addRequest(infoRequest).start();
}

  render() {
    items = []
    contents = this.state.events.map((event) => {
      items.push(event)
    });
    const appearance 	= styles ()
    console.log(contents);
    return (
      <ScrollView>
          <FlatList
            data={items}
            extraData={this.state}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
      </ScrollView>
    );
  }

  renderItem = ({item}) => (
    <Event content = {item} />
  );
}


export default Events;
