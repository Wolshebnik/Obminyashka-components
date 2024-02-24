/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import * as Styles from './styles';
import { ILocation } from './types';
import { ISelectedInput } from './types';

const Location = ({
  name,
  cities,
  regions,
  placeholder,
  setLocationId,
}: ISelectedInput) => {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<ILocation[]>([]);
  const [filteredLocation, setFilteredLocation] = useState<ILocation[]>([]);

  useEffect(() => {
    if (name === 'region' && regions) {
      setLocation(regions);
    }

    if (name === 'city' && cities) {
      setLocation(cities);
    }
  }, [cities]);

  useEffect(() => {
    if (value.trim() === '') {
      setFilteredLocation(location);
      if (setLocationId) {
        setLocationId('');
      }
    }

    setFilteredLocation(location);

    if (value.trim() !== '') {
      const filtered = location?.length
        ? location.filter((loc) =>
            loc.name.toLowerCase().startsWith(value.toLowerCase())
          )
        : [];
      setFilteredLocation(filtered);
    }
  }, [value, location]);

  const onFocus = () => {
    setIsOpen(true);
  };

  const onBlur = () => {
    const isLocationIncluded = location.find((loc) => loc.name === value);

    if (!isLocationIncluded) {
      setValue('');
    }

    setIsOpen(false);
  };

  const onClick = (locName: string, locId: string) => {
    if (setLocationId && location.find((loc) => loc.name === locName)) {
      setLocationId(locId);
    }

    setValue(locName);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (setLocationId) {
      location.find((loc) => {
        if (loc.name === e.target.value) {
          setLocationId(loc.id);
        }
      });
    }
  };

  // console.log(name === 'city' && 'location', location);

  return (
    <>
      <Styles.InputWrapper open={isOpen}>
        <Styles.SelectInput
          type="text"
          name={name}
          value={value}
          open={isOpen}
          onBlur={onBlur}
          onFocus={onFocus}
          autoComplete="off"
          onChange={onChange}
          placeholder={placeholder}
          disabled={name === 'city' && !location.length}
        />

        <Styles.Scroll open={isOpen}>
          <Styles.SelectItemWrapper open={isOpen}>
            {filteredLocation?.map((loc) => (
              <Styles.SelectItem
                key={loc.id + loc.name}
                onClick={() => onClick(loc.name, loc.id)}
              >
                {loc.name}
              </Styles.SelectItem>
            ))}
          </Styles.SelectItemWrapper>
        </Styles.Scroll>
      </Styles.InputWrapper>
    </>
  );
};

export default Location;
