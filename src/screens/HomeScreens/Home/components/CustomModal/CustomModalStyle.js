import {StyleSheet} from 'react-native';
import theme from '../../../../../assets/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: theme.primaryColor,
    padding: theme.paddingHorizontal,
    marginTop: 40,
  },
  line: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    marginHorizontal: 140,
    marginBottom: 16,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'white',
    paddingHorizontal: 16,
    marginBottom: 16,
    color: 'white',
  },
  input2: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'white',
    paddingHorizontal: 16,

    marginBottom: 16,
    flex: 1,
    color: 'white',
  },
});
