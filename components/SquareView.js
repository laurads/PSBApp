import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import 		styles 			from '../styles/main';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import Details from'../screens/ProjectDetail';
import { withNavigation } from 'react-navigation';

class SquareView extends React.Component {

    render() {
        const project = this.props.project;
        return (
            <TouchableOpacity
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                height: 200,
                width: 150,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: '#d6d7da',
                borderRadius : 5,
                margin: 5
            }}
            onPress={() => this.onLearnMore(project)}>
            <Image
                style ={{
                    width : 148, 
                    height:150,
                }}
                source={{uri:project.COVER_IMG}}
            />
            <Text
            style={{
                textAlign: 'center',
                fontSize: 12,
                margin: 10,
                fontFamily: 'Helvetica'
            }}>
            {project.NAME}</Text>
            </TouchableOpacity>
        );
        }

        onLearnMore = (project) => {
            this.props.navigation.navigate('Details', { project: this.props.project });
          };

}

export default withNavigation(SquareView);

SquareView.PropTypes = {
    project: PropTypes.object.isRequired,
}
