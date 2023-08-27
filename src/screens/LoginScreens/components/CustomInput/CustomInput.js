import React from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../../assets/theme/theme';

const CustomInput = props => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.container}
        placeholder={props.placeholder}
        onFocus={props.onPressIn}
        onBlur={props.onBlur}
      />
      {props.ıcon && (
        <TouchableOpacity style={{zIndex: 2, position: 'absolute', right: 17}}>
          <Image
            style={styles.ıcon}
            source={require('../../../../assets/images/eye-off.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 16,
    borderColor: theme.titleColor,
  },
  ıcon: {},
});

export default CustomInput;
