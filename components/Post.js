import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/post.js';

class Post extends React.Component {

    static propTypes = {
        content: PropTypes.object.isRequired,
    }

        render = () => {
            const { content } = this.props;
        return (
            <TouchableOpacity style={styles.post}>
                <View >
                <Text style={styles.title} >{content.story}</Text>
                <Text style={styles.content} >{content.message}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
}

export default Post