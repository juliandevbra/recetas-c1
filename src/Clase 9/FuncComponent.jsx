import React, { useEffect, useState } from "react";

const FuncComponent = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("Se ejecuta el cuerpo de la función");

  // componentDidMount()
  useEffect(() => {
    console.log("Se ejecuta el useEffect una sola vez");
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  // componentDidUpdate()
  useEffect(() => {
    console.log("Se ejecuta el useEffect cuando se actualiza contador");
  }, [contador, nombre]);

  // componentWillUnmount()
  useEffect(() => {
    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  //   if (loading) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }

  return (
    <div>
      {console.log("Se ejecuta el render  de la función")}
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </>
      )}
    </div>
  );
};

export default FuncComponent;
