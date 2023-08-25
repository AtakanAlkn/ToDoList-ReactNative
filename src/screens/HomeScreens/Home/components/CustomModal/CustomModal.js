import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './CustomModalStyle';
import CustomButton from '../CustomButton/CustomButton';

const CustomModal = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = text => {
    setTitle(text);
  };

  const onChangeDescription = text => {
    setDescription(text);
  };

  const onPress = () => {
    if (title != '' && description != '') {
      props.onPress(title.toUpperCase(), description);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        onChangeText={onChangeTitle}
      />
      <TextInput
        style={styles.input2}
        placeholder={props.placeholder2}
        placeholderTextColor="white"
        textAlignVertical="top"
        multiline
        onChangeText={onChangeDescription}
      />
      <CustomButton title="Calendar /Eklenecek" />
      <CustomButton title="Image/ Eklenecek" />
      <CustomButton title="ADD TODO" onPress={onPress} />
    </View>
  );
};
export default CustomModal;
