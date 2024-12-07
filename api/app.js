// Importamos la librería Express para crear la aplicación
const express = require("express");

// Creamos una instancia de la aplicación Express
const app = express();

// Importamos el router de usuarios
const userRouter = require("./routes/userRouter");

// Habilitamos el parsing de JSON en las solicitudes
app.use(express.json());

// Definimos el endpoint para los usuarios
app.use("/users", userRouter);

// Iniciamos el servidor y lo configuramos para escuchar en el puerto 3000
app.listen(3000, () => {
  // Mostramos un mensaje en la consola cuando el servidor esté escuchando
  console.log("Servidor escuchando en el puerto 3000");
});
