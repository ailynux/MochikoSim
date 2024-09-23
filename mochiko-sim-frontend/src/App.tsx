import './App.css';

// src/App.tsx
import React, { useState, useEffect } from 'react';
import { getPetStatus, feedPet, playWithPet, healPet } from './services/PetService';
import { Pet } from './types/Pet';

const App: React.FC = () => {
  const [pet, setPet] = useState<Pet | null>(null);

  useEffect(() => {
    const fetchPetStatus = async () => {
      try {
        const petData = await getPetStatus();
        setPet(petData);
      } catch (error) {
        console.error('Failed to fetch pet status', error);
      }
    };

    fetchPetStatus();
  }, []);

  const handleFeed = async () => {
    try {
      const updatedPet = await feedPet();
      setPet(updatedPet);
    } catch (error) {
      console.error('Failed to feed pet', error);
    }
  };

  const handlePlay = async () => {
    try {
      const updatedPet = await playWithPet();
      setPet(updatedPet);
    } catch (error) {
      console.error('Failed to play with pet', error);
    }
  };

  const handleHeal = async () => {
    try {
      const updatedPet = await healPet();
      setPet(updatedPet);
    } catch (error) {
      console.error('Failed to heal pet', error);
    }
  };

  return (
    <div>
      <h1>MochikoSim</h1>
      {pet ? (
        <div>
          <h2>{pet.name}</h2>
          <p>Hunger: {pet.hunger}</p>
          <p>Happiness: {pet.happiness}</p>
          <p>Health: {pet.health}</p>
          <button onClick={handleFeed}>Feed</button>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleHeal}>Heal</button>
        </div>
      ) : (
        <p>Loading pet status...</p>
      )}
    </div>
  );
};

export default App;
