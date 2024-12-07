const admin = require('firebase-admin');

// Inicializar Firebase con el archivo de clave privada (descargar desde la consola de Firebase)
const serviceAccount = require('./ruta/a/tu/clave-privada.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<tu-proyecto>.firebaseio.com', // Cambia <tu-proyecto> por el ID de tu proyecto Firebase
});

const db = admin.firestore(); // Base de datos Firestore

module.exports = db;
