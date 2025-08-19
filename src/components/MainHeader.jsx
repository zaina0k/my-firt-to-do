import { MdMessage, MdPostAdd } from 'react-icons/md';
import styles from '../css/MainHeader.module.css';

function MainHeader({ onCreateTask }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        To-Do App
      </h1>
      <p>
        <button className={styles.button} onClick={onCreateTask}>
          <MdPostAdd size={18} />
          New Task
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
