import React, { useState } from 'react';

import { cities } from './mock';
import * as Styles from './styles';

const SelectedInputField = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState<string[]>(cities);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSelectedCity(inputValue);

    if (inputValue.trim() !== '') {
      const filtered = cities.filter((city) =>
        city.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities(cities);
    }
  };

  return (
    <Styles.InputWrapper open={isOpen}>
      <Styles.SelectInput
        type="text"
        open={isOpen}
        value={selectedCity}
        placeholder="Location"
        onChange={handleInputChange}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(!isOpen)}
      />

      <Styles.Scroll open={isOpen}>
        <Styles.SelectItemWrapper open={isOpen}>
          {filteredCities.map((city) => (
            <Styles.SelectItem key={city} onClick={() => handleCityClick(city)}>
              {city}
            </Styles.SelectItem>
          ))}
        </Styles.SelectItemWrapper>
      </Styles.Scroll>
    </Styles.InputWrapper>
  );
};

export default SelectedInputField;
