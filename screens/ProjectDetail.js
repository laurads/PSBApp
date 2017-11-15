import React from 'react';
import { ScrollView, Text } from 'react-native';
import 		styles 			from '../styles/main';

export default class ProjectDetail extends React.Component {
  render() {
    const { name, title, content } = this.props.navigation.state.params;

    return (
      <ScrollView>
              <Text style = {{fontWeight:'bold'}}>
          {`${title}\n`}
          </Text>
          <Text>
          {content}
        </Text>
      </ScrollView>
    );
  }
}
