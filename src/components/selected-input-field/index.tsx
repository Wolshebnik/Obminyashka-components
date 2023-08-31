import React, { useEffect, useState } from 'react';

import { cities } from './mock';
import * as Styles from './styles';
import { ISelectedInput } from './types';
import { Field, FieldProps } from 'formik';

const SelectedInputField = ({ name, placeholder }: ISelectedInput) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredCities, setFilteredCities] = useState<string[]>(cities);

  return (
    <Field name={name}>
      {({ form, field: { value } }: FieldProps) => {
        const onFocus = () => {
          setIsOpen(!isOpen);

          if (value.regionInput === '') {
            setFilteredCities(cities);
          }
        };

        const onBlur = () => {
          setIsOpen(false);
        };

        const onClick = (city: string) => {
          form.setFieldValue(name, { region: city, regionInput: city });
        };

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          form.setFieldValue(name, { region: '', regionInput: e.target.value });
        };

        useEffect(() => {
          if (value.regionInput.trim() === '') {
            setFilteredCities(cities);
          }

          if (value.regionInput.trim() !== '') {
            const filtered = cities.filter((city) =>
              city.toLowerCase().startsWith(value.regionInput.toLowerCase())
            );
            setFilteredCities(filtered);
          }
        }, [value.regionInput]);

        return (
          <Styles.InputWrapper open={isOpen}>
            <Styles.SelectInput
              type="text"
              name={name}
              open={isOpen}
              onBlur={onBlur}
              onFocus={onFocus}
              autoComplete="off"
              onChange={onChange}
              value={value.regionInput}
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
