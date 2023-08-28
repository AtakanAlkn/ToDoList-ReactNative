import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../../../assets/theme/theme';
import Icon from 'react-native-vector-icons/Feather';

const CustomDetailHeaderBar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onBackIcon}>
        <Icon name="chevron-left" size={24} />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onClockIcon()}>
          <Icon name="clock" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onEditIcon}>
          <Icon name="edit-2" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onTrashIcon}>
          <Icon name="trash-2" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.paddingHorizontal,
    paddingTop: 20,
  },
  button: {
    marginLeft: 8,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CustomDetailHeaderBar;
