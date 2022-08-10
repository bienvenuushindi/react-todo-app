import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToDOItem = (props) => {
  const {
    completed, task, index: itemIndex, updateState,
  } = props;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [toDoTask, setToDoTask] = useState(task);
  const [edit, setEdit] = useState(false);
  const completedField = 'completed';
  const taskField = 'completed';
  const updateCompleted = (e, index) => {
    setIsCompleted(!isCompleted);
    updateState(completedField, e.target.checked, index);
  };

  const deleteItem = (e, index) => {
    const { deleteTodo } = props;
    deleteTodo(index);
  };

  const viewEdit = () => {
    setEdit(!edit);
  };

  const update = (e, index) => {
    setToDoTask(e.target.value);
    updateState(taskField, e.target.value, index);
  };

  const updateDone = (ev) => {
    if (ev.key === 'Enter') {
      setEdit(!edit);
    }
  };

  const TaskName = () => (
    !isCompleted ? toDoTask : <del>{toDoTask}</del>
  );

  return (
    <li id={`item-${itemIndex}`} className="list-group-item ">
      <div className={edit ? 'd-none' : 'd-flex justify-content-between'}>
        <div className="checkbox form-check">
          <input
            type="checkbox"
            name="state"
            className="form-check-input"
            onChange={(e) => updateCompleted(e, itemIndex)}
            defaultChecked={isCompleted}
          />
        </div>
        <div className="text flex-grow-1 text-start" onDoubleClick={viewEdit}>
          <TaskName />
        </div>
        <button type="button" className="icon rounded-circle py-1 px-2 small text-white bg-danger border-0" onClick={(e) => deleteItem(e, itemIndex)} onKeyDown={(e) => deleteItem(e, itemIndex)}>
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className={edit ? 'bg-success' : 'd-none'}>
        <input
          type="text"
          name="edit-task"
          className="form-control"
          value={toDoTask}
          onChange={(e) => update(e, itemIndex)}
          onKeyDown={updateDone}
        />
      </div>
    </li>
  );
};

ToDOItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default ToDOItem;
