module.exports = (req, res, next) => {
    const token = req.headers.token;

    if (token !== "admin123") {
        return res.status(403).json({
            message: "Akses ditolak. token tidak valid."
        });
    }

    next();
}