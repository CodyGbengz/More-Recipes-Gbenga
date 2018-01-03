/** 
 * @description Check if params is an integer
 * @param {*} params
 * @returns {boolean} true or false  
 */
const checkParams = (params) => {
  if (isNaN(params)) return false;
  return true;
};

export default checkParams;
