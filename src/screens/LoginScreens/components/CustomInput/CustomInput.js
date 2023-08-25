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
        <TouchableOpacity>
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
    marginBottom: 16,
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
  ıcon: {
    position: 'absolute',
    zIndex: 2,
    right: 17, //41
  },
});

export default CustomInput;
