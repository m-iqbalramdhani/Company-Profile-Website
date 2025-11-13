const pool = require('../config/db');

module.exports = {
  // GET semua riwayat
  // GET semua riwayat
getAll: async (req, res, next) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        r.id_riwayat,
        r.id_personil,
        r.jenis_personil,
        r.keterangan,
        r.tahun,
        p.nama,
        p.perusahaan,
        p.no_hp,
        p.email
      FROM riwayat_pelatihan r 
      JOIN personil p ON r.id_personil = p.id_personil
      ORDER BY r.tahun DESC
    `);
    res.json(rows);
  } catch (err) {
    next(err);
    console.error('Error saat mengambil data riwayat:', err);
  }
},

// GET by id_personil
getByPersonil: async (req, res, next) => {
  try {
    const { id_personil } = req.params;
    const [rows] = await pool.execute(`
      SELECT 
        r.id_riwayat,
        r.id_personil,
        r.jenis_personil,
        r.keterangan,
        r.tahun,
        p.nama,
        p.perusahaan,
        p.no_hp,
        p.email
      FROM riwayat_pelatihan r 
      JOIN personil p ON r.id_personil = p.id_personil
      WHERE p.id_personil = ?
      ORDER BY r.tahun DESC
    `, [id_personil]);
    res.json(rows);
  } catch (err) { next(err); }
},

  // CREATE
  create: async (req, res, next) => {
    try {
      const { id_personil, jenis_personil, keterangan, tahun } = req.body;

      const [result] = await pool.execute(
        `INSERT INTO riwayat_pelatihan (id_personil, jenis_personil, keterangan, tahun)
         VALUES (?, ?, ?, ?)`,
        [id_personil, jenis_personil, keterangan, tahun]
      );

      res.status(201).json({ id_riwayat: result.insertId, ...req.body });
    } catch (err) { next(err); }
  },

  // UPDATE
  update: async (req, res, next) => {
    try {
      const { id_riwayat } = req.params;
      const { jenis_personil, keterangan, tahun } = req.body;

      const [result] = await pool.execute(
        `UPDATE riwayat_pelatihan SET jenis_personil=?, keterangan=?, tahun=? WHERE id_riwayat=?`,
        [jenis_personil, keterangan, tahun, id_riwayat]
      );

      if (!result.affectedRows) return res.status(404).json({ message: 'Riwayat tidak ditemukan' });
      res.json({ message: 'Riwayat pelatihan diperbarui' });
    } catch (err) { next(err); }
  },

  // DELETE
  remove: async (req, res, next) => {
    try {
      const { id_riwayat } = req.params;
      const [result] = await pool.execute('DELETE FROM riwayat_pelatihan WHERE id_riwayat=?', [id_riwayat]);
      if (!result.affectedRows) return res.status(404).json({ message: 'Data riwayat tidak ditemukan' });
      res.json({ message: 'Data riwayat pelatihan dihapus' });
    } catch (err) { next(err); }
  },
};
