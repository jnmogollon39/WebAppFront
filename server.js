const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Servir los archivos estáticos del build
app.use(express.static(path.join(__dirname, 'build')));

// Todas las rutas deben devolver index.html (para React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

console.log('Express cargado:', require.resolve('express'));