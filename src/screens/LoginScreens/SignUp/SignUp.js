import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import styles from './SignUpStyle';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignUp = props => {
  const [visibleText, setVisibleText] = useState(true);
  const [visibleText2, setVisibleText2] = useState(true);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setSize(73);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setSize(73);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [size, setSize] = useState(73);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomHeader size={size} />
      <View style={{marginTop: 9}}></View>
      <CustomInput placeholder="Email" />
      <View style={{marginTop: 16}}></View>
      <CustomInput placeholder="Full Name" />
      <View style={{marginTop: 16}}></View>
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
      <View style={{marginTop: 24}}>
        <CustomButton title="SIGN UP" />
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={styles.footerText}>Have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.footerText2}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
