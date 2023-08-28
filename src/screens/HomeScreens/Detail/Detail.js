import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image, Modal} from 'react-native';
import styles from './DetailStyle';
import CustomModal from '../Home/components/CustomModal/CustomModal';
import CustomDeleteModal from '../Home/components/CustomDeleteModal/CustomDeleteModal';
import {GlobalContext} from '../../../context/GlobalState';
import CustomModalNew from '../Home/components/CustomModal/CustomModalNew';

const Detail = ({route, navigation}) => {
  const {visible, setVisible, deleteVisible, setDeleteVisible, data, setData} =
    useContext(GlobalContext);
  const {item} = route.params;

  const onModalButton = (text2, description2, date2, selectedImage2) => {
    const editIndex = data.findIndex(object => object.id === item.id);
    const newData = [...data]; // Mevcut veriyi kopyala
    newData[editIndex] = {
      ...newData[editIndex],
      text: text2 ? text2 : item.text,
      description: description2 ? description2 : item.description,
      date: date2 ? date2 : null,
      image: selectedImage2 ? selectedImage2 : null,
    };
    setData(newData); // Güncellenmiş veriyi kaydet
    setVisible(false);
    navigation.navigate('Home');
  };

  useEffect(() => {}, [visible]);

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

  let newDate = '';
  if (item.date) {
    newDate = `${item.date.day} ${getMonthName(item.date.month)} ${
      item.date.year
    }`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.text}</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{item.description}</Text>
        {item.image ? (
          <Image style={styles.image} source={{uri: item.image}} />
        ) : null}
      </View>
      <View style={styles.bottomBox}>
        {newDate === '' ? null : (
          <Text style={styles.date}>Deadline: {newDate}</Text>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <CustomModalNew
          onPress={onModalButton}
          buttonTitle="EDIT TODO"
          placeholder="Title"
          placeholder2="Description"
          value={item.text}
          value2={item.description}
          deadline={newDate == '' ? 'Deadline (Optional)' : newDate}
        />
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteVisible}
        onRequestClose={() => setDeleteVisible(false)}>
        <CustomDeleteModal
          onCancelButton={() => setDeleteVisible(false)}
          onDeleteButton={() => {
            const deleteIndex = data.findIndex(object => object.id === item.id);
            data.splice(deleteIndex, 1);
            setData(data);
            navigation.navigate('Home');
            setDeleteVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};

export default Detail;
