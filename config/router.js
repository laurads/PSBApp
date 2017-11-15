import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import News from '../screens/News';
import Help from '../screens/Help';
import Projects from '../screens/Projects';
import ProjectDetail from '../screens/ProjectDetail';

export const ProjectsStack = StackNavigator({
  Projects: {
    screen: Projects,
    navigationOptions: {
      title: 'Projets',
    },
  },
  Details: {
    screen: ProjectDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

export const Root = TabNavigator({
  Home: {
    screen: News,
    navigationOptions: {
      tabBarLabel: 'Actualités',
      tabBarIcon: ({ tintColor }) => <Icon name="event-note" size={35} color={tintColor} />
    },
  },
  Projects: {
    screen: ProjectsStack,
    navigationOptions: {
      tabBarLabel: 'Nos projets',
      tabBarIcon: ({ tintColor }) => <Icon name="child-care" size={35} color={tintColor} />,
    },
  },
  GetInvolved: {
    screen: Help,
    navigationOptions: {
      tabBarLabel: 'Nous aider',
      tabBarIcon: ({ tintColor }) => <Icon name="thumb-up" size={35} color={tintColor} />,
    },
  },
});
