function notFoundError(req, res, next) {
  return res.send({
    statusCode: 404,
    message: `Route with ${req.url} not found !`,
  });
}
module.exports = notFoundError;
