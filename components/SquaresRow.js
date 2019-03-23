import React from 'react';
import { Text, FlatList, View} from 'react-native';
import styles from '../styles/main';
import PropTypes from 'prop-types'
import SquareView from './SquareView.js'

export default class SquaresRow extends React.Component {

    render() {
        items = [];
        this.props.projects.map((project) => {
            items.push(project)
        });
        return (
        <View 
        style={{
            flex: 1, 
            flexDirection: 'column', 
            alignItems: 'flex-start',
            margin: 5}}>
            <Text 
            style={{
                fontSize:16, 
                fontFamily: 'Helvetica',
                marginBottom: 3,
                marginLeft: 5,
                marginTop:8
            }}> 
                {this.props.category.toUpperCase()}
            </Text>
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
            keyExtractor={(item,index) => index.toString()}>

            </FlatList>
        </View>);
        }

}

SquareView.propTypes = {
    projects: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
}
