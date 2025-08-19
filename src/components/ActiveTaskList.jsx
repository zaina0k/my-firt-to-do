import { useState } from 'react';
import styles from '../css/ActiveTaskList.module.css';
import classes from '../css/Task.module.css';
import Modal from './Modal';
import NewTask from './NewTask';
import Task from './Task';

function ActiveTaskList({ isModal, closeModal }) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function AddTasksHandler(newTaskData) {
    setTasks((currentTasks) => [newTaskData, ...currentTasks]);
  }

  function RemoveTaskHandler(taskTitle) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.title !== taskTitle));
    setCompletedTasks((currentCompleted) =>
      currentCompleted.filter((task) => task.title !== taskTitle),
    );
  }

  function CompleteTaskHandler(taskTitle) {
    const completedTask = tasks.find((task) => task.title === taskTitle);
    if (completedTask) {
      setCompletedTasks((currentCompleted) => [completedTask, ...currentCompleted]);
      setTasks((currentTasks) => currentTasks.filter((task) => task.title !== taskTitle));
    }
  }

  return (
    <>
      {isModal && (
        <Modal clickOffModal={closeModal}>
          <NewTask onCancel={closeModal} onAddNewTask={AddTasksHandler} />
        </Modal>
      )}
      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.title}
            taskName={task.title}
            taskDesc={task.desc}
            onComplete={() => CompleteTaskHandler(task.title)}
            onDelete={() => RemoveTaskHandler(task.title)}
          />
        ))}
      </ul>
      <h2>Completed Tasks</h2>
      <ul className={styles.tasks}>
        {completedTasks.map((task) => (
          <li className={classes.task} key={task.title}>
            <h2 className={classes.title}>{task.title}</h2>
            <p className={classes.description}>{task.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ActiveTaskList;
