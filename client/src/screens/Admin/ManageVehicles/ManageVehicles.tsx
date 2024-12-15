import { useVehiclesQuery } from '@hooks/products';
import { Text } from '@styles/theme';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import CreateVehicle from './components';

const ManageVehicles = () => {
  const [inputValue, setInputValue] = useState('');
  const { data, isLoading } = useVehiclesQuery();
  useEffect(() => {
    console.log(data);
  }, []);

  const deleteVehicle = async () => {
    await axios.delete(`http://localhost:3010/vehicles/${inputValue}`);
  };
  return (
    <>
      <CreateVehicle />
      <TextInput
        value={inputValue}
        style={{ height: 40 }}
        onChangeText={e => setInputValue(e)}
      />
      <TouchableOpacity onPress={deleteVehicle}>
        <Text>Delete Vehicle</Text>
      </TouchableOpacity>
    </>
  );
};

export default ManageVehicles;
