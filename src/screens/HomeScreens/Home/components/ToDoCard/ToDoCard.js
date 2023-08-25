import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../../../../assets/theme/theme';

const ToDoCard = ({item, onNext}) => {
  const colors = () => {
    return item.id % 2 === 0 ? true : false;
  };

  return (
    <TouchableOpacity
      onPress={onNext}
      style={{
        ...styles.container,
        backgroundColor: colors() ? theme.primaryColor : theme.secondaryColor,
      }}>
      <Text style={styles.title}>{item.text}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {item.description}
      </Text>
      <Text style={styles.date}>{item.id}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: theme.secondaryFont,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'white',
    fontFamily: theme.secondaryFont,
    marginBottom: 16,
  },
  date: {fontSize: 14, color: 'white', fontFamily: theme.secondaryFont},
});

export default ToDoCard;
