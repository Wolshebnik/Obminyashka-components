const regExtension = /(jpeg|jpg|png|gif)$/;

export const convertToMB = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (!bytes) return { value: 0, valueString: '0 bytes' };
  const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`, 10);

  return {
    value: +(bytes / 1024 ** i).toFixed(2),
    valueString: `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`,
  };
};

export const options = {
  maxSizeMB: 10,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
  maxIteration: 10,
};

export const isRightExtension = (type: string) => {
  return regExtension.test(type.replace('image/', ''));
};
