export const includes = ({
  arr,
  objectCheck,
}: {
  arr: object[];
  objectCheck: object;
}) => arr.some((obj) => JSON.stringify(obj) === JSON.stringify(objectCheck));
