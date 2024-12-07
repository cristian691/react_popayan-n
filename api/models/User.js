// Este archivo define el modelo de datos para los usuarios

// Importamos la librería Mongoose para interactuar con la base de datos
const mongoose = require("mongoose");

// Definimos la estructura de datos para los usuarios
const userSchema = new mongoose.Schema({
  // El nombre del usuario
  name: {
    type: String,
    required: true,
  },
  // El email del usuario
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // La contraseña del usuario
  password: {
    type: String,
    required: true,
  },
});

// Creamos el modelo de datos para los usuarios
const User = mongoose.model("User", userSchema);

// Exportamos el modelo de datos para que pueda ser utilizado en otros archivos
module.exports = User;
