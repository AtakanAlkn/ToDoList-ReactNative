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
  },
  description: {
    fontFamily: theme.secondaryFont,
    fontSize: 16,
  },
  image: {
    resizeMode: 'contain',
    marginVertical: 20,
    height: 200,
    width: '100%',
  },
  bottomBox: {
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
