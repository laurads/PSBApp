import React from 'react';
import { Text, TouchableOpacity, View, Image, Linking  } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/event.js';
import Moment from 'moment';

class Event extends React.Component {

    static propTypes = {
        content: PropTypes.object.isRequired,
    }

    getPlaceName(){
        var content = this.props.content;
        if(content.place && content.place.name){
            return(
                <View style={styles.placeImage}>
                    <Image
                        style={{width: 12, height: 12}}
                        source={require('../icons/placeIcon.png')}
                    />
                    <Text style={styles.place} >{content.place.name}</Text>
                </View>
            )
        }
    }

    getCoverImage(){
        if(this.props.content.cover && this.props.content.cover.source){
            var coverUri = this.props.content.cover.source;
            return(
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image 
                        style={styles.image}
                        source={{uri:coverUri}}
                    />
                </View>
            )
        }else{
            return null;
        }
    }

    render(){
        const { content } = this.props;
        var place = this.getPlaceName();
        var cover = this.getCoverImage();
        if(content.description){
            return (
            <View style={styles.event}>
                <View style={styles.head}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.date} >{Moment(content.start_time).format('DD MMM').toUpperCase()}</Text>
                        <Text style={styles.date} >{Moment(content.start_time).format('YYYY')}</Text>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={styles.title} >{content.name}</Text>
                        {place}
                    </View>
                </View>
                <View style={{flex:1}}>
                    {cover}
                    <Text style={styles.content} >{content.description}</Text>
                </View>
            </View>
            )
        }else{
            return null;
        }
    }
    
}


export default Event