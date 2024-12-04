import axios from 'axios';
import React, { useState } from 'react';
import { Button, Image, Platform, TextInput, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateVehicleScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [createdBy, setCreatedBy] = useState('');

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
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Created By"
        value={createdBy}
        onChangeText={setCreatedBy}
      />
      <Button title="Pick Image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CreateVehicleScreen;
