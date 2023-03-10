import { useMemo, useState } from 'react';

import * as Icon from 'components/icon/index';
import { ShowPasswordType } from 'components/input/types';

import { WrapIcon } from './styles';

const showPassword = (isPassword: boolean): ShowPasswordType => {
  const [isShow, setIsShow] = useState(isPassword);

  const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

  const Component = (
    <WrapIcon onClick={() => setIsShow(!isShow)}>
      {isShow ? <Icon.Eye /> : <Icon.EyeOff />}
    </WrapIcon>
  );

  return {
    component: Component,
    currentType,
  };
};

export { showPassword };
