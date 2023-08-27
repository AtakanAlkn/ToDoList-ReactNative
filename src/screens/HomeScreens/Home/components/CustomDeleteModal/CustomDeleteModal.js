import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import theme from '../../../../../assets/theme/theme';

const CustomDeleteModal = props => {
  return (
    <View style={styles.container}>
      <CustomButton title="Delete TODO" onPress={props.onDeleteButton} />
      <CustomButton
        title="Cancel"
        color="#00FF19"
        onPress={props.onCancelButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'flex-end',
    paddingHorizontal: theme.paddingHorizontal,
  },
});

export default CustomDeleteModal;
