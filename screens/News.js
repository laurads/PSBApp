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

class News extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
  }
  _getFeedsCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching feeds: ' + JSON.stringify(error));
    } else {
      //console.log(JSON.stringify(result))
      result.posts.data.map((post) => {
        console.log('fetch post wih id ' + post.id )        
        this.fetchPost(post.id)
      });
    }
  }

  _getPostCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching post from post id: ' + JSON.stringify(error));
    } else {
      var posts = JSON.parse(JSON.stringify(this.state.posts))
      console.log('adding post to posts ' + JSON.stringify(result) )
      if(result.status_type != "created_event"){
        posts.push(result)
        this.setState({posts: posts});
      }
      //Sort by ascending created_time
      posts.sort(function(a, b) {
        return new Date(b.created_time) - new Date(a.created_time);
      });
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
      this._getFeedsCallback.bind(this)
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

//enum{mobile_status_update, created_note, added_photos, added_video, 
//shared_story, created_group, created_event, wall_post, app_created_story, 
//published_story, tagged_in_photo, approved_friend}
fetchPost(id) {    
  const infoRequest = new GraphRequest(
    '/'+id,
    {
      parameters: {
        fields: {
          string: 'status_type,story,message,created_time,permalink_url,attachments'
        },
        access_token: {
          string: '1213195135447643|ZuJ5SU0YmplfsgWKZsrB6Sg7FPs' 
        }
      }
    },
    this._getPostCallback.bind(this)
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

export default News;
