import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://intgrfunction.azurewebsites.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      const data = await res.json();
      setMensaje(data.message || 'Respuesta del backend recibida');
    } catch (error) {
      setMensaje('Error al enviar los datos');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Formulario Azure</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;