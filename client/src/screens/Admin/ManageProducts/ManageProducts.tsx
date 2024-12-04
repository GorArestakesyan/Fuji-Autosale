import React, {useEffect} from 'react';
import CreateVehicleScreen from './components/CreateProduct';
import {VehiclesService} from '../../../implementations/services/index';
import axios from 'axios';

const ManageProducts = () => {
    const {fetchVehicles} = new VehiclesService(axios);

    useEffect(() => {
        fetchVehicles();
    },[]);

  return (
    <>
      <CreateVehicleScreen />
    </>
  );
};

export default ManageProducts;
