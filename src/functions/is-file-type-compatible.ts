/** Read more about accept — https://www.w3schools.com/TAGS/att_input_accept.asp */
const isFileTypeCompatible = ({ name, type }: File, accept: string): boolean => {
  if (!accept) {
    return true;
  }

  const [typeExcludingParams] = type.split(';');
  const acceptableTypes = accept.replace(/\s+/g, '').toLowerCase()
    .split(',');

  return acceptableTypes.some((acceptableType) => {
    // check the extension
    if (acceptableType.startsWith('.')) {
      const extension = name.toLowerCase().substring(name.lastIndexOf('.'));
      return extension === acceptableType;
    }

    // check the main type
    if (acceptableType.includes('*')) {
      return typeExcludingParams.startsWith(acceptableType.replace('*', ''));
    }

    return typeExcludingParams === acceptableType;
  });
};

export default isFileTypeCompatible;
