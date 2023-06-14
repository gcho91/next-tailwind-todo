import styles from "../styles/Parent.module.css"
import TodoList from './TodoListParent';

export default function Home() {
  return <div className={styles.parent}>
    <TodoList />

  </div>



}

