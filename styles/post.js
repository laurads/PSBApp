import { StyleSheet } from 'react-native';

export const COLOR_PRIMARY = '#58C9B9';
export const COLOR_SECONDARY = '#111';
export const FONT_NORMAL = 'OpenSans-Regular';
export const FONT_BOLD = 'OpenSans-Bold';
export const BORDER_RADIUS = 5;

export default StyleSheet.create({
        post: {
            borderWidth: 1,
            borderColor: '#d6d7da',
            borderRadius: 5,
            marginLeft: 10,
            marginTop: 5,
            marginRight: 10,
            paddingTop: 3,
            paddingRight: 5
        },
        title: {
            fontSize: 13,
            fontWeight: 'bold',
            padding: 5,
            paddingRight: 50,
          },
          content: {
            fontSize: 10,
            fontWeight: 'normal',
            padding: 5
          },
          date: {
            fontSize: 10,
            fontWeight: 'normal',
            color: 'grey',
            padding: 5
          },
          icons: {
            padding: 30,
            marginRight: 30
          },
          head:{
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between'
          }
    });