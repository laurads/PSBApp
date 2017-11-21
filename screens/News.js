import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/main';
import { events } from '../config/data';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class News extends React.Component {

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
        posts: JSON.parse(JSON.stringify(result)).posts.data
      })
    }
  }



  componentDidMount(){
    this.fetchFbFeeds();
  }

  fetchFbFeeds() {    
    const infoRequest = new GraphRequest(
      '/assocpsb',
      {
        parameters: {
          fields: {
            string: 'posts' 
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
      items.push(
        <ListItem
        hideChevron
        key={post.id}
        title={`${post.story} (${post.created_time})`}
        subtitle={post.message}
        />)
    });
    const appearance 	= styles ()
    console.log(contents);
    return (
      <View style={styles.container}>
      <Text> Test </Text>
      <ScrollView>
        <List>
            {items}
        </List>
      </ScrollView>
      </View>
    );
}

}


export default News;
