import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './SignInStyle';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignIn = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomHeader />
      <View style={{marginTop: 98}}>
        <CustomInput placeholder="Email" />
        <View style={{marginTop: 16}}></View>
        <CustomInput placeholder="Password" ıcon="true" />
        <View style={{marginTop: 16}}></View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Forgat')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="SIGN IN"
          onPress={() => props.navigation.navigate('Home')}
        />
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.footerText2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
