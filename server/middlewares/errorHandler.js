module.exports = (err, req, res, next) => {
  if (err.name === 'CustomError') {
    res.status(err.status).json({ error: err.error });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({ error: err });
  } else if (err.name === 'SequelizeValidationError') {
    res.status(400).json({ error: err });
  } else {
    res.status(500).json({ error: err });
  }
}