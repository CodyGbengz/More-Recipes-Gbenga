const checkParams = (param) => {
  if (isNaN(param)) {
    return false;
  }
  return true;
};

export default checkParams;
