const SI_UNITS_OF_DATA = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
const IEC_UNITS_OF_DATA = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

const numberFormatter = new Intl.NumberFormat('en-US');
/** Read more about units of data — https://en.wikipedia.org/wiki/Byte#Multiple-byte_units */
const formatBytes = (bytes: number, countByIEC = false): string => {
  let rank = 0;

  if (bytes > 0) {
    rank = Math.floor(countByIEC ? Math.log2(bytes) / 10 : Math.log10(bytes) / 3);
  }

  const count = bytes / (countByIEC ? 1024 : 1000) ** rank;

  return `${numberFormatter.format(count)}\xA0${(countByIEC ? IEC_UNITS_OF_DATA : SI_UNITS_OF_DATA)[rank]}`;
};

export default formatBytes;
