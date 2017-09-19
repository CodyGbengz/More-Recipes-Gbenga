const checkEmpty = (str) => {
  if (/^[ ]+$/.test(str)) return true;
  return false;
};

export default checkEmpty;
