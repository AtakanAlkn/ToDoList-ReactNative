import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../../assets/theme/theme';

const CustomHeader = ({size}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>T</Text>
          <Text style={styles.text}>O</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>D</Text>
          <Text style={styles.text}>O</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>L</Text>
          <Text style={styles.text}>I</Text>
          <Text style={styles.text}>S</Text>
          <Text style={styles.text}>T</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: theme.primaryFont,
    fontSize: 73,
    color: theme.primaryColor,
    marginHorizontal: 15,
  },
});

export default CustomHeader;
