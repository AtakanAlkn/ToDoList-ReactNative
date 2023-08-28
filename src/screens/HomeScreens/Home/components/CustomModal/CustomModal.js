import React, {useState, useContext} from 'react';
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
import {GlobalContext} from '../../../../../context/GlobalState';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons';

const CustomModal = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const {data, setData, addVisible, setAddVisible} = useContext(GlobalContext);
  const onChangeTitle = text => {
    setTitle(text);
  };

  const onChangeDescription = text => {
    setDescription(text);
  };

  const onPress = () => {
    if (title != '' && description != '') {
      const Id = uuid.v4();
      setAddVisible(false);
      setData([
        ...data,
        {
          id: Id,
          text: title.toUpperCase(),
          description: description,
          date: date,
          image: selectedImage,
        },
      ]);
    }
  };

  const onImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response && response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const getMonthName = month => {
    switch (month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return 'Invalid Month';
    }
  };

  let newDate = 'Deadline (Optional)';
  if (date) {
    newDate = `${date.day} ${getMonthName(date.month)} ${date.year}`;
  }

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
          <Text style={styles.calendarText}>{newDate}</Text>
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
export default CustomModal;
