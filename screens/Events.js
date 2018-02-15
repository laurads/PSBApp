import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import { events } from '../config/data';
import Post from '../components/Post.js';
import NewsHeader from '../components/NewsHeader';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class Events extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
  }
  _responsePostsCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + JSON.stringify(error));
    } else {
      console.log(JSON.stringify(result))
      this.setState({
        posts: JSON.parse(JSON.stringify(result)).feed.data
      })
    }
  }

  componentDidMount(){
    this.fetchFbEvents();
  }

  fetchFbEvents() {    
    const infoRequest = new GraphRequest(
      '/assocpsb',
      {
        parameters: {
          fields: {
            string: 'feed' 
          },
          access_token: {
            string: '1213195135447643|ZuJ5SU0YmplfsgWKZsrB6Sg7FPs' 
          }
        }
      },
      this._responsePostsCallback.bind(this)
    );
    new GraphRequestManager().addRequest(infoRequest).start();
}

  render() {
    items = []
    contents = this.state.posts.map((post) => {
      items.push(post)
    });
    const appearance 	= styles ()
    console.log(contents);
    return (
      <ScrollView>
          <NewsHeader/>
          <FlatList
            data={items}
            extraData={this.state}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          />
      </ScrollView>
    );
  }

  _renderItem = ({item}) => (
    <Post content = {item} />
  );
}


export default Events;
