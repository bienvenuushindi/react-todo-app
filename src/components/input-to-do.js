import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const InputToDo = (props) => {
  const { name, append } = props;
  const [newTodo, setNewTodo] = useState('');
  const [inputWidth, setInputWidth] = useState(0);
  useEffect(() => {
    setInputWidth(document.getElementById(name).offsetWidth);
    const handleResize = () => setInputWidth(document.getElementById(name).offsetWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const appendToList = (e) => {
    if (e.key === 'Enter' || e.target.id === 'add-icon') {
      if (newTodo.length === 0) {
        alert('Required Field');
        return;
      }
      append(newTodo);
      setNewTodo('');
    }
  };
  const leftValue = `${inputWidth / 2 - 30}px`;
  const styles = {
    bottom: '35px',
    left: leftValue,
    position: 'relative',
    height: '30px',
  };

  return (
    <div className="form-group">
      <input
        type="text"
        name={name}
        id={name}
        className="form-control rounded-pill"
        placeholder="Add todo task"
        value={newTodo}
        onKeyDown={appendToList}
        onChange={handleChange}
      />
      <button
        onClick={appendToList}
        type="button"
        className="bg-success border-0 rounded-pill text-white"
        id="add-icon"
        style={styles}
      >
        ADD
      </button>
    </div>
  );
};
InputToDo.propTypes = {
  name: PropTypes.string.isRequired,
  append: PropTypes.func.isRequired,
};

export default InputToDo;
