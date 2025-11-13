const pool = require('../config/db');

module.exports = {
  // GET semua data hasil join personil + riwayat
  getAllJoined: async (req, res, next) => {
    try {
      const sql = `
        SELECT 
          p.id_personil,
          p.nama,
          p.perusahaan,
          GROUP_CONCAT(DISTINCT r.jenis_personil ORDER BY r.tahun SEPARATOR '||') AS jenis_personil,
          GROUP_CONCAT(DISTINCT r.keterangan ORDER BY r.tahun SEPARATOR '||') AS keterangan
        FROM personil p
        LEFT JOIN riwayat_pelatihan r ON p.id_personil = r.id_personil
        GROUP BY p.id_personil, p.nama, p.perusahaan
        ORDER BY p.nama ASC;
      `;

      const [rows] = await pool.execute(sql);

      // ubah string '||' jadi array
      const formatted = rows.map(r => ({
        nama: r.nama,
        perusahaan: r.perusahaan,
        jenis_personil: r.jenis_personil ? r.jenis_personil.split('||') : [],
        keterangan: r.keterangan ? r.keterangan.split('||') : []
      }));

      res.json(formatted);
    } catch (err) {
      next(err);
    }
  },

  // GET by id_personil
  getById: async (req, res, next) => {
    try {
      const { id_personil } = req.params;

      const sql = `
        SELECT 
          p.id_personil,
          p.nama,
          p.perusahaan,
          GROUP_CONCAT(DISTINCT r.jenis_personil ORDER BY r.tahun SEPARATOR '||') AS jenis_personil,
          GROUP_CONCAT(DISTINCT r.keterangan ORDER BY r.tahun SEPARATOR '||') AS keterangan
        FROM personil p
        LEFT JOIN riwayat_pelatihan r ON p.id_personil = r.id_personil
        WHERE p.id_personil = ?
        GROUP BY p.id_personil, p.nama, p.perusahaan;
      `;

      const [rows] = await pool.execute(sql, [id_personil]);

      if (rows.length === 0)
        return res.status(404).json({ message: 'Personil tidak ditemukan' });

      const r = rows[0];
      res.json({
        nama: r.nama,
        perusahaan: r.perusahaan,
        jenis_personil: r.jenis_personil ? r.jenis_personil.split('||') : [],
        keterangan: r.keterangan ? r.keterangan.split('||') : []
      });
    } catch (err) {
      next(err);
    }
  }
};