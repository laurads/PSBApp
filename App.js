import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root, Tabs } from './config/router';
import Amplify from 'aws-amplify';
import aws_exports from './config/aws-exports';

Amplify.configure(aws_exports);
      
export default class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}
