const express = require('express');
const UserModel = require('../models/UserModel');

const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  UserModel.create({ name, email, password }, (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'El correo ya está registrado' });
      }
      return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  });
});

router.post('/recover', (req, res) => {
  const { email } = req.body;
  UserModel.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: 'Correo no encontrado' });
    }
    res.status(200).json({ message: 'Correo encontrado. Recuperación en proceso.' });
  });
});

module.exports = router;
