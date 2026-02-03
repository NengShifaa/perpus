const jamAkses = (req, res, next) => {
  const jam = new Date().getHours();

  if (jam < 8 || jam >= 18) {
    return res.status(403).json({
      message: "API hanya bisa diakses pukul 08.00 - 18.00",
    });
  }

  next();
};

module.exports = jamAkses;
