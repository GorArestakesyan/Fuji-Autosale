import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export function useAsyncStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T | null>(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        setStoredValue(value ? JSON.parse(value) : initialValue);
      } catch (error) {
        console.error('Failed to load the value from AsyncStorage', error);
      }
    };
    loadStoredValue();
  }, [key, initialValue]);

  const setValue = useCallback(async (setKey: string, value: T) => {
    try {
      await AsyncStorage.setItem(setKey, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error('Failed to save the value to AsyncStorage', error);
    }
  }, []);

  const removeValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error('Failed to remove the value from AsyncStorage', error);
    }
  }, [key]);

  return { storedValue, setValue, removeValue };
}
