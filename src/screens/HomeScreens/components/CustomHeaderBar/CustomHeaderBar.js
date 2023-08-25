import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../../../assets/theme/theme';

const CustomHeaderBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TO DO LIST</Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/settings.png')}
          />
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
  },
  text: {
    color: theme.primaryColor,
    fontFamily: theme.primaryFont,
    fontSize: 24,
  },
  image: {},
});

export default CustomHeaderBar;