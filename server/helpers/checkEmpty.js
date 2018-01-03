/**
 * @description check if str value is empty
 * @param {*} str 
 * @returns {boolean} true or false 
 */
const checkEmpty = (str) => {
  if (/^[ ]+$/.test(str)) return true;
  return false;
};

export default checkEmpty;
