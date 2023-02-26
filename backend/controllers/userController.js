const catchAsync = require("../utils/catchAsync");

exports.getUserPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Index Page");
});
