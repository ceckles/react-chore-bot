import React from 'react';

const List = ({ chores }) => {

const resolveChore = (id) => {
    let elem = document.getElementById(id);
    elem.remove();
  }
  return (
    <>
      {chores.map((chore) => {
        const { id, name, day, image } = chore;
        return (
            <div key={id} className='chore' id={id}>
                <img tabIndex="0" alt={name} src={image} className="chore-images" />
                <div>
                <h4 tabIndex="0">{name}</h4>
                <p tabIndex="0">Due: {day}</p>
                <div className="grow">
                    <img tabIndex="0" src="../icons/delete-button.png" onClick={() => resolveChore(id)} className="remove-button" alt="remove chore" />   
                </div>
            </div>
        </div>
        );
      })}
    </>
  );
};

export default List;