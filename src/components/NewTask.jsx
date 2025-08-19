import { useState } from 'react';
import styles from '../css/NewTask.module.css';
function NewTask({ onCancel, onAddNewTask }) {
  const [enteredTitle, onTitleChange] = useState('');
  const [enteredDesc, onDescChange] = useState('');
  function descChangeHandler(event) {
    onDescChange(event.target.value);
  }
  function titleChangeHandler(event) {
    onTitleChange(event.target.value);
  }
  function submitNewTaskHandler(event) {
    event.preventDefault();
    const newTaskData = {
      title: enteredTitle,
      desc: enteredDesc,
    };
    console.log(newTaskData);
    onAddNewTask(newTaskData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitNewTaskHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required onChange={titleChangeHandler} />
      </p>
      <p>
        <label htmlFor="body">Description</label>
        <textarea id="body" required rows={3} onChange={descChangeHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
export default NewTask;
