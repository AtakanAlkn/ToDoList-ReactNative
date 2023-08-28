import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './ForgotStyle';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const Forgot = props => {
  const [visibleText, setVisibleText] = React.useState(true);
  const [visibleText2, setVisibleText2] = React.useState(true);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomHeader />
      <View style={{marginTop: 135}}>
        <CustomInput
          placeholder="Password"
          ıcon="true"
          secureTextEntry={visibleText}
          onVisible={() => setVisibleText(!visibleText)}
        />
        <View style={{marginTop: 16}}></View>
        <CustomInput
          placeholder="Confirm Password"
          ıcon="true"
          secureTextEntry={visibleText2}
          onVisible={() => setVisibleText2(!visibleText2)}
        />
        <View style={{marginTop: 24}}></View>
        <CustomButton title="CHANGE PASSWORD" />
      </View>
    </ScrollView>
  );
};

export default Forgot;
