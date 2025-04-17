import React, { useState } from 'react';

function EditarUsuario() {
  // Estado inicial con algunos valores predeterminados (pueden venir de un formulario o base de datos)
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: ''
  });

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  };

  // Maneja el envío del formulario (se puede vincular a una base de datos o localStorage)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos, por ejemplo, guardarlos en un archivo JSON o API.
    alert('Datos guardados');
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="correo"
            value={usuario.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarUsuario;
