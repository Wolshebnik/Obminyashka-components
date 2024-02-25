/* eslint-disable no-console */
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from 'hooks';
import { CheckBox } from 'components/checkbox';

import { includes } from './helpers';
import { ISelectOption, ISelectProps } from './type';

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
  saveOnClose,
  notCheckbox,
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

  console.log(filtrationValue);

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
      setChosenOptions(chosenOptions.filter((el) => el.value !== option.value));
    }

    if (!include) {
      setChosenOptions([...chosenOptions, option]);
    }
  };

  const onChangeFiltration = (e: ChangeEvent<HTMLInputElement>) => {
    setFiltrationValue(e.target.value);
  };

  const onBlur = () => {
    const matchesOption = chosenOptions.filter(
      ({ text }) => text === filtrationValue
    )[0];

    if (matchesOption) {
      setFiltrationValue(matchesOption.text);
      setChosenOptions([matchesOption]);
    }

    if (!matchesOption) {
      setFiltrationValue('');
      setChosenOptions([]);
    }

    setIsOpen(false);
  };

  useOutsideClick(onBlur, ref);

  useEffect(() => {
    if (isOpen || isActive) {
      onChange({ value: value ? value : '', chosenOptions: chosenOptions });
    }

    if (
      (setIsActive && !isActive && !saveOnClose) ||
      (!isOpen && !setIsActive && !saveOnClose)
    ) {
      onChange({ value: '', chosenOptions: [] });
      setFiltrationValue('');
    }

    if (
      //TODO изминить логику при первой загрузки не должно сетать значение
      (setIsActive && !isActive && saveOnClose) ||
      (!isOpen && !setIsActive && saveOnClose)
    ) {
      onChange({ value: value || '', chosenOptions: [...chosenOptions] });
      setFiltrationValue(filtrationValue);
    }
  }, [isOpen, isActive, chosenOptions]);

  return (
    <Styles.Wrapper ref={ref} isOpen={isOpenOptions} filtration={filtration}>
      <Styles.TitleContainer>
        <Styles.Title
          type="text"
          disabled={disabled}
          placeholder={title}
          isOpen={isOpenOptions}
          readOnly={!filtration}
          filtration={filtration}
          onClick={() => (!filtration ? setOpen() : null)}
          value={filtration ? filtrationValue : title}
          onFocus={() => (!filtration ? null : setIsOpen(true))}
          onChange={(e) => (filtration ? onChangeFiltration(e) : null)}
        />

        {isLoading && (
          <Styles.LoaderContainer>
            <Styles.LoaderCircle />
          </Styles.LoaderContainer>
        )}

        {!filtration && <Styles.Triangle isOpen={isOpenOptions} />}
      </Styles.TitleContainer>

      {isOpenOptions && (
        <Styles.ScrollWrapper filtration={filtration}>
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
                  <p onClick={() => setOptions(option)}>
                    {option.text}

                    <Styles.Cross />
                  </p>
                )}

                {filtration && (
                  <p onClick={() => setOptions(option)}>{option.text}</p>
                )}
              </Styles.SubCategory>
            ))}
          </Styles.SubCategories>
        </Styles.ScrollWrapper>
      )}
    </Styles.Wrapper>
  );
};
