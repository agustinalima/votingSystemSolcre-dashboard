import '../css/loginadmin.css'

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const error = new Error("Error desconocido");

      const response = await fetch(`http://localhost:3002/api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const admin = data.data.admins.find((admin) => admin.email === email && admin.password === password);

        if (admin) {
          // Las credenciales son correctas.
          setIsLoggedIn(true);
          navigate("/admin");
        } else {
          // Las credenciales son incorrectas.
          throw error;
        }
      } else {
        // Ocurrió un error al enviar la solicitud.
        throw error;
      }
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
    }
  };

  useEffect(() => {
    // Código que se ejecuta cuando el componente se monta y se actualiza.
  }, [isLoggedIn]);

  return (
    <div className="login">
        <div className="login-picture"></div>
    <div className='form-container'>
        <form>
        <h1>Login in 👋🏽</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Iniciar sesión</button>
      </form>

      {isLoggedIn && <p>Bienvenido!</p>}
    </div>
    </div>
  );
};

export default Form;
