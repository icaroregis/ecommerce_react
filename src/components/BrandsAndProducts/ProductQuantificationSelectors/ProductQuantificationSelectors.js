import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './style.css';

export default function ProductQuantificationSelectors({
  price,
  type,
  action,
  total,
}) {
  const [addState, setAddState] = useState(0);

  async function AddState() {
    setAddState(addState + 1);
    action(type, 'inc', price);
  }

  function RemoveState() {
    if (addState <= 0) {
      return 0;
    } else {
      setAddState(addState - 1);
      action(type, 'dec', price);
    }
  }

  console.log(type, 'total de cada item');

  return (
    <>
      <div className="BodyDataSeven">
        <div className="DivRemove" onClick={RemoveState}>
          <div className="SubtractionIcon" />
        </div>

        <div className="DivDisplay">{addState}</div>

        <div className="DivAdd" onClick={AddState}>
          <AiOutlinePlus />
        </div>
      </div>
      <div className="BodyDataEight">
        {total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </>
  );
}
