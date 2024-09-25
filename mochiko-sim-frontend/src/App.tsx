import './App.css';

// src/App.tsx
import React, { useState, useEffect } from 'react';
import { getPetStatus, feedPet, playWithPet, healPet } from './services/PetService';
import { Pet } from './types/Pet';
import './App.css'; // Import your styles

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

  // Function to determine the pet image based on status
  const getPetImage = (): string | undefined => {
    if (!pet) return undefined;  // Return undefined instead of null

    if (pet.hunger > 70) {
      return './assets/pets/pet_hungry.jpg';  // Show hungry pet image
    }
    if (pet.health < 30) {
      return './assets/pets/pet_sadness.jpg';  // Show sick pet image
    }
    if (pet.happiness < 30) {
      return './assets/pets/pet_happiness.jpg';  // Show sad pet image
    }

    return './assets/pets/pet_happy.jpg';  // Default to happy pet image
  };

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
          
          {/* Display the pet's image based on the status */}
          <img 
            src={getPetImage()} 
            alt="Pet status" 
            style={{ width: '200px', height: '200px' }} // Adjust size as needed
          />

          <div>
            <button onClick={handleFeed}>Feed</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleHeal}>Heal</button>
          </div>
        </div>
      ) : (
        <p>Loading pet status...</p>
      )}
    </div>
  );
};

export default App;
