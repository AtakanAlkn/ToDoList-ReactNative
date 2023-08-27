import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';
import styles from './CustomModalStyle';
import theme from '../../../../../assets/theme/theme';
import CustomButton from '../CustomButton/CustomButton';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CustomModalNew = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const onChangeTitle = text => {
    setTitle(text);
  };

  const onChangeDescription = text => {
    setDescription(text);
  };

  const onPress = () => {
    props.onPress(title.toUpperCase(), description, date, selectedImage);
  };

  const onImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setSelectedImage(response.assets[0].uri);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        defaultValue={props.value}
        placeholderTextColor="white"
        onChangeText={onChangeTitle}
      />
      <TextInput
        style={styles.input2}
        placeholder={props.placeholder2}
        defaultValue={props.value2}
        placeholderTextColor="white"
        textAlignVertical="top"
        multiline
        onChangeText={onChangeDescription}
      />

      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.calendarView}>
          <Text style={styles.calendarText}>{props.deadline}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image
              source={require('../../../../../assets/images/calendar.png')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onImagePicker}>
        <View style={styles.calendarView}>
          <Text style={styles.calendarText}>Add Image (Optional)</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={require('../../../../../assets/images/image.png')} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <CustomButton title={props.buttonTitle} onPress={onPress} />
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}>
        <Calendar
          style={{borderRadius: 20, elevation: 4, margin: 40, marginTop: 200}}
          onDayPress={day => {
            setDate(day);
            setShowModal(false);
          }}
        />
      </Modal>
    </View>
  );
};
export default CustomModalNew;
