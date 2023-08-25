import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import styles from './HomeStyle';
import CustomModal from './components/CustomModal/CustomModal';
import ToDoCard from './components/ToDoCard/ToDoCard';

const Home = props => {
  const [isVisible, setisVisible] = useState(false);
  const [data, setData] = useState([]);

  const onNext = item => {
    props.navigation.navigate('Detail', {item});
  };

  const onAddToDo = () => {
    setisVisible(true);
  };

  const onModalButton = (text, description) => {
    const Id = (data.length + 1).toString();
    setisVisible(false);
    setData([...data, {id: Id, text: text, description: description}]);
  };

  const renderCard = ({item}) => {
    return <ToDoCard item={item} onNext={() => onNext(item)} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../../../assets/images/Union.png')} />
        <Text style={styles.text}>LIST OF TODO</Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image source={require('../../../assets/images/filter.png')} />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 18,
          right: 18,
          zIndex: 2,
          borderRadius: 100,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 100,
          }}
          onPress={onAddToDo}>
          <Image
            source={require('../../../assets/images/plus-circle.png')}
            style={{borderRadius: 100}}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setisVisible(false)}>
        <CustomModal
          placeholder="Title"
          placeholder2="Description"
          onPress={onModalButton}
        />
      </Modal>
      <FlatList data={data} renderItem={renderCard} />
    </View>
  );
};

export default Home;
