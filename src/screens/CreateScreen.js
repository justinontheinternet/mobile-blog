import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label} >Enter Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
          /* we put this navigation call into a callback function in addBlogPost
            this is to avoid situations where maybe later, due to changes, we don't want
            navigation to happen immediately (such as waiting for an ajax call) */
          // navigation.navigate('Index');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18
    ,borderWidth: 1
    ,borderColor: 'black'
    ,marginBottom: 15
    ,padding: 5
    ,margin: 5
  }
  ,label: {
    fontSize: 20
    ,marginBottom: 5
    ,marginLeft: 5
  }
});

export default CreateScreen;
