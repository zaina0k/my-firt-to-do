import styles from './Task.module.css'
function Task({taskName,taskDesc}){
  return (
    <li className={styles.task}>
      <h2 className={styles.title}>{taskName}</h2>
      <p className={styles.description}>{taskDesc}</p>
    </li>
  )
}

export default Task;