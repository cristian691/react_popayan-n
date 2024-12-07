// Este archivo define las funciones para manejar las solicitudes y respuestas relacionadas con los usuarios

// Importamos el modelo de datos para los usuarios
const User = require("../models/User");

// Función para crear un nuevo usuario
const createUser = async (req, res) => {
  // Creamos un nuevo usuario con los datos proporcionados en la solicitud
  const user = new User(req.body);
  // Guardamos el usuario en la base de datos
  await user.save();
  // Enviamos una respuesta con el usuario creado
  res.send(user);
};

// Función para obtener un usuario por ID
const getUser = async (req, res) => {
  // Obtenemos el ID del usuario de la solicitud
  const id = req.params.id;
  // Buscamos el usuario en la base de datos
  const user = await User.findById(id);
  // Enviamos una respuesta con el usuario encontrado
  res.send(user);
};

// Exportamos las funciones para que puedan ser utilizadas en otros archivos
module.exports = { createUser, getUser };
