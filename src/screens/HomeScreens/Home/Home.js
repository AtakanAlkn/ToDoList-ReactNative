import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import styles from './HomeStyle';
import CustomModal from './components/CustomModal/CustomModal';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {GlobalContext} from '../../../context/GlobalState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../../assets/theme/theme';
import Icon from 'react-native-vector-icons/Feather';

const Home = props => {
  const {data, setData, addVisible, setAddVisible} = useContext(GlobalContext);
  const [filterCheck, setFilterCheck] = useState(false);

  const onNext = item => {
    props.navigation.navigate('Detail', {item});
  };

  const onAddToDo = () => {
    setAddVisible(true);
  };

  const renderCard = ({item}) => {
    return <ToDoCard item={item} onNext={() => onNext(item)} />;
  };

  const writeStorage = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(data)); // "todos" is the storage key
    } catch (error) {
      console.error('Error writing todos:', error);
    }
  };

  const readStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todos');

      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error reading todos:', error);
    }
  };

  useEffect(() => {
    readStorage(); // Load stored todos when the component mounts
  }, []);

  useEffect(() => {
    writeStorage();
  }, [readStorage]);

  const onFilter = () => {
    const hasDateData = data.filter(item => item.date && item.date.timestamp);
    const noDateData = data.filter(item => !item.date || !item.date.timestamp);

    if (filterCheck) {
      hasDateData.sort((a, b) => a.date.timestamp - b.date.timestamp);
      setData([...hasDateData, ...noDateData]);
      setFilterCheck(false);
    } else {
      hasDateData.sort((a, b) => b.date.timestamp - a.date.timestamp);
      setData([...hasDateData, ...noDateData]);
      setFilterCheck(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../../../assets/images/Union.png')} />
        <Text style={styles.text}>LIST OF TODO</Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={onFilter}>
            <Icon name="filter" size={24} color={theme.secondaryColor} />
          </TouchableOpacity>
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
        visible={addVisible}
        onRequestClose={() => setAddVisible(false)}>
        <CustomModal
          buttonTitle="ADD TODO"
          placeholder="Title"
          placeholder2="Description"
        />
      </Modal>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
