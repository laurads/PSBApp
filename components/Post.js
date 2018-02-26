import React from 'react';
import { Text, TouchableOpacity, View, Image, Linking  } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/post.js';
import Moment from 'moment';

class Post extends React.Component {

    static propTypes = {
        content: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            images: [],
            toDisplayImages: [],
            galeryImages: []
        };
    }

    getImagesUrl(){
        let images_src = []
        const { content } = this.props;
        var toDisplayImages = [];
        var galeryImages = [];
        if(content.attachments 
            && content.attachments.data.length > 0  
            && content.attachments.data[0].subattachments 
            && content.attachments.data[0].subattachments.data.length > 0 ){
                content.attachments.data[0].subattachments.data.map((img) => {
                    var uri = img.media.image.src;
                    var id = img.target.id;
                    console.log("id: "+id+", uri: "+uri);
                    if(toDisplayImages.length < 3 ){
                        toDisplayImages.push(this.renderImage(id,uri))
                    } 
            })
            return toDisplayImages;
           // this.setState({galeryImages: galeryImages});
        }
    }

    renderImage(id,imgUri){
        return(
            <Image 
                key={id}
                style={styles.image}
                source={{uri:imgUri}}
            />
        )
    }

    render(){
        const { content } = this.props;
        var toDisplayImages = this.getImagesUrl();
        if(content.message){
            return (
            <View style={styles.post}>
                <View style={styles.head}>
                    <Text style={styles.date} >{Moment(content.created_time).format('LLL')}</Text>
                    <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL(content.permalink_url)}>
                        <Image
                            style={{width: 20, height: 20}}
                            source={require('../icons/linkIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.content} >{content.message}</Text>
                <View style={styles.images}>
                  {toDisplayImages}      
                </View>
            </View>
            )
        }else{
            return null;
        }
    }
    
}


export default Post