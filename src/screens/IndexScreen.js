import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
// import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost }  = useContext(Context);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button 
        title="Add Post"
        // onPress={() => addBlogPost()}
        onPress={addBlogPost}
      />
      <FlatList
        data={state} 
        keyExtractor={ (blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;