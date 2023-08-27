import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.paddingHorizontal,
    paddingVertical: theme.paddingVertical,
    backgroundColor: 'white',
  },
  textBox: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    color: '#27272780',
    fontFamily: theme.secondaryFont,
    marginBottom: 16,
  },
  text2: {
    color: theme.primaryColor,
  },
});
