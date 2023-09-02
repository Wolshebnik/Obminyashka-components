/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import * as Styles from './styles';
import { ICityData } from './types';
import { ISelectedInput } from './types';
import { Field, FieldProps } from 'formik';

const SelectedInputField = ({
  name,
  getCities,
  placeholder,
  containerName,
}: ISelectedInput) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Field name={name}>
      {({ form, field: { value } }: FieldProps) => {
        const [filteredCities, setFilteredCities] = useState<ICityData[]>();

        const onFocus = () => {
          setIsOpen(true);
        };

        const onBlur = () => {
          setIsOpen(false);
        };

        const onClick = (id: string, city: string) => {
          form.setFieldValue(name, { ...value, id: id, inputValue: city });
        };

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          form.setFieldValue(name, {
            ...value,
            id: '',
            inputValue: e.target.value,
          });

          if (containerName) {
            form.setFieldValue(containerName, {
              id: '',
              location: [],
              inputValue: '',
            });
          }
        };

        const setData = async () => {
          if (!getCities || !containerName) return;

          try {
            setIsLoading(true);

            const response = await getCities(value.id);

            form.setFieldValue(containerName, {
              ...form.values.city,
              location: response,
            });
          } catch (e) {
            console.log(e);
          } finally {
            setIsLoading(false);
          }
        };

        console.log(isLoading);

        useEffect(() => {
          if (value.inputValue.trim() === '') {
            setFilteredCities(value.location);
          }

          setFilteredCities(value.location);

          if (value.id && getCities) {
            setData();
          }

          if (value.inputValue.trim() !== '') {
            const filtered = value.location?.length
              ? value.location.filter((city: ICityData) =>
                  city.name
                    .toLowerCase()
                    .startsWith(value.inputValue.toLowerCase())
                )
              : [];
            setFilteredCities(filtered);
          }
        }, [value.inputValue, value.id, value.location]);

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
              value={value.inputValue}
              placeholder={placeholder}
              disabled={!value.location?.length}
            />

            <Styles.Scroll open={isOpen}>
              <Styles.SelectItemWrapper open={isOpen}>
                {filteredCities?.map((city) => (
                  <Styles.SelectItem
                    key={city.id + city.name}
                    onClick={() => onClick(city.id, city.name)}
                  >
                    {city.name}
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
