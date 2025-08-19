import styles from '../css/Task.module.css';
function Task({ taskName, taskDesc, onComplete, onDelete }) {
  return (
    <li className={styles.task}>
      <h2 className={styles.title}>{taskName}</h2>
      <p className={styles.description}>{taskDesc}</p>
      <div className={styles['task-actions']}>
        <button className={styles['complete-btn']} onClick={onComplete}>
          Completed
        </button>
        <button className={styles['delete-btn']} onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
