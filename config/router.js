import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import News from '../screens/News';
import NewsEventsPage from '../screens/NewsEventsPage';
import Help from '../screens/Help';
import ProjectsPage from '../screens/ProjectsPage';
import ProjectDetail from '../screens/ProjectDetail';
import SquareView from '../components/SquareView';
import Members from '../screens/Members';
import Contacts from '../screens/Contacts';
import Companies from '../screens/Companies';
import Donation from '../screens/Donation';

export const ProjectsStack = StackNavigator({
  Projects: {
    screen: ProjectsPage,
    navigationOptions: {
      title: 'Projets',
      header: null //this will hide the header
    },
  },
  Details: {
    screen: ProjectDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.project.NAME.toUpperCase()}`,
    }),
  },
});

export const HelpStack = StackNavigator({
  GetInvolved: {
    screen: Help,
    navigationOptions: {
      header: null //this will hide the header
    },
  },

  Members:{
    screen: Members,
    navigationOptions:{
      title: 'Devenir membre'
    }
  },

  Donation:{
    screen : Donation,
    navigationOptions:{
      title: 'Faire un don'
    }
  },

  Contacts:{
    screen : Contacts,
    navigationOptions:{
      title: 'Contacts'
    }
  },

  Companies:{
    screen : Companies,
    navigationOptions:{
      title: 'Espace entreprise'
    }
  }
})

export const Root = TabNavigator({
  Home: {
    screen: NewsEventsPage,
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
    screen: HelpStack,
    navigationOptions: {
      tabBarLabel: 'Nous aider',
      tabBarIcon: ({ tintColor }) => <Icon name="thumb-up" size={35} color={tintColor} />,
    },
  },
});
