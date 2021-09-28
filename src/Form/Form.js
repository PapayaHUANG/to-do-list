import { useState } from 'react';
import { Items } from './item';
import './Form.css';

function Form() {
  const [item, setItem] = useState('');
  const [list, setList] = useState(Items);
  const [isFormOn, setIsFormOn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = {
        id: new Date().getTime().toString(),
        isComplete: false,
        name: item,
      };
      setList([...list, newItem]);
    }
    setItem('');
  };

  const itemHander = (id) => {
    setItem(
      list.map((newItem) => {
        if (newItem.id === id)
          return { ...newItem, isComplete: !newItem.isComplete };
        return newItem;
      })
    );
    console.log(item);
  };

  const deleteItem = (id) => {
    const newItemList = list.filter((item) => item.id !== id);
    setList(newItemList);
  };

  return (
    <>
      <article className="item-container">
        {list.map((item) => {
          const { id, name, isComplete } = item;
          return (
            <div className="item" key={id}>
              <i
                className={
                  isComplete
                    ? 'fas fa-check-circle check'
                    : 'far fa-check-circle check'
                }
                onClick={() => itemHander(id)}
              ></i>
              {name}

              <i
                className="far fa-trash-alt delete"
                onClick={() => deleteItem(id)}
              ></i>
            </div>
          );
        })}
        <button className="new-task-btn" onClick={() => setIsFormOn(!isFormOn)}>
          New Task
        </button>
      </article>

      {isFormOn && (
        <form className="form" onSubmit={submitHandler}>
          <input
            name="item"
            type="text"
            id="item"
            // value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Put your text here"
          ></input>
          <button className="btn">+</button>
        </form>
      )}
    </>
  );
}
export default Form;
