import { useState } from "react";
import Message from "./Message";

const Form = () => {
  // const [nombre, setNombre] = useState("");
  // const [direccion, setDireccion] = useState("");

  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
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
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Dirección</label>
          <input
            type="text"
            value={user.direccion}
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
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
