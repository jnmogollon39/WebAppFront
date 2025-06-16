import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://intgrfunction.azurewebsites.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nombre })
      });

      if (response.ok) {
        const data = await response.json();
        setMensaje(`Respuesta: ${data.mensaje}`);
      } else {
        setMensaje('Error en la solicitud');
      }
    } catch (error) {
      setMensaje('Error en la conexión con Azure Function');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Formulario conectado a Azure</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;