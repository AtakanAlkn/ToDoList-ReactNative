import React from 'react';
import {View, Text} from 'react-native';
import styles from './DetailStyle';

const Detail = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.text}</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Detail;
