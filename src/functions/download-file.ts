const downloadFile = (blob: Blob, fileName: string): void => {
  const link = document.createElement('a');
  const href = URL.createObjectURL(blob);

  link.href = href;
  link.download = fileName;

  link.click();
  URL.revokeObjectURL(href);
};

export default downloadFile;
