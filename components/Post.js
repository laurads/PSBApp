import React from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/post.js';
import Moment from 'moment';
import Globals from '../config/global.js';
import { Dimensions } from 'react-native';
import Images from '../config/images.js';
import GalleryModal from './GalleryModal.js';



class Post extends React.Component {
    

    static propTypes = {
        content: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            toDisplayImages: [],
            allImages: [],
            modalVisible: false,
        };
        
    }

    componentDidMount(){ 
        this.loadImages();
    }

    loadImages(){
        const { content } = this.props;
        const { width, height } = Dimensions.get('window')
        let toDisplayImages = JSON.parse(JSON.stringify(this.state.toDisplayImages));
        let allImages = JSON.parse(JSON.stringify(this.state.allImages));
        if(content.attachments 
            && content.attachments.data.length > 0  
            && content.attachments.data[0].subattachments 
            && content.attachments.data[0].subattachments.data.length > 0 ){
                var imagesNb = content.attachments.data[0].subattachments.data.length;
                content.attachments.data[0].subattachments.data.map((img) => {
                    let uri = img.media.image.src;
                    let id = img.target.id;
                    if((imagesNb <= Globals.PHOTOS_MAX_NB_PER_ROW && 
                        toDisplayImages.length < Globals.PHOTOS_MAX_NB_PER_ROW ) ||
                        (toDisplayImages.length < Globals.PHOTOS_MAX_NB_PER_ROW-1)){
                        if(img.type =="photo"){
                            toDisplayImages.push(this.renderImageToDisplay(id,uri));
                      //  }else if(img.type.indexOf("video") != -1){
                        //    toDisplayImages.push(this.renderVideoToDisplay(id,uri));
                        }
                    } 
                    allImages.push(this.renderGalleryImage(uri));
            })
            if(imagesNb > Globals.PHOTOS_MAX_NB_PER_ROW ){
                toDisplayImages.push(this.renderLocalImage(0, Images.plusIcon))
            }
            this.setState({toDisplayImages: toDisplayImages});
            this.setState({allImages: allImages});
        }
    }

    renderImageToDisplay(id,imgUri){
        return(
            <Image 
                key={id}
                style={styles.image}
                source={{uri:imgUri}}
            />
        )
    }

  /*  renderVideoToDisplay(id,videoUri){
        return(
            <Video 
                key={id}
                style={styles.image}
                source={{uri:videoUri}}
            />
        )
    } */

    renderLocalImage(id, url){
        return(
            <Image 
                key={id}
                style={styles.image}
                source={url}
            />
        )
    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal = () => {
        if(this.state.modalVisible){
            this.setState({modalVisible:false});
        }
        
    }

    renderGalleryImage(imgUri){
        return { source: { uri: imgUri } };
    }

    render(){
        const { content } = this.props;
        var toDisplayImages = this.state.toDisplayImages;
        var allImages = this.state.allImages;
        if(content.message){
            return (
            <View style={styles.post}>
                <GalleryModal
                    displayModal={this.state.modalVisible}
                    images={this.state.allImages}
                    closeCallback={this.closeModal}
                />
                <View style={styles.head}>
                    <Text style={styles.date} >
                        {Moment(content.created_time).format('LLL')}
                    </Text>
                    <TouchableOpacity 
                        style={styles.icon} 
                        onPress={() => Linking.openURL(content.permalink_url)}
                    >
                        <Image
                            style={{
                                width: 20, 
                                height: 20
                            }}
                            source={require('../icons/linkIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.content} >
                    {content.message}
                </Text>
                <TouchableOpacity 
                    style={styles.images} 
                    onPress={()=> this.openModal()}
                >
                    {toDisplayImages}      
                </TouchableOpacity>
            </View>
            )
        }else{
            return null;
        }
    }
    
}


export default Post