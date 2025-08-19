import styles from './ActiveTaskList.module.css';
import Task from './Task';

function ActiveTaskList() {
  return (
    <ul className={styles.tasks}>
      <Task taskName="test" taskDesc="Hello World this is a test" />
      <Task taskName="test" taskDesc="Hello World" />
      <Task taskName="test" taskDesc="Hello World" />
      <Task taskName="test" taskDesc="Hello World" />
    </ul>
  );
}

export default ActiveTaskList;
