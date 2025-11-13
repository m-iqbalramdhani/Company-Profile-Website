module.exports = {
  validateCreate: (req, res, next) => {
    const { nama } = req.body;
    const errors = [];

    if (!nama || typeof nama !== 'string' || nama.trim().length < 2) {
      errors.push('Nama wajib diisi (min. 2 karakter)');
    }

    if (errors.length) return res.status(400).json({ errors });
    next();
  },

  validateUpdate: (req, res, next) => {
    const { nama } = req.body;
    const errors = [];

    if (nama && (typeof nama !== 'string' || nama.trim().length < 2)) {
      errors.push('Nama minimal 2 karakter');
    }

    if (errors.length) return res.status(400).json({ errors });
    next();
  },
};


//Riwa