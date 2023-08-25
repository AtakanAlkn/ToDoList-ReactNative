import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: theme.paddingHorizontal,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: theme.primaryFont,
    color: theme.secondaryColor,
    marginLeft: 10,
    fontSize: 36,
  },
});
