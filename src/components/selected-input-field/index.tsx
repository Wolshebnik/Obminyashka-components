/* eslint-disable no-console */
import React, { useState } from 'react';

import { cities } from './mock';
import * as Styles from './styles';
import { Field, FieldProps } from 'formik';

export interface ISelectedInput {
  name: string;
  placeholder: string;
}

const SelectedInputField = ({ name, placeholder }: ISelectedInput) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredCities, setFilteredCities] = useState<string[]>(cities);

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const onFocus = () => {
          setIsOpen(!isOpen);

          if (field.value.length === 0) {
            setFilteredCities(cities);
          }
        };

        const onBlur = () => {
          setIsOpen(false);

          if (!filteredCities.includes(field.value)) {
            form.setFieldValue(name, '');
          }
        };

        const onClick = (city: string) => {
          form.setFieldValue(name, city);
        };

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const initialValue = e.target.value;
          form.setFieldValue(name, initialValue);

          if (initialValue.trim() !== '') {
            const filtered = cities.filter((city) =>
              city.toLowerCase().startsWith(initialValue.toLowerCase())
            );
            setFilteredCities(filtered);
          } else {
            setFilteredCities(cities);
          }
        };

        console.log(field.value);

        return (
          <Styles.InputWrapper open={isOpen}>
            <Styles.SelectInput
              type="text"
              name={name}
              open={isOpen}
              onBlur={onBlur}
              onFocus={onFocus}
              value={field.value}
              onChange={onChange}
              placeholder={placeholder}
            />

            <Styles.Scroll open={isOpen}>
              <Styles.SelectItemWrapper open={isOpen}>
                {filteredCities.map((city) => (
                  <Styles.SelectItem key={city} onClick={() => onClick(city)}>
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
