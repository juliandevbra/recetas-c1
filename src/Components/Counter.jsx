const Counter = ({ counter, setCounter }) => {
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="btnGroup">
      <button disabled={counter == 0} onClick={restar}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;
