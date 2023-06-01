import styles from '../styles/Home.module.css';
import TodoList from './TodoListParent';
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>


      <main>
        <TodoList />
        {/* <Link href="/TodoListParent">Link to Todo List page</Link> */}

      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
