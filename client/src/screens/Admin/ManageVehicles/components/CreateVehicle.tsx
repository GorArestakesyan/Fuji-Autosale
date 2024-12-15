import axios from 'axios';
import React, { useState } from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateVehicle = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [createdBy, setCreatedBy] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [color, setColor] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [numberOfDoors, setNumberOfDoors] = useState('');
  const [wheelDrive, setWheelDrive] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result?.assets?.[0]?.uri) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('createdBy', createdBy);
    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('mileage', mileage);
    formData.append('fuelType', fuelType);
    formData.append('transmission', transmission);
    formData.append('engineSize', engineSize);
    formData.append('color', color);
    formData.append('numberOfSeats', numberOfSeats);
    formData.append('numberOfDoors', numberOfDoors);
    formData.append('wheelDrive', wheelDrive);
    formData.append('city', city);
    formData.append('zipCode', zipCode);

    if (image) {
      const filename = image?.split('/').pop()!;
      const type = `image/${filename.split('.').pop()}`;

      formData.append('image', {
        uri: Platform.OS === 'ios' ? image?.replace('file://', '') : image,
        name: filename,
        type,
      });
    }

    try {
      const response = await axios.post(
        'http://localhost:3010/vehicles',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('Vehicle created successfully:', response.data);
    } catch (error) {
      console.error('Error creating vehicle:', error);
    }
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Created By"
        value={createdBy}
        onChangeText={setCreatedBy}
      />
      <TextInput
        style={styles.input}
        placeholder="Make"
        value={make}
        onChangeText={setMake}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Mileage"
        value={mileage}
        onChangeText={setMileage}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fuel Type"
        value={fuelType}
        onChangeText={setFuelType}
      />
      <TextInput
        style={styles.input}
        placeholder="Transmission"
        value={transmission}
        onChangeText={setTransmission}
      />
      <TextInput
        style={styles.input}
        placeholder="Engine Size"
        value={engineSize}
        onChangeText={setEngineSize}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Seats"
        value={numberOfSeats}
        onChangeText={setNumberOfSeats}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Doors"
        value={numberOfDoors}
        onChangeText={setNumberOfDoors}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Wheel Drive"
        value={wheelDrive}
        onChangeText={setWheelDrive}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
      />
      <Button title="Pick Image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default CreateVehicle;
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 4,
    width: '98%',
    alignSelf: 'center',
    padding: 15,
  },
});
