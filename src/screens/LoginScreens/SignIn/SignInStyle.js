import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 46,
  },
  forgotText: {
    fontFamily: theme.secondaryFont,
    color: theme.titleColor,
    marginBottom: 16,
  },
  footerText: {
    fontFamily: theme.secondaryFont,
    color: theme.titleColor,
  },
  footerText2: {
    fontFamily: theme.secondaryFont,
    color: theme.primaryColor,
  },
});
