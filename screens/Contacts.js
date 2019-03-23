import React from 'react';
import { StyleSheet, View, Platform, Text, Image, Linking } from 'react-native';
import 		styles 			from '../styles/main';
import momentTz from 'moment-timezone';
import { ListItem } from 'react-native-elements'

export default class Contacts extends React.Component {

  render() {
    const date = momentTz.tz("Europe/Paris").format('DD/MM/YYYY HH:mm');
    const list = [
      {
        title: 'admin@assos-psb.org',
        icon: 'email',
        link: 'mailto:admin@assos-psb.org'
      },
      {
        title: '06.27.30.11.03',
        icon: 'phone',
        link: 'tel:0627301103'
      }
    ];
    return (
      <View style={{
          flex: 1, 
          flexDirection: 'column', 
          width: '100%', 
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-start'}}>
        <View style ={{
          marginTop: 50, 
          marginBottom: 70,
          alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>Maxime Corner et son équipe</Text>
          <View style={{ 
            display: 'flex', 
            justifyContent:'center', 
            flexDirection: 'row', 
            alignItems: 'center', 
            margin: 15}}>
              <Image
                style={{
                  width: 30, 
                  height: 30
                }}
                source={require('../icons/placeIconGrey.png')}
              />
              <Text style={{
                color: 'grey', 
                fontSize: 16}}>
                Route de Cannes, 06130 Grasse
              </Text>
            </View>
            <Text style={{
              color: 'grey', 
              fontSize: 12}}>
              {date} Heure locale
            </Text>
        </View>
        <View style ={{width: '100%'}}>
          {
            list.map((item,i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={()=> Linking.openURL(item.link)}
              />
            ))
          }
        </View>
      </View>
    );
  }
}
