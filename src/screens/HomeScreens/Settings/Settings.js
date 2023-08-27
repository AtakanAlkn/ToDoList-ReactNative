import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './SettingsStyle';
import CustomButton from '../Home/components/CustomButton/CustomButton';
import theme from '../../../assets/theme/theme';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{marginBottom: 185}}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Full Name</Text>
        <Text style={{...styles.text2, fontWeight: 'bold'}}>Atakan Alkan</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text2}>atakan.alkan29@gmail.com</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Password</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.text2}>Change Password</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{marginTop: 24}}>
        <CustomButton
          color="white"
          title="LOG OUT"
          backgroundColor={theme.primaryColor}
        />
      </View>
    </View>
  );
};

export default Settings;
