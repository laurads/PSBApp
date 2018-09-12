import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import 		styles 			from '../styles/main';
import PropTypes from 'prop-types'

export default class SquareView extends React.Component {

    render() {
        const project = this.props.project;
        return (
        <View
        style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            height: 220,
            width: 170,
            backgroundColor: "white",
            borderWidth: 0,
        }}>
            <Image
                style ={{width : 150, height:150, margin:10}}
                source={{uri:project.COVER_IMG}}
            />
            <Text>{project.NAME}</Text>
        </View>);
        }

}

SquareView.PropTypes = {
    project: PropTypes.object.isRequired,
}
