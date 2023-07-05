import React from "react";

const Person = ({ id, name, image, age }) => {
  return (
    <div key={id} className="person">
      <h4>{name}</h4>

      <img src={image} alt="" />

      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
