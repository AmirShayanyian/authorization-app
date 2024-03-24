function errorHandler(err, req, res, next) {
  const statusCode = err?.status ?? err?.statusCode ?? 500;
  const message = err?.message ?? 'internalServerError';
  return res.send({
    statusCode,
    message,
  });
}
module.exports = errorHandler;
