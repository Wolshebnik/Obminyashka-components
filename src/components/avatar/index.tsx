import { useEffect, useState } from 'react';

import * as Icon from '../icon';

import { Image } from '../image';
import { AvatarProps } from './types';

const string: string = 'data:image/jpeg;base64,';

const Avatar = ({ width = 30, height = 28, source }: AvatarProps) => {
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!source?.includes(string) && source) {
      setImage(`${string}${source}`);
    }

    if (source?.includes(string) && source) {
      setImage(source);
    }

    if (!source) setImage(undefined);
  }, [source]);

  if (!source) {
    return <Icon.Avatar width={width} height={height} />;
  }

  return <Image source={image} width={width} height={height} />;
};

export { Avatar };
