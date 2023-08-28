import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../../../assets/theme/theme';
import Icon from 'react-native-vector-icons/EvilIcons';

const CustomHeaderBar = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TO DO LIST</Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={props.onSettings}>
          <Icon name="gear" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: theme.paddingHorizontal,
    paddingTop: 20,
    alignItems: 'center',
  },
  text: {
    color: theme.primaryColor,
    fontFamily: theme.primaryFont,
    fontSize: 30,
  },
});

export default CustomHeaderBar;
