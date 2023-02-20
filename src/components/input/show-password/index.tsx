import { useMemo, useState } from 'react';

import * as Icon from 'components/icon/index';
import { ShowPasswordType } from 'components/input/types';

import { WrapIcon } from './styles';

export { showPassword };

const showPassword = (
  isPassword: boolean,
  topPosition?: string
): ShowPasswordType => {
  const [isShow, setIsShow] = useState(isPassword);

  const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

  const Component = (
    <WrapIcon onClick={() => setIsShow(!isShow)} topPosition={topPosition}>
      {isShow ? <Icon.Eye /> : <Icon.EyeOff />}
    </WrapIcon>
  );

  return {
    component: Component,
    currentType,
  };
};
