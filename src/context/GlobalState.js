import {createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        visible,
        setVisible,
        deleteVisible,
        setDeleteVisible,
        addVisible,
        setAddVisible,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
