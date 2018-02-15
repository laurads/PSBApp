import React from 'react';
import { Text, TouchableOpacity, View, Image, Linking  } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/post.js';
import Moment from 'moment';

class Post extends React.Component {

    static propTypes = {
        content: PropTypes.object.isRequired,
    }

    render = () => {
        const { content } = this.props;
        
        if(content.message){
            return (
            <View style={styles.post}>
                <View style={styles.head}>
                    <Text style={styles.date} >{Moment(content.created_time).format('LLL')}</Text>
                    <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('http://google.com')}>
                        <Image
                            style={{width: 20, height: 20}}
                            source={require('../icons/linkIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.content} >{content.message}</Text>
            </View>
            )
        }else{
            return null;
        }
    }
    
}


export default Post