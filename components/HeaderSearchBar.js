import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

class HeaderSearchBar extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

        render () {
        return (
            <SearchBar
            round
            lightTheme
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            onChangeText={(text) => this.setState({text})}
            onClearText={this.updateSearchContent}
            placeholder='Search' />)
        }
        
    }

const styles = StyleSheet.create({
    inputStyle: {
        width: 200,
        height:25,
        backgroundColor:"white",
        borderColor: '#d6d7da',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 10,
    },
    containerStyle: {
        backgroundColor:"white",
    }
});
    
export default HeaderSearchBar
