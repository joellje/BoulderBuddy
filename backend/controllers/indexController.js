const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getIndexPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Index Page");
});
