import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: theme.paddingVertical,
    paddingHorizontal: theme.paddingHorizontal,
  },
  title: {
    fontFamily: theme.primaryFont,
    color: 'black',
    fontSize: 26,
    marginBottom: 24,
  },
  descriptionBox: {
    marginBottom: 20,
    flex: 1,
  },
  description: {
    fontFamily: theme.secondaryFont,
    fontSize: 16,
  },
});
