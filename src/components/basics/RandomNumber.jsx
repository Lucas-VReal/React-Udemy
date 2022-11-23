import Reatc from "react";

export default (props) => {

  const {min, max} = props;
  
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Random Number</h2>
      <p>
        <strong>Mínimum: </strong>
        {min}
      </p>
      <p>
        <strong>Maximum: </strong>
        {max}
      </p>
      <p>
        <strong>Result: </strong>
        {random}
      </p>
    </div>
  );
};
