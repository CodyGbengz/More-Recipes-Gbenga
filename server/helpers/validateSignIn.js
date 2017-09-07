const validateSignIn = (req, res, next) => {
  if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email) || !req.body.email) {
    return res.status(401).send({
      message: 'Please enter a valid email'
    });
  } else if (!/\w{8,12}$/.test(req.body.password) || !req.body.password) {
    return res.status(401).send({
      message: 'Please Enter a password with atleast 8 characters'
    });
  }
  next();
};

export default validateSignIn;
