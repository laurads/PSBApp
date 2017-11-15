import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/projects';
import { projects } from '../config/data';

export default class Projects extends React.Component {
  onLearnMore = (project) => {
    this.props.navigation.navigate('Details', { ...project });
  };


  render() {
    return (
      <ScrollView >
        <List>
          {projects.map((project) => (
            <ListItem
              hideChevron
              key={project.name}
              title={project.name}
              subtitle={project.title}
              onPress={() => this.onLearnMore(project)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
