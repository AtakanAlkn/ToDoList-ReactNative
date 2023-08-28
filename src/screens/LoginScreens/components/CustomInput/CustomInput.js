import React from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../../assets/theme/theme';
import Icon from 'react-native-vector-icons/Feather';

const CustomInput = props => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.container}
        placeholder={props.placeholder}
        onFocus={props.onPressIn}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
      />
      {props.ıcon && (
        <TouchableOpacity
          style={{zIndex: 2, position: 'absolute', right: 17}}
          onPress={props.onVisible}>
          <Icon name="eye-off" size={24} />
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
