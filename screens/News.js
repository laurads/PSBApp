import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import { events } from '../config/data';

class News extends React.Component {

  render() {
    const appearance 	= styles ()
    return (
      <ScrollView>
        <List>
          {events.map((event) => (
            <ListItem
              hideChevron
              key={event.name}
              title={`${event.name} (${event.date})`}
              subtitle={event.location}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}


export default News;
