const sendError = (err, res) => {
  res.status(err.statusCode).json({
    message: err.message,
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Unknown Error";
  sendError(err, res);
};
