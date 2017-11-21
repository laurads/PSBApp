import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Post extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <TouchableOpacity >
                <View >
                <Text>this.props.post.story</Text>
                <Text >this.props.post.message</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
}

export default Post