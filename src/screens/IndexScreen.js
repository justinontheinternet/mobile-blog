import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
// import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts }  = useContext(Context);

  // allows us to make sure functions like getBlogPosts are run only once
  // requires second argument of [] for this
  useEffect(() => {
    getBlogPosts();

    // this lets us run code each time this screen becomes the main focus of the app
    // listener var needs to be cleaned up (below)
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // only run if instance of this screen is completely removed from app
    // (navigatin away does not necessarily do that)
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state} 
        keyExtractor={ (blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
              <View style={styles.row}>
                <Text style={styles.title} >{item.title}</Text>
                <TouchableOpacity onPress={ () => deleteBlogPost(item.id) } >
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )  
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
    ,justifyContent: 'space-between'
    ,paddingVertical: 20
    ,paddingHorizontal: 10
    ,borderTopWidth: 1
    // ,borderBottomWidth: 1
    ,borderColor: 'gray'
  }
  ,title: {
    fontSize: 18
  }
  ,icon: {
    fontSize: 24
  }
});

export default IndexScreen;
