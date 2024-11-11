import { useState } from "react";
import Message from "./Message";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

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

    // regex
    // let validacionParaQueNoHayaEspaciosAlPrincipio = /^\s/
    // !/^\s/.test(user.nombre)
    //user.nombre.startsWith(" ") -> boolean
    // los strings son de alguna arrays de caracteres
    // user.nombre[0] !== " " -> boolean
    // trimStart()
    // user.nombre.includes(" ") ❌
    // user.nombre.substring(0,1) == " "

    console.log(regexNum.test(user.direccion));
    if (
      user.nombre.trim().length >= 3 &&
      user.direccion.trim().includes(" ") &&
      regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
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

// {
//   condicion ? true : false;
// }

// if(condicion){
//   condicion es true
// } else {
//   condicion es false
// }
