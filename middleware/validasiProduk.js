module.exports = (req, res, next) => {
    const { judul, penulis, tahun } = req.body;

    if (!judul || !penulis || !tahun) {
        return res.status(400).json({
            massage: "judul, penulis dan tahun wajib diisi"
        });
    }

    next()
};