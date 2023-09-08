import React from 'react';
// import "./index.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
         <>
         <div key={id} className='man'>
            <img src={image} alt="photo" />
            <div className="name">
                <h3>Name: {name}</h3>
                <h6>Age: {age}</h6>
            </div>
         </div>
         </> 
        );
      })}
    </>
  );
};

export default List;