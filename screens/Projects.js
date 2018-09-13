import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import 		styles 			from '../styles/projects';
import {API} from 'aws-amplify';
import { projects } from '../config/data';
import SquaresRow from '../components/SquaresRow.js';

export default class Projects extends React.Component {
  
  
  onLearnMore = (project) => {
    this.props.navigation.navigate('Details', { ...project });
  };

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      projects: {},
      categories: []
    }
  }

  componentDidMount(){
    this.fetchProjects();
  }

  fetchProjects = async () => {
    this.setState(() => {
        return {
            loading: true
        }
    });
    console.log("Call API");
    let categoriesSet = new Set();
    let projectsMap = {};
    API.get('PROJECTSCRUD','/PROJECTS')
        .then(data => {
            data.map((project) => {
              categoriesSet.add(project.CATEGORY);
              if(projectsMap[project.CATEGORY]){
                projectsMap[project.CATEGORY].push(project);
              }else{
                projectsMap[project.CATEGORY]=[project];
              }
            })
            this.setState({
                projects: projectsMap,
                loading: false,
                categories:[...categoriesSet],
            });
        })
        .catch ( err => console.log(err))
  }


  render() {
    items = [];
    contents = this.state.categories.map((category) => {
        items.push(category)
      });
    return (
      <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
       {/* <List>
          {!this.state.loading && this.state.data.map((project) => (
            <ListItem
              hideChevron
              key={project.ID}
              title={project.NAME}
              subtitle={project.DESCRIPTION}
              onPress={() => this.onLearnMore(project)}
            />
          ))}
        </List> 
        <SquaresRow 
        projects={this.state.data}
        category="France">
        </SquaresRow>*/}


        <FlatList 
          data={items}
          renderItem={({item,index}) => {
              return(
                  <SquaresRow
                  projects={this.state.projects[item]}
                  category={item}
                  index={index}
                  parentFlatList={this}>
                  </SquaresRow>
              )
          }}
          keyExtractor={(item,index) => index}>
        </FlatList> 
      </View>
    );
  }
}
