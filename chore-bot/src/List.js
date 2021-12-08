import React, { useState } from 'react';
import whooshSfx from './sounds/whoosh.flac';


const List = ({chores, setCount}) => {
  const [choreList, setChoreList] = useState(chores);
  const sfxWhoosh = new Audio(whooshSfx);


  // if( chores.length === 0 ) {
    
  // }

  const resolveChore = (index) => {
    let array = [...choreList];
    array.splice(index, 1);
    setChoreList(array);
    setCount(array.length);
    sfxWhoosh.play();

  }

  return (
    <>
      {choreList.map((chore, index) => {
        const { id, name, day, due,  image } = chore;
        return (
            <div key={id} className='chore'>
                <img tabIndex="0" alt={name} src={image} className="chore-images" />
                <div>
                <h4 tabIndex="0">{name}</h4>
                <p tabIndex="0">Due: {due}</p>
                <div className="grow">
                    <img tabIndex="0" src="../icons/delete-button.png" onClick={() => resolveChore(index)} className="remove-button" alt="remove chore" />   
                </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;