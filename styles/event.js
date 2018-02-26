import { StyleSheet } from 'react-native';

export const COLOR_PRIMARY = '#58C9B9';
export const COLOR_SECONDARY = '#111';
export const FONT_NORMAL = 'OpenSans-Regular';
export const FONT_BOLD = 'OpenSans-Bold';
export const BORDER_RADIUS = 5;

export default StyleSheet.create({
        event: {
            borderWidth: 1,
            borderColor: '#d6d7da',
            borderRadius: 5,
            marginLeft: 10,
            marginTop: 5,
            marginRight: 10,
            paddingTop: 3,
            paddingRight: 5
        },
        images:{
            marginLeft: 10,
            marginTop: 5,
            marginRight: 10,
            marginBottom: 10,
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between'
        },
        image:{
            width: 200, 
            height: 200,
            margin:10
        },
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            paddingTop:10,
            paddingRight: 20,
            paddingLeft:5
          },
          placeImage:{
            flexDirection: 'row', 
            alignItems: 'flex-start',
            paddingRight: 20,
            paddingLeft:5
          },
          place: {
            fontSize: 10,
            fontStyle: 'italic',
          },
          content: {
            fontSize: 10,
            fontWeight: 'normal',
            padding: 10,
          },
          date: {
            fontSize: 15,
            fontWeight: 'bold',
            padding: 5,
            flex :1,
          },
          icons: {
            padding: 30,
            marginRight: 30
          },
          head:{
            height:40,
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between'
          }
    });