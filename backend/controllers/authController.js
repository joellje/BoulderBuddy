const catchAsync = require("../utils/catchAsync");

exports.getAuthPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Index Page");
});
