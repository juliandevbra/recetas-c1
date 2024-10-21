import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenido al proyecto de recetas</h1>
      <Card title="Receta ejemplo 1" text="Instrucciones para hacer un budin" />
      <Card title="Receta 2" text="Como leudar una masa de pizza" />
      <Card
        title="Esta es otra receta más"
        text="Como hacer para que la pasta salga deliciosa"
      />

      <h3>Quienes somos</h3>
      <Card title="Luis Cerda" text="Desarrollador Full Stack">
        <h3>Facebook</h3>
      </Card>
      <Card title="Nikoll Quintero" text="Ingeniera Devops">
        <h3>Behance</h3>
        <h3>Linkedin</h3>
      </Card>
    </>
  );
}

export default App;
