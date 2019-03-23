import React from 'react';
import { View, Modal, Button  } from 'react-native';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

class GalleryModal extends React.Component {

    static propTypes = {
        displayModal: PropTypes.bool.isRequired,
        images: PropTypes.array.isRequired,
    }

    render(){
        return(
        <Modal
            visible={this.props.displayModal}
            transparent={false}
            animationType={'none'}
            onRequestClose={() => this.props.closeCallback()}
            >
            <View 
                style={{
                    flex:1, 
                    backgroundColor: 'black', 
                    alignItems: 'flex-start'
                }}>
                <Button
                    title="X"
                    color='white'
                    onPress={() => this.props.closeCallback()}
                /> 
            </View>
            <View style={{flex:11}}>
                <Gallery
                    style={{ 
                        flex: 1, 
                        backgroundColor: 'black' 
                    }}
                    images={this.props.images}
                />
            </View>
            <View 
                style={{
                    flex:1, 
                    backgroundColor: 'black', 
                    alignItems: 'flex-start'
                }}>
            </View>
        </Modal>)
    }
}


export default GalleryModal