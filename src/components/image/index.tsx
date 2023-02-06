import { useState } from 'react';

import * as Icon from '../icon';

import * as Styles from './styles';
import { ImageProps } from './types';

const Image = ({ width = 30, height = 28, source }: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Styles.AvatarBlock
      style={{
        height,
        width,
      }}
    >
      <Styles.Image
        alt="avatar"
        src={source}
        width={width}
        height={height}
        isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />

      {isLoading && <Icon.Loader width={width} height={height} />}
    </Styles.AvatarBlock>
  );
};

export { Image };
