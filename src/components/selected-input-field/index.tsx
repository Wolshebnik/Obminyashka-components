import React, { useState } from 'react';

import { cities } from './mock';
import * as Styles from './styles';
import { Field, FieldProps } from 'formik';

export interface ISelectedInput {
  name: string;
}

const SelectedInputField = ({ name }: ISelectedInput) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredCities, setFilteredCities] = useState<string[]>(cities);

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const handleCityClick = (city: string) => {
          form.setFieldValue(name, city);
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = e.target.value;
          form.setFieldValue(name, inputValue);

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
              name={name}
              open={isOpen}
              value={field.value}
              placeholder="Region"
              onChange={handleInputChange}
              onBlur={() => setIsOpen(false)}
              onFocus={() => setIsOpen(!isOpen)}
            />

            <Styles.Scroll open={isOpen}>
              <Styles.SelectItemWrapper open={isOpen}>
                {filteredCities.map((city) => (
                  <Styles.SelectItem
                    key={city}
                    onClick={() => handleCityClick(city)}
                  >
                    {city}
                  </Styles.SelectItem>
                ))}
              </Styles.SelectItemWrapper>
            </Styles.Scroll>
          </Styles.InputWrapper>
        );
      }}
    </Field>
  );
};

export default SelectedInputField;
