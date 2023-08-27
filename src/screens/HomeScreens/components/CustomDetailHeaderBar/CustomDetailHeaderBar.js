import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../../../assets/theme/theme';

const CustomDetailHeaderBar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onBackIcon}>
        <Image source={require('../../../../assets/images/chevron.png')} />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../../../assets/images/clock.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onEditIcon}>
          <Image source={require('../../../../assets/images/edit-2.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onTrashIcon}>
          <Image source={require('../../../../assets/images/trash-2.png')} />
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
