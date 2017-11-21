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
            borderRadius: 8,
            marginLeft: 5,
            marginTop: 2.5,
            marginRight: 5,
            marginLeft: 2.5
        },
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            padding: 5
          },
          content: {
            fontSize: 10,
            fontWeight: 'normal',
            padding: 5
          },
    });