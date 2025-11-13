const pool = require('../config/db');

module.exports = {
  // GET semua personil
  getAll: async (req, res, next) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM personil ORDER BY id_personil DESC');
      res.json(rows);
    } catch (err) { next(err); }
  },

  // GET by ID
  getById: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id_personil, 10);
      const [rows] = await pool.execute('SELECT * FROM personil WHERE id_personil = ?', [id]);
      if (!rows.length) return res.status(404).json({ message: 'Personil tidak ditemukan' });
      res.json(rows[0]);
    } catch (err) { next(err); }
  },

  // CREATE personil baru
  create: async (req, res, next) => {
    try {
      const { nama, perusahaan, alamat_perusahaan, tlp_perusahaan, no_hp, email, alamat_rumah } = req.body;

      const [result] = await pool.execute(
        `INSERT INTO personil (nama, perusahaan, alamat_perusahaan, tlp_perusahaan, no_hp, email, alamat_rumah)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [nama, perusahaan, alamat_perusahaan, tlp_perusahaan, no_hp, email, alamat_rumah]
      );

      res.status(201).json({ id_personil: result.insertId, ...req.body });
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Nama personil sudah ada (unik)' });
      } else next(err);
    }
  },

  // UPDATE
  update: async (req, res, next) => {
    try {
      const { id_personil } = req.params;
      const fields = [];
      const values = [];
      const updatable = ['nama', 'perusahaan', 'alamat_perusahaan', 'tlp_perusahaan', 'no_hp', 'email', 'alamat_rumah'];

      updatable.forEach(f => {
        if (req.body[f] !== undefined) {
          fields.push(`${f} = ?`);
          values.push(req.body[f]);
        }
      });

      if (fields.length === 0) return res.status(400).json({ message: 'Tidak ada data untuk diupdate' });

      values.push(id_personil);
      const sql = `UPDATE personil SET ${fields.join(', ')} WHERE id_personil = ?`;
      const [result] = await pool.execute(sql, values);

      if (!result.affectedRows) return res.status(404).json({ message: 'Personil tidak ditemukan' });
      res.json({ message: 'Data personil diperbarui' });
    } catch (err) { next(err); }
  },

  // DELETE
  remove: async (req, res, next) => {
    try {
      const { id_personil } = req.params;
      const [result] = await pool.execute('DELETE FROM personil WHERE id_personil = ?', [id_personil]);
      if (!result.affectedRows) return res.status(404).json({ message: 'Personil tidak ditemukan' });
      res.json({ message: 'Personil dihapus beserta riwayat pelatihannya' });
    } catch (err) { next(err); }
  },

  // SEARCH
  search: async (req, res, next) => {
    try {
      const { nama, perusahaan, no_hp } = req.query;
      let conditions = [];
      let values = [];

      if (nama) { conditions.push('nama LIKE ?'); values.push(`%${nama}%`); }
      if (perusahaan) { conditions.push('perusahaan LIKE ?'); values.push(`%${perusahaan}%`); }
      if (no_hp) { conditions.push('no_hp LIKE ?'); values.push(`%${no_hp}%`); }

      let sql = 'SELECT * FROM personil';
      if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');

      const [rows] = await pool.execute(sql, values);
      res.json(rows);
    } catch (err) { next(err); }
  },
};
