import { useState } from "react";
import Message from "../Components/Message";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    if (
      user.nombre.trim().length >= 3 &&
      user.direccion.trim().includes(" ") &&
      regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={user.nombre}
            name="nombre"
            onChange={handleChange}
          />
          <label>Dirección</label>
          <input
            type="text"
            value={user.direccion}
            name="direccion"
            onChange={handleChange}
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Debe colocar la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
