module.exports = {
  validateCreate: (req, res, next) => {
    const { id_personil, jenis_personil, tahun } = req.body;
    const errors = [];

    if (!id_personil) errors.push('id_personil wajib diisi');
    if (!jenis_personil || jenis_personil.trim().length < 2) errors.push('jenis_personil minimal 2 karakter');
    if (!tahun || tahun < 1900) errors.push('tahun tidak valid');

    if (errors.length) return res.status(400).json({ errors });
    next();
  }
};
