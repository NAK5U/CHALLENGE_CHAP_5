const pasport = (req, res, next) => {
  const error = {
    status: "fail",
    message: null,
  };
  // LOGIN USER STATIC USE :
  // user : admin@admin
  // pass : admin
  const { email, password } = req.body;
  if (email === "admin@admin") {
    if (password === "admin") {
      next();
    } else {
      error.message = "password tidak terdaftar pada data ";
      res.status(401).json(error);
    }
  } else {
    error.message = "username tidak ada dalam data ";
    res.status(401).json(error);
  }
};

module.exports = pasport;
