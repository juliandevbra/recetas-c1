import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://dog.ceo/api/breeds/image/random";

  const fetchData = () => {
    fetch(url)
      .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
      })
      .then((data) => {
        console.log(data);
        setDog(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <img src={dog.message} alt="" width={400} />
          <button onClick={fetchData}>Next</button>
        </>
      )}
    </div>
  );
};

export default FetchExample;

//Montaje
//Parte funcional
//Parte de render
//useEffect -> actualización del estado

//Actualización
//Parte funcional
//Parte de render
