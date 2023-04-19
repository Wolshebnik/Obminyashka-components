import { convertToMB } from 'utils';

export const checkFileSize = (files: File[], maxSizeMB: number) => {
  const size = files.find((file) => file.size >= maxSizeMB * 1024 * 1024)?.size;
  const { value, valueString } = convertToMB(size ? size : 0);

  return { isWrongSize: value > maxSizeMB, sizeString: valueString };
};

export const fileComparison = <T extends File>(values: T[], files: T[]) => {
  const allFiles = [...values, ...files];
  const fileNames = allFiles.map((file) => ({
    size: file.size,
    name: file.name,
  }));

  for (let i = 0; i < fileNames.length; i++) {
    for (let j = i + 1; j < fileNames.length; j++) {
      if (
        fileNames[i].size === fileNames[j].size ||
        fileNames[i].name === fileNames[j].name
      ) {
        return false;
      }
    }
  }
  return true;
};
