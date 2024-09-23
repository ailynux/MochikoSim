// src/services/PetService.ts
import axios from 'axios';
import { Pet } from '../types/Pet';

// The base API URL where your backend is running (make sure this is correct)
const API_URL = 'http://localhost:5000/api/pet';

export const getPetStatus = async (): Promise<Pet> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching pet status:', error);
    throw error;
  }
};

export const feedPet = async (): Promise<Pet> => {
  try {
    const response = await axios.post(`${API_URL}/feed`);
    return response.data;
  } catch (error) {
    console.error('Error feeding the pet:', error);
    throw error;
  }
};

export const playWithPet = async (): Promise<Pet> => {
  try {
    const response = await axios.post(`${API_URL}/play`);
    return response.data;
  } catch (error) {
    console.error('Error playing with the pet:', error);
    throw error;
  }
};

export const healPet = async (): Promise<Pet> => {
  try {
    const response = await axios.post(`${API_URL}/heal`);
    return response.data;
  } catch (error) {
    console.error('Error healing the pet:', error);
    throw error;
  }
};
