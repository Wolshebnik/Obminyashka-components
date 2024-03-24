/* eslint-disable no-console */
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from 'hooks';
import { CheckBox } from 'components/checkbox';

import { includes } from './helpers';
import { ISelectOption, ISelectProps } from './types';

import * as Styles from './styles';

export const Select = ({
  value,
  title,
  options,
  multiple,
  isActive,
  disabled,
  onChange,
  isLoading,
  filtration,
  setIsActive,
  notCheckbox,
  deleteOnClose,
  paramsFilteredOptions,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosenOptions, setChosenOptions] = useState<ISelectOption[] | []>([]);
  const [filtrationValue, setFiltrationValue] = useState<string>('');

  const isDisabled = isLoading || disabled || !options?.length;
  const isOpenOptions = !isDisabled && (isActive || isOpen);
  const isEmptyFiltrationValue = !filtrationValue.trim().length;
  const filtered = options?.filter(
    (el) =>
      isEmptyFiltrationValue ||
      el.text.toLowerCase().startsWith(filtrationValue.toLowerCase())
  );

  const ref = useRef<HTMLDivElement | null>(null);

  const setOpen = () => {
    if (isDisabled) {
      return;
    }

    if (setIsActive) {
      setIsActive();
      return;
    }

    setIsOpen(!isOpen);
  };

  const setOptions = (option: ISelectOption) => {
    const include = includes({ arr: chosenOptions, objectCheck: option });

    if (filtration) {
      setChosenOptions([option]);
      setFiltrationValue(option.text);
      setIsOpen(false);
      return;
    }

    if (!multiple) {
      setChosenOptions([option]);
      return;
    }

    if (include) {
      setChosenOptions(chosenOptions.filter((el) => el.text !== option.text));
    }

    if (!include) {
      setChosenOptions([...chosenOptions, option]);
    }
  };

  const onChangeFiltration = (e: ChangeEvent<HTMLInputElement>) => {
    setFiltrationValue(e.target.value);
  };

  const onBlur = () => {
    if (filtration) {
      const matchesOption = chosenOptions.filter(
        ({ text }) => text === filtrationValue
      )[0];

      if (matchesOption) {
        setFiltrationValue(matchesOption.text);
        setChosenOptions([matchesOption]);
        onChange({
          value: value ? value : '',
          chosenOptions: chosenOptions,
        });
      }

      if (!matchesOption && chosenOptions.length) {
        setFiltrationValue('');
        setChosenOptions([]);
        onChange({
          value: '',
          chosenOptions: [],
        });
      }

      setIsOpen(false);
    }

    if (!notCheckbox && multiple) {
      if (disabled && chosenOptions.length) {
        setChosenOptions([]);
      }
    }

    if (isActive || isOpen) {
      return;
    }

    if (deleteOnClose && chosenOptions.length && (!isActive || !isOpen)) {
      setChosenOptions([]);
    }
  };

  useOutsideClick(onBlur, ref);

  useEffect(() => {
    if ((isOpen || isActive) && !disabled) {
      onChange({
        value: value ? value : '',
        chosenOptions: chosenOptions,
      });
    }
  }, [chosenOptions, isActive, isOpen]);

  useEffect(() => {
    if (paramsFilteredOptions && notCheckbox) {
      setChosenOptions(paramsFilteredOptions);
    }

    if (paramsFilteredOptions && !notCheckbox) {
      setIsOpen(true);

      setChosenOptions(paramsFilteredOptions);
      console.log(paramsFilteredOptions);
    }
  }, []);

  console.log(chosenOptions);

  return (
    <Styles.Wrapper ref={ref} isOpen={isOpenOptions} filtration={filtration}>
      <Styles.TitleContainer>
        <Styles.Title
          type="text"
          placeholder={title}
          disabled={isDisabled}
          isOpen={isOpenOptions}
          readOnly={!filtration}
          filtration={filtration}
          value={filtration ? filtrationValue : title}
          onClick={() => (!filtration ? setOpen() : null)}
          onFocus={() => (!filtration ? null : setIsOpen(true))}
          onChange={(e) => (filtration ? onChangeFiltration(e) : null)}
        />

        {filtration && isLoading && (
          <Styles.LoaderContainer>
            <Styles.LoaderCircle />
          </Styles.LoaderContainer>
        )}

        {!filtration && <Styles.Triangle isOpen={isOpenOptions} />}
      </Styles.TitleContainer>

      <Styles.ScrollWrapper isOpen={isOpenOptions} filtration={filtration}>
        <Styles.SubCategories isOpen={isOpenOptions} filtration={filtration}>
          {filtered?.map((option, idx) => (
            <Styles.SubCategory
              filtration={filtration}
              notCheckbox={notCheckbox}
              key={`select-${idx}-${option.value}`}
              isCheck={includes({
                arr: chosenOptions,
                objectCheck: option,
              })}
            >
              {!filtration && !notCheckbox && (
                <CheckBox
                  name={option.text}
                  text={option.text}
                  onChange={() => setOptions(option)}
                  type={multiple ? 'checkbox' : 'radio'}
                  checked={includes({
                    arr: chosenOptions,
                    objectCheck: option,
                  })}
                />
              )}

              {!filtration && notCheckbox && (
                <Styles.OptionText onClick={() => setOptions(option)}>
                  {option.text}

                  <Styles.Cross />
                </Styles.OptionText>
              )}

              {filtration && (
                <Styles.OptionText onClick={() => setOptions(option)}>
                  {option.text}
                </Styles.OptionText>
              )}
            </Styles.SubCategory>
          ))}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </Styles.Wrapper>
  );
};
