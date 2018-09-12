import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, Image } from 'react-native';
import 		styles 			from '../styles/main';
import PropTypes from 'prop-types'
import SquareView from './SquareView.js'

export default class SquaresRow extends React.Component {

    render() {
        items = [];
        contents = this.props.projects.map((project) => {
            items.push(project)
          });
        return (
        <View 
        style={{
            flex: 1, 
            flexDirection: 'column', 
            alignItems: 'center',
            margin: 5}}>
            <Text 
            style={{fontSize:20, fontWeight: 'bold'}}
            > {this.props.category} </Text>
            <FlatList 
            horizontal={true}
            data={items}
            renderItem={({item,index}) => {
                return(
                    <SquareView 
                    project={item}
                    index={index}
                    parentFlatList={this}>
                    </SquareView>
                )
            }}
            keyExtractor={(item,index) => item.ID}>

            </FlatList>
        </View>);
        }

}

SquareView.PropTypes = {
    projects: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
}
