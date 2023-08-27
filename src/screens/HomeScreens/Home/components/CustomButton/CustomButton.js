import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../../../../assets/theme/theme';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: props.backgroundColor || 'white',
      }}
      onPress={props.onPress}>
      <Text
        style={{
          ...styles.text,
          color: props.color || theme.primaryColor,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: theme.secondaryFont,
    color: theme.primaryColor,
  },
});

export default CustomButton;
