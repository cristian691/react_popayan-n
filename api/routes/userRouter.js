// Este archivo define las rutas para acceder a los recursos relacionados con los usuarios

// Importamos la librería Express para crear las rutas
const express = require("express");
const router = express.Router();

// Creamos un array de usuarios
const users = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    password: "juan123",
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria.garcia@example.com",
    password: "maria123",
  },
  {
    id: 3,
    nombre: "Carlos López",
    email: "carlos.lopez@example.com",
    password: "carlos123",
  },
];

// Importamos las funciones para manejar las solicitudes y respuestas relacionadas con los usuarios
const { createUser, getUser } = require("../controllers/UserController");

// Ruta para crear un nuevo usuario
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
  };
  users.push(newUser);
  res.json(newUser);
});

// Ruta para obtener un usuario por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

// Ruta para obtener todos los usuarios
router.get("/", (req, res) => {
  res.json(users);
});

// Exportamos la ruta para que pueda ser utilizada en otros archivos
module.exports = router;
