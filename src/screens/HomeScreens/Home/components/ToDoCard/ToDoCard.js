import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../../../../assets/theme/theme';
import {GlobalContext} from '../../../../../context/GlobalState';

const ToDoCard = ({item, onNext}) => {
  const {data} = useContext(GlobalContext);

  const colors = () => {
    const colorId = data.findIndex(object => object.id === item.id);
    return colorId % 2 === 1 ? true : false;
  };

  const getMonthName = month => {
    switch (month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return 'Invalid Month';
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onNext}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors() ? theme.primaryColor : theme.secondaryColor,
        }}>
        <Text style={styles.title}>{item.text}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        {item.date ? (
          <Text style={styles.date}>
            Deadline: {item.date.day} {getMonthName(item.date.month)}{' '}
            {item.date.year}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    minHeight: 100,
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
