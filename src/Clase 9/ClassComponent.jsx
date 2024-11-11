import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      contador: 0,
    };
    console.log("Se ejecutó el constructor", 1);
  }

  componentDidMount() {
    console.log("Se ejecutó componentDidMount", 2);
  }
  componentDidUpdate() {
    console.log("Esto se ejecuta cuando mi componente se actualizó");
  }
  componentWillUnmount() {}

  render() {
    console.log("Se ejecutó el render", 3);
    return <div>ClassComponent</div>;
  }
}
