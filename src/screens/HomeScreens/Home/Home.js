import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeStyle';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../../../assets/images/Union.png')} />
        <Text style={styles.text}>LIST OF TODO</Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image source={require('../../../assets/images/filter.png')} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Detail')}
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 40,
        }}></TouchableOpacity>
    </View>
  );
};

export default Home;
